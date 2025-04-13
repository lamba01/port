import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [state, handleSubmit] = useForm("xoveyvay");
  const navigate = useNavigate();

  // Redirect after successful submission
  useEffect(() => {
    if (state.succeeded) {
      navigate("/thank-you");
    }
  }, [state.succeeded, navigate]);

  return (
    <section id="contact" className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s work together</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Have a project in mind or want to collaborate? Drop me a message.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md border-black border-solid"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md border-black border-solid"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-[#333333] transition cursor-pointer"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
