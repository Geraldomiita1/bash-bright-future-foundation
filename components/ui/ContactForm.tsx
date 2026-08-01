"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactMessage, ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 font-body font-semibold text-sm text-charcoal-900 transition-colors hover:bg-gold-700 hover:text-sand-50 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactMessage, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-charcoal-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-sand-200 bg-sand-50 px-4 py-2.5 text-sm focus:border-forest-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-charcoal-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-sand-200 bg-sand-50 px-4 py-2.5 text-sm focus:border-forest-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-charcoal-700">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full rounded-md border border-sand-200 bg-sand-50 px-4 py-2.5 text-sm focus:border-forest-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-charcoal-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-sand-200 bg-sand-50 px-4 py-2.5 text-sm focus:border-forest-500"
        />
      </div>

      <SubmitButton />

      {state.status === "success" && (
        <p className="text-sm font-medium text-forest-700">{state.message}</p>
      )}
      {state.status === "error" && (
        <p className="text-sm font-medium text-red-700">{state.message}</p>
      )}
    </form>
  );
}
