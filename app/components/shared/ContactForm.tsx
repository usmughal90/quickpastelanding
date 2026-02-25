"use client";

import { useState } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [result, setResult] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (fields: { name: string; email: string; message: string }): Errors => {
    const errs: Errors = {};
    if (!fields.name.trim()) errs.name = "Name is required.";
    if (!fields.email) errs.email = "Email is required.";
    else if (!EMAIL_REGEX.test(fields.email)) errs.email = "Please enter a valid email address.";
    if (!fields.message.trim()) errs.message = "Message is required.";
    else if (fields.message.trim().length < 10) errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setResult("loading");

    formData.append("access_key", `${process.env.NEXT_PUBLIC_FORM_KEY}`);
    formData.append("subject", "New Contact Form Submission");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("error");
      }
    } catch {
      setResult("error");
    } finally {
      setTimeout(() => setResult("idle"), 3000);
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full px-5 py-3 bg-transparent focus:outline-none transition-colors ${
      hasError ? "text-red-500 dark:text-red-400" : "text-black dark:text-white"
    }`;

  const inputWrapperClass = (hasError: boolean) =>
    `w-full bg-gray-100 dark:bg-[#111111] border rounded-2xl overflow-hidden transition-colors ${
      hasError
        ? "border-red-400 dark:border-red-500"
        : "border-gray-200 dark:border-white/10"
    }`;

  return (
    <div className="w-full max-w-lg flex flex-col gap-2">
      <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full">
        {/* Hidden honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" />

        {/* Name */}
        <div className="flex flex-col gap-1">
          <div className={inputWrapperClass(!!errors.name)}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              onChange={(e) => {
                if (errors.name)
                  setErrors((prev) => ({
                    ...prev,
                    name: e.target.value.trim() ? undefined : "Name is required.",
                  }));
              }}
              onBlur={(e) =>
                setErrors((prev) => ({
                  ...prev,
                  name: e.target.value.trim() ? undefined : "Name is required.",
                }))
              }
              className={fieldClass(!!errors.name)}
            />
          </div>
          {errors.name && (
            <p className="text-xs font-bold text-left text-red-500 dark:text-red-400 px-2">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <div className={inputWrapperClass(!!errors.email)}>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              onChange={(e) => {
                if (errors.email)
                  setErrors((prev) => ({
                    ...prev,
                    email: EMAIL_REGEX.test(e.target.value)
                      ? undefined
                      : "Please enter a valid email address.",
                  }));
              }}
              onBlur={(e) =>
                setErrors((prev) => ({
                  ...prev,
                  email: !e.target.value
                    ? "Email is required."
                    : !EMAIL_REGEX.test(e.target.value)
                    ? "Please enter a valid email address."
                    : undefined,
                }))
              }
              className={fieldClass(!!errors.email)}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-left font-bold text-red-500 dark:text-red-400 px-2">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <div className={`${inputWrapperClass(!!errors.message)} shadow-2xl`}>
            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              onChange={(e) => {
                if (errors.message)
                  setErrors((prev) => ({
                    ...prev,
                    message:
                      e.target.value.trim().length >= 10
                        ? undefined
                        : "Message must be at least 10 characters.",
                  }));
              }}
              onBlur={(e) =>
                setErrors((prev) => ({
                  ...prev,
                  message: !e.target.value.trim()
                    ? "Message is required."
                    : e.target.value.trim().length < 10
                    ? "Message must be at least 10 characters."
                    : undefined,
                }))
              }
              className={`${fieldClass(!!errors.message)} resize-none`}
            />
          </div>
          {errors.message && (
            <p className="text-xs text-left font-bold text-red-500 dark:text-red-400 px-2">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={result === "loading"}
          className="w-full px-6 py-3 bg-primary border border-white text-white dark:bg-white dark:text-black font-semibold rounded-xl hover:text-[#ddeefc] dark:hover:bg-gray-200 dark:hover:text-black transition-all hover:scale-[1.02] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {result === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Toast feedback */}
      {result === "success" && ( 
        <p className="text-sm text-green-600 dark:text-green-400 font-medium text-center">
           Message sent! We&apos;ll get back to you soon.
        </p>
      )}
      {result === "error" && (
        <p className="text-sm text-red-500 dark:text-red-400 font-medium text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}