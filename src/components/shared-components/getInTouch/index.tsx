"use client";

import type React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function GetInTouch() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

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

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required";
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
        message: formState.message,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        // Reset form after successful submission
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-4 xl:px-50 pt-15 xl:pt-40 flex flex-col xl:flex-row items-center gap-10">
      {/* Left Section - Form */}
      <div className="flex flex-col gap-4 xl:gap-8 w-full xl:w-[50%]">
        <h2 className="text-[30px] xl:text-[78px] font-bold text-orange-100">
          Get in Touch
        </h2>
        <p>
          Have questions or need assistance? We're here to help! Contact us
          today and experience top-notch support and solutions tailored to your
          needs.
        </p>
        <form
          className="flex flex-col gap-8 xl:w-[80%]"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } p-3 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-orange-100 w-full`}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } p-3 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-orange-100 w-full`}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formState.subject}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } p-3 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-orange-100 w-full`}
              aria-invalid={errors.subject ? "true" : "false"}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          <div className="space-y-2">
            <textarea
              name="message"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } p-3 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-orange-100 w-full min-h-[120px]`}
              aria-invalid={errors.message ? "true" : "false"}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-100 text-white w-[90%] self-center py-3 rounded-xl cursor-pointer transition disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
          >
            {isSubmitting ? (
              <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      {/* Right Section - Image */}
      <div className="w-full xl:w-[50%] hidden xl:flex justify-center">
        <img src="/get-in-touch.png" alt="Contact Us" className="w-full" />
      </div>
    </div>
  );
}
