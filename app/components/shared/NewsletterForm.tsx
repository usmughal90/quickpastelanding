"use client";

import { useState } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

export default function NewsletterForm() {
  const [result, setResult] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    if (!value) return "Email is required.";
    if (!EMAIL_REGEX.test(value)) return "Please enter a valid email address.";
    return "";
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }

    setEmailError("");
    setResult("loading");

    formData.append("access_key", `${process.env.NEXT_PUBLIC_FORM_KEY}`);
    formData.append("subject", "New User Subscribe");

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

  return (
    <div className="flex flex-col items-center gap-2 relative">
      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row gap-3 justify-center items-start max-w-lg w-full bg-gray-100 dark:bg-[#111111] p-2 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl"
      >
        {/* Hidden honeypot field to prevent spam */}
        <input type="checkbox" name="botcheck" className="hidden" />

        <div className="w-full flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => {
              // Re-validate on change only if there's already an error (live correction feedback)
              if (emailError) setEmailError(validateEmail(e.target.value));
            }}
            onBlur={(e) => setEmailError(validateEmail(e.target.value))}
            className={`w-full px-5 py-2 bg-transparent focus:outline-none ${
              emailError
                ? "text-red-500 dark:text-red-400"
                : "text-black dark:text-white"
            }`}
          />
          {emailError && (
            <p className="text-xs font-bold text-red-500 dark:text-red-400 px-5 pt-0.5 absolute bottom-0 lg:-bottom-6 left-2">
              {emailError}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={result === "loading"}
          className="w-full sm:w-auto px-6 py-2 bg-primary text-white dark:bg-white dark:text-black font-semibold rounded-xl hover:text-[#ddeefc] dark:hover:bg-gray-200 dark:hover:text-black transition-all hover:scale-102 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 shrink-0"
        >
          {result === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {/* Submission feedback */}
      {result === "success" && (
        <p className="text-sm lg:absolute lg:-bottom-6  left-7 text-green-600 dark:text-green-400 font-medium">
          You&apos;re subscribed! Thanks for joining.
        </p>
      )}
      {result === "error" && (
        <p className="text-sm lg:absolute lg:-bottom-6 left-7 text-red-500 dark:text-red-400 font-medium">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
