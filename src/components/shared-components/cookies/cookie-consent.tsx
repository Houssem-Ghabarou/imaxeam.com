"use client";

import { useState } from "react";

type CookieConsentVariant = "banner" | "modal" | "compact";

interface CookieConsentProps {
  variant?: CookieConsentVariant;
  onAccept?: () => void;
  onDecline?: () => void;
  onManage?: () => void;
  privacyPolicyUrl?: string;
}

export function CookieConsent({
  variant = "banner",
  onAccept,
  onDecline,
  onManage,
  privacyPolicyUrl = "#",
}: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleAccept = () => {
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    setIsVisible(false);
    onDecline?.();
  };

  const handleManage = () => {
    onManage?.();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  // Helper function to conditionally join class names
  const classNames = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div
      className={classNames(
        "fixed z-50 font-sans text-sm",
        variant === "banner" &&
          "top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl",
        variant === "modal" && "bottom-4 right-25  xl:right-30 max-w-xs",
        variant === "compact" && "bottom-4 right-4 max-w-xs"
      )}
    >
      <div
        className={classNames(
          "bg-white rounded-lg shadow-lg overflow-hidden",
          variant === "banner" && "p-4 flex items-center justify-between",
          variant === "modal" && "px-8 py-5 w-[400px]",
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
                <a
                  href={privacyPolicyUrl}
                  className="text-orange-500 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </>
            ) : (
              <>
                Our website use cookies. By continuing, we assume your
                permission to deploy cookies as detailed in our{" "}
                <a
                  href={privacyPolicyUrl}
                  className="text-orange-500 hover:underline"
                >
                  Privacy Policy
                </a>
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
                  onClick={handleAccept}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-4xl transition-colors cursor-pointer"
                >
                  Accept cookies
                </button>
                <button
                  onClick={handleDecline}
                  className="text-gray-600 hover:text-gray-800 px-4 py-2 transition-colors cursor-pointer"
                >
                  Decline
                </button>
              </>
            ) : (
              <>
                <div className="flex w-full gap-2">
                  <button
                    onClick={handleAccept}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-4xl transition-colors flex-1 text-center cursor-pointer"
                  >
                    Accept all
                  </button>
                  <button
                    onClick={handleManage}
                    className="border border-gray-200 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-4xl transition-colors flex-1 text-center cursor-pointer"
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

        {/* {variant !== "banner" && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-[-50] text-gray-400 hover:text-gray-500 cursor-pointer"
            aria-label="Close"
          >
            <span aria-hidden="true" className="text-lg ">
              &times;
            </span>
          </button>
        )} */}
      </div>
    </div>
  );
}
