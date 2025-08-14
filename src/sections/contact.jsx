import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [state, handleSubmit] = useForm("xoveyvay");
  const [captchaToken, setCaptchaToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      navigate("/thank-you");
    }
  }, [state.succeeded, navigate]);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-[#f5f5f5]"
      data-aos="fade-up"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Request Your Website Consultation
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Whether you run an online store, a salon, or a coaching business, I’m
          here to help you build a website that works for you. Please fill out
          this form to get started.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!captchaToken) {
              alert("Please complete the CAPTCHA");
              return;
            }
            handleSubmit(e);
          }}
          className="flex flex-col gap-5 text-left"
        >
          {/* Email */}
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
              Service needed?
            </label>
            <select
              name="service"
              id="service"
              required
              className="w-full px-4 py-2 border rounded-md border-black border-solid"
            >
              <option value="">Select a service...</option>
              <option value="eCommerce Website">eCommerce Website</option>
              <option value="Booking Website">
                Booking / Appointment Website
              </option>
              <option value="Landing Page">Landing Page</option>
              <option value="Site Redesign">Redesign My Current Site</option>
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
              required
              className="w-full px-4 py-2 border rounded-md border-black border-solid"
            >
              <option value="">Choose one...</option>
              <option value="under $100">Less than $100</option>
              <option value="100$-$250">$100 – $250</option>
              <option value="$300-$500">$300–$500</option>
              <option value="$500+">$500+</option>
            </select>
            <ValidationError
              prefix="Budget"
              field="budget"
              errors={state.errors}
            />
          </div>

          {/* Timeline */}
          {/* <div>
            <label htmlFor="timeline" className="block mb-1 font-medium">
              When do you want to launch?
            </label>
            <select
              name="timeline"
              id="timeline"
              required
              className="w-full px-4 py-2 border rounded-md border-black border-solid"
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
          </div> */}

          {/* Message */}
          {/* <div>
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
          </div> */}

          {/* reCAPTCHA */}
          <div className="flex justify-start">
            <ReCAPTCHA
              sitekey="6Lfw25QrAAAAAJT-nI6glHQy-bLX_n3XPcWLjgAz"
              onChange={handleCaptchaChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={state.submitting}
            className="text-white px-6 py-2 rounded-md hover:bg-[#333333] transition cursor-pointer"
            style={{
              backgroundImage: "linear-gradient(to top , #1D4ED8, #1e3a8a)",
              backgroundColor: "#2563eb",
            }}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
          <span className="text-sm text-center mb-4 text-blue-700 font-semibold">
            ⚡ I only take on 2 new projects per month, let’s make yours one of
            them.
          </span>
        </form>
      </div>
    </section>
  );
}
