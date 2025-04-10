"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CookieConsentVariant = "banner" | "modal" | "compact";
type CookieCategory = "necessary" | "functional" | "analytics" | "marketing";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentProps {
  variant?: CookieConsentVariant;
  onAccept?: (preferences: CookiePreferences) => void;
  onDecline?: () => void;
  onManage?: () => void;
  privacyPolicyUrl?: string;
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  functional: false,
  analytics: false,
  marketing: false,
};

export function CookieConsent({
  variant = "banner",
  onAccept,
  onDecline,
  privacyPolicyUrl = "/privacy-policy",
}: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showManageView, setShowManageView] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  // Check localStorage on mount to see if user has already made a choice
  useEffect(() => {
    const storedPreferences = localStorage.getItem("cookiePreferences");

    if (storedPreferences) {
      // User has already made a choice, don't show the modal
      try {
        const parsedPreferences = JSON.parse(storedPreferences);
        setPreferences(parsedPreferences);
      } catch (error) {
        console.error("Error parsing stored preferences:", error);
        setIsVisible(true);
      }
    } else {
      // User hasn't made a choice yet, show the modal
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };

    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setIsVisible(false);
    setShowManageView(false);
    onAccept?.(allAccepted);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    setIsVisible(false);
    setShowManageView(false);
    onAccept?.(preferences);
  };

  const handleDecline = () => {
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify(defaultPreferences)
    );
    setPreferences(defaultPreferences);
    setIsVisible(false);
    onDecline?.();
  };

  const handleManage = () => {
    setShowManageView(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleTogglePreference = (category: CookieCategory) => {
    if (category === "necessary") return; // Can't toggle necessary cookies

    setPreferences((prev) => {
      const newPreferences = {
        ...prev,
        [category]: !prev[category],
      };
      return newPreferences;
    });
  };

  // Helper function to conditionally join class names
  const classNames = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ");
  };

  if (!isVisible) return null;

  // Render the manage view if it's active
  if (showManageView) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Cookie Preferences</h2>
              <button
                onClick={() => setShowManageView(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                aria-label="Back"
              >
                <span aria-hidden="true" className="text-lg">
                  ←
                </span>
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Customize your cookie preferences. Necessary cookies are always
              enabled.
            </p>
          </div>

          <div className="p-4 max-h-[60vh] overflow-y-auto">
            {/* Necessary cookies - always enabled
            <div className="mb-4 pb-4 border-b">
              <div className="flex items-center justify-between">
                <label className="font-medium">Necessary Cookies</label>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                  <span className="inline-block h-4 w-4 transform rounded-full shadow-lg ring-0 transition translate-x-5 bg-green-500" />
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                These cookies are essential for the website to function
                properly.
              </p>
            </div> */}
            {/* Functional cookies */}
            <div className="mb-4 pb-4 border-b">
              <div className="flex items-center justify-between">
                <label htmlFor="functional-toggle" className="font-medium">
                  Functional Cookies
                </label>
                <button
                  onClick={() => handleTogglePreference("functional")}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 cursor-pointer"
                  role="switch"
                  aria-checked={preferences.functional}
                  id="functional-toggle"
                >
                  <span
                    className={`${
                      preferences.functional
                        ? "translate-x-5 bg-green-500"
                        : "translate-x-1 bg-white"
                    } inline-block h-4 w-4 transform rounded-full  shadow-lg ring-0 transition`}
                  />
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                These cookies enable personalized features and functionality.
              </p>
            </div>
            {/* Analytics cookies */}
            <div className="mb-4 pb-4 border-b">
              <div className="flex items-center justify-between">
                <label htmlFor="analytics-toggle" className="font-medium">
                  Analytics Cookies
                </label>
                <button
                  onClick={() => handleTogglePreference("analytics")}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 cursor-pointer"
                  role="switch"
                  aria-checked={preferences.analytics}
                  id="analytics-toggle"
                >
                  <span
                    className={`${
                      preferences.analytics
                        ? "translate-x-5 bg-green-500"
                        : "translate-x-1 bg-white"
                    } inline-block h-4 w-4 transform rounded-full  shadow-lg ring-0 transition`}
                  />
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                These cookies help us understand how visitors interact with our
                website.
              </p>
            </div>
            {/* Marketing cookies */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <label htmlFor="marketing-toggle" className="font-medium">
                  Marketing Cookies
                </label>
                <button
                  onClick={() => handleTogglePreference("marketing")}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 cursor-pointer"
                  role="switch"
                  aria-checked={preferences.marketing}
                  id="marketing-toggle"
                >
                  <span
                    className={`${
                      preferences.marketing
                        ? "translate-x-5 bg-green-500"
                        : "translate-x-1 bg-white "
                    } inline-block h-4 w-4 transform rounded-full shadow-lg ring-0 transition`}
                  />
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                These cookies are used to track visitors across websites to
                display relevant advertisements.
              </p>
            </div>
          </div>

          <div className="p-4 border-t bg-gray-50">
            <div className="flex gap-2">
              <button
                onClick={handleSavePreferences}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors flex-1 cursor-pointer"
              >
                Save preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="border border-gray-200 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md transition-colors cursor-pointer"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular cookie consent modal
  return (
    <div
      className={classNames(
        "fixed z-50 font-sans text-sm",
        variant === "banner" &&
          "top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl",
        variant === "modal" && "bottom-4 right-4 max-w-xs",
        variant === "compact" && "bottom-4 right-4 max-w-xs"
      )}
    >
      <div
        className={classNames(
          "bg-white rounded-lg shadow-lg overflow-hidden",
          variant === "banner" && "p-4 flex items-center justify-between",
          variant === "modal" && "p-4",
          variant === "compact" && "p-3"
        )}
      >
        <div
          className={classNames(
            "flex",
            variant === "banner" && "items-center gap-3 flex-1",
            variant === "modal" && "flex-col gap-2",
            variant === "compact" && "flex-col gap-1"
          )}
        >
          <div
            className={classNames(
              "flex items-center gap-2",
              variant !== "banner" && "w-full"
            )}
          >
            <div className="flex-shrink-0">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-500">🍪</span>
              </div>
            </div>
            <span
              className={classNames(
                "font-medium text-gray-900",
                variant === "compact" && "text-xs"
              )}
            >
              Our website uses cookies
            </span>
            {variant === "banner" && (
              <button
                onClick={handleClose}
                className="ml-auto text-gray-400 hover:text-gray-500 cursor-pointer"
                aria-label="Close"
              >
                <span aria-hidden="true" className="text-lg">
                  &times;
                </span>
              </button>
            )}
          </div>

          <p
            className={classNames(
              "text-gray-600",
              variant === "banner" && "flex-1 ml-9",
              variant === "compact" && "text-xs"
            )}
          >
            {variant === "compact" ? (
              <>
                By continuing, we assume your permission to deploy cookies as
                detailed in our{" "}
                <Link
                  href={"/privacy-policy"}
                  className="text-orange-500 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </>
            ) : (
              <>
                Our website use cookies. By continuing, we assume your
                permission to deploy cookies as detailed in our{" "}
                <Link
                  href={"/privacy-policy"}
                  className="text-orange-500 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </>
            )}
          </p>

          <div
            className={classNames(
              "flex",
              variant === "banner" && "items-center gap-2 ml-auto",
              variant === "modal" && "flex-col gap-2 w-full mt-1",
              variant === "compact" && "flex-col gap-1 w-full mt-1"
            )}
          >
            {variant === "banner" ? (
              <>
                <button
                  onClick={handleAcceptAll}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors cursor-pointer"
                >
                  Accept cookies
                </button>
                <button
                  onClick={handleDecline}
                  className="text-gray-600 hover:text-gray-800 px-4 py-2 transition-colors cursor-pointer"
                >
                  Decline
                </button>
                <button
                  onClick={handleManage}
                  className="text-gray-600 hover:text-gray-800 px-4 py-2 transition-colors cursor-pointer"
                >
                  Manage
                </button>
              </>
            ) : (
              <>
                <div className="flex w-full gap-2">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors flex-1 text-center cursor-pointer"
                  >
                    Accept all
                  </button>
                  <button
                    onClick={handleManage}
                    className="border border-gray-200 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md transition-colors flex-1 text-center cursor-pointer"
                  >
                    Manage
                  </button>
                </div>
                <button
                  onClick={handleDecline}
                  className="text-gray-400 hover:text-gray-600 text-center w-full text-xs py-1 cursor-pointer"
                >
                  Decline
                </button>
              </>
            )}
          </div>
        </div>

        {variant !== "banner" && (
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 cursor-pointer"
            aria-label="Close"
          >
            <span aria-hidden="true" className="text-lg">
              &times;
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
