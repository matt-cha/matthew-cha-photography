"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const PackagesLoginPage = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errorId = "packages-password-error";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/packages-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("Incorrect password");
        return;
      }

      router.push("/packages");
      router.refresh();
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center space-y-6 bg-white px-4 py-10 text-center font-cormorant md:flex-wrap md:px-0">
      <div className="flex">
        <p className="">Please enter the password to view packages</p>
      </div>
      <form className="flex" onSubmit={handleSubmit}>
        <label htmlFor="packages-password" className="sr-only">
          Packages password
        </label>
        <input
          id="packages-password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          disabled={isSubmitting}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
          className="rounded border px-2 py-1 disabled:cursor-not-allowed disabled:opacity-60"
        />
        <button
          className="ml-2 cursor-pointer rounded border px-2 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Checking…" : "View Packages"}
        </button>
      </form>
      {error && (
        <div className="flex">
          <p id={errorId} role="alert" className="text-sm text-red-500">
            {error}
          </p>
        </div>
      )}
    </div>
  );
};

export default PackagesLoginPage;
