"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Calendar, Mail, Phone } from "lucide-react";
import countryData from "@/data/countries.json";
import DynamicButton from "../Buttons/dynamicButton";
type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};
interface CountryInfo {
  name: string;
  code: string;
  flag: string;
  email: string;
  phone: string;
  hours: string;
  timezone: string;
}

export default function GetInTouch() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(
    null
  );
  const [countries, setCountries] = useState<CountryInfo[]>([]);

  useEffect(() => {
    // Set default country to first in the list
    if (countries.length > 0 && !selectedCountry) {
      setSelectedCountry(countries[0]);
    }
  }, [countries, selectedCountry]);
  useEffect(() => {
    // Load countries from the JSON file
    setCountries(countryData);
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formState.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !userID) {
      toast.error("Email service configuration is missing.");
      setIsSubmitting(false);
      return;
    }

    try {
      const emailParams = {
        name: formState.name,
        email: formState.email,
        company: formState.company,
        message: formState.message,
        to_email: process.env.NEXT_PUBLIC_EMAILS_TO_SEND_TO,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormState({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Email sending failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 xl:px-20 2xl:px-40  flex flex-col lg:flex-row  gap-10">
      <div className="w-full lg:w-[50%] bg-white py-8">
        <div className="mb-8">
          <h1 className="text-md lg:text-[70px] font-bold text-[#F26430] mb-2">
            Get in Touch
          </h1>
          <p className="text-gray-700 mb-4 text-md lg:text-[28px]">
            Our experts are ready to assist you!
          </p>

          <p className="text-sm xl:text-[18px] text-gray-600 mb-2">
            Have questions about{" "}
            <span className="font-medium">
              IBM MAS integration, managed services,
            </span>{" "}
            or <span className="font-medium">custom solutions?</span>
          </p>

          <p className="text-sm xl:text-[18px] text-gray-600 mb-6">
            <span className="text-[#F26430] font-medium">Contact us</span> today
            to see how <span className="font-medium">iMaxeam</span> can optimize
            your Maximo environment.
          </p>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <div className="flex items-center mb-2">
            <p className="text-sm text-gray-600">
              Select your country to view contact details:
            </p>
          </div>

          <select
            onChange={(e) => {
              const selectedCode = e.target.value;
              const country = countries.find((c) => c.code === selectedCode);
              setSelectedCountry(country || null);
            }}
            value={selectedCountry?.code || ""}
            className="w-[40%] border border-gray-300 rounded-md p-2"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>

        {selectedCountry && (
          <div className="space-y-6">
            <div className="flex items-center">
              <div
                className="w-15 h-15 rounded-full flex items-center justify-center mr-4"
                style={{
                  background:
                    "linear-gradient(113.64deg, rgba(170, 170, 170, 0.1) 22.31%, rgba(252, 119, 50, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                }}
              >
                <img
                  src="/email.svg"
                  alt="mail"
                  className="w-10 h-10 text-black"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                  }}
                />
              </div>
              <p className="text-gray-700">{selectedCountry.email}</p>
            </div>

            <div className="flex items-center">
              <div
                className="w-15 h-15 rounded-full  flex items-center justify-center mr-4"
                style={{
                  background:
                    "linear-gradient(113.64deg, rgba(170, 170, 170, 0.1) 22.31%, rgba(252, 119, 50, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                }}
              >
                <img
                  src="/phonenumber.svg"
                  alt="phone"
                  className="w-10 h-10"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                  }}
                />
              </div>
              <p className="text-gray-700">{selectedCountry.phone}</p>
            </div>

            <div className="flex items-center">
              <div
                className="w-15 h-15 rounded-full flex items-center justify-center mr-4"
                style={{
                  background:
                    "linear-gradient(113.64deg, rgba(170, 170, 170, 0.1) 22.31%, rgba(252, 119, 50, 0.2) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)",
                }}
              >
                <img
                  src="/datepicker.svg"
                  className="w-10 h-10 text-[#F26430]"
                  alt="datepicker"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                  }}
                />
              </div>
              <div>
                <p className="text-gray-700">{selectedCountry.hours}</p>
                <p className="text-xs text-gray-500">
                  ({selectedCountry.timezone})
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 xl:gap-4 w-full lg:w-[50%] p-10 rounded-xl bg-white/70 bg-gradient-to-bl from-gray-200/10 via-[#FC7732]/20 to-gray-200/10 backdrop-blur-[17.5px]">
        <div className="font-[600] font-[35px] ">Your Details</div>
        <form
          className="flex flex-col gap-8 xl:w-[80%] "
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <div className="text-black-300">Name</div>
            <input
              type="text"
              name="name"
              value={formState.name}
              placeholder="Write your name here"
              onChange={handleChange}
              disabled={isSubmitting}
              className={`border-0 border-b-1 bg-transparent ${
                errors.name ? "border-red-500" : "border-orange-100"
              } p-3 outline-none w-full focus:ring-0 placeholder:text-[#B3B3B3]`}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="text-black-300">Company</div>

            <input
              type="text"
              name="Company"
              placeholder="Company Name"
              value={formState.company}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`border-0 border-b-1 bg-transparent  ${
                errors.company ? "border-red-500" : "border-orange-100"
              } p-3 outline-none w-full focus:ring-0 placeholder:text-[#B3B3B3]`}
              aria-invalid={errors.company ? "true" : "false"}
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="text-black-300">Email</div>

            <input
              type="email"
              name="email"
              placeholder="Write your email here"
              value={formState.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`border-0 border-b-1 bg-transparent ${
                errors.email ? "border-red-500" : "border-orange-100"
              } p-3 outline-none w-full focus:ring-0 placeholder:text-[#B3B3B3]`}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <div className="text-black-300">Message</div>

            <textarea
              name="message"
              placeholder="Write your message here"
              value={formState.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`border-0 border-b-1 bg-transparent  min-h-[90px] ${
                errors.message ? "border-red-500" : "border-orange-100"
              } p-3 outline-none w-full focus:ring-0 placeholder:text-[#B3B3B3]`}
              aria-invalid={errors.message ? "true" : "false"}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            style={{
              boxShadow: "0px 2px 30px 0px #FF8A4F66",
            }}
            type="submit"
            disabled={isSubmitting}
            className="bg-[#FC7732] text-white w-[30%] self-start py-3 rounded-4xl cursor-pointer transition disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
          >
            {isSubmitting ? (
              <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
