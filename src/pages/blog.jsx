import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Why Nonprofits Must Prioritize Their Online Presence in 2025",
    summary:
      "In 2025, a strong digital footprint isn't optional for nonprofits — it's essential. This post explores how a professional website, social media presence, and consistent content can build trust, attract donors, and boost community impact.",
    slug: "/blog-post-1",
    date: "May 2025",
  },
];

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-[100px]">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-gray-600 mb-8">
        Insights, ideas, and developer takes from my desk.
      </p>
      <div className="space-y-10">
        {blogPosts.map((post, index) => (
          <div key={index} className="border-b border-solid pb-4">
            <Link to={post.slug}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-400 text-sm italic">{post.date}</p>
            <p className="text-gray-700 mt-2">{post.summary}</p>
            <Link
              to={post.slug}
              className="inline-block mt-3 text-sm text-blue-600 hover:underline font-medium"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
