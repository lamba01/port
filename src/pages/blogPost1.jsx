import { Link } from "react-router-dom";

export default function BlogPost1() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-[100px]">
      <Link to="/blog" className="text-blue-500 text-sm">
        &larr; Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">
        Why Nonprofits Must Prioritize Their Online Presence in 2025
      </h1>
      <p className="text-gray-500 text-sm mb-6">May 2025</p>
      <div className="space-y-5 text-gray-800 leading-relaxed">
        <p>
          In today’s digital-first world, a nonprofit’s ability to build trust,
          raise awareness, and attract support heavily relies on its online
          presence. Yet, many nonprofits still operate with outdated websites,
          poor mobile experiences, or—worse—no online visibility at all.
        </p>

        <p>
          Think about it: when someone hears about your organization, what's the
          first thing they do? They search. If your website looks like it hasn’t
          been updated since 2012 or isn't optimized for mobile, you’re likely
          losing credibility and potential donations.
        </p>

        <h2 className="text-xl font-semibold">
          The Problem with “Just Having a Website”
        </h2>
        <p>
          It’s not just about being online. It’s about being intentional. A good
          nonprofit site should clearly communicate your mission, make it easy
          to take action (donate, volunteer, contact), and be accessible across
          all devices.
        </p>
        <p>
          Many nonprofits underestimate the power of design and performance—both
          of which deeply affect how users perceive your legitimacy and impact.
        </p>

        <h2 className="text-xl font-semibold">
          What a Strong Presence Looks Like
        </h2>
        <p>
          I recently built a clean, purpose-driven site for a nonprofit called{" "}
          <strong>Cepher</strong>. It focuses on clear storytelling, simple
          navigation, and mobile-first responsiveness—key things every
          organization should prioritize.
        </p>
        <p>
          <a
            href="https://cepher.org.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            ➜ Check out the Cepher site here
          </a>
        </p>

        <h2 className="text-xl font-semibold">Final Thoughts</h2>
        <p>
          Whether you're running a health outreach, a community initiative, or
          an academic publishing organization, your website is often your first
          impression. Make it count.
        </p>
        <p>
          If you're a nonprofit leader looking to revamp your online presence,
          feel free to{" "}
          <Link
            to="https://johncodes.xyz/#contact"
            className="text-blue-500 underline"
          >
            reach out
          </Link>
          . I’d love to help.
        </p>
      </div>
    </div>
  );
}
