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
        <h2 className="text-3xl font-bold mb-6">
          Request Your Website Consultation
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Whether you're an NGO or an academic journal, fill out the form to get
          a free consultation for your website. No commitment needed.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          {/* Email Address */}
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

          {/* Service */}
          <div>
            <label htmlFor="service" className="block mb-1 font-medium">
              What do you need?
            </label>
            <select
              name="service"
              id="service"
              className="w-full px-4 py-2 border rounded-md border-black border-solid"
              required
            >
              <option value="">Select a service...</option>
              <option value="NGO Website">A website for my NGO</option>
              <option value="Academic Journal">
                A website for an academic journal
              </option>
              <option value="Landing Page">A landing page</option>
              <option value="Redesign">Redesign my current site</option>
            </select>
            <ValidationError
              prefix="Service"
              field="service"
              errors={state.errors}
            />
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="budget" className="block mb-1 font-medium">
              What’s your estimated budget?
            </label>
            <select
              name="budget"
              id="budget"
              className="w-full px-4 py-2 border rounded-md border-black border-solid"
              required
            >
              <option value="">Choose one...</option>
              <option value="under-100k">Less than $100</option>
              <option value="100k-250k">$100 – $250</option>
              <option value="250k-500k">$300–$500</option>
              <option value="500k+">$500+</option>
            </select>
            <ValidationError
              prefix="Budget"
              field="budget"
              errors={state.errors}
            />
          </div>

          {/* Timeline */}
          <div>
            <label htmlFor="timeline" className="block mb-1 font-medium">
              When do you want to launch?
            </label>
            <select
              name="timeline"
              id="timeline"
              className="w-full px-4 py-2 border rounded-md border-black border-solid"
              required
            >
              <option value="">Pick an option...</option>
              <option value="2-weeks">In 1–2 weeks</option>
              <option value="1-month">In 3–4 weeks</option>
              <option value="flexible">No fixed timeline</option>
            </select>
            <ValidationError
              prefix="Timeline"
              field="timeline"
              errors={state.errors}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Tell me about your organization or project
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Briefly describe what you do and what you’re hoping to build..."
              rows="4"
              className="w-full px-4 py-2 border rounded-md border-black border-solid"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit */}
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
