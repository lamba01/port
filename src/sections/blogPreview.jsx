import { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";

export default function BlogPreview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const endpoint = "https://gql.hashnode.com/";
      const graphQLClient = new GraphQLClient(endpoint);
      const query = gql`
        query {
          publication(host: "johnwrites.hashnode.dev") {
            posts(first: 5) {
              edges {
                node {
                  title
                  brief
                  slug
                  publishedAt
                }
              }
            }
          }
        }
      `;

      try {
        const data = await graphQLClient.request(query);

        const sortedPosts = data.publication.posts.edges
          .map((edge) => edge.node)
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
          .slice(0, 2); // Get the latest 2 posts

        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching preview posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-6">
        Latest from the Blog
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {posts.map((post, index) => (
          <div
            key={index}
            className="border border-solid rounded-lg p-5 shadow-sm hover:shadow-md transition"
          >
            <a
              href={`https://johnwrites.hashnode.dev/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-lg font-semibold hover:underline">
                {post.title}
              </h2>
            </a>
            <p className="text-sm text-gray-500 italic">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-700 mt-2 line-clamp-3">{post.brief}</p>
            <a
              href={`https://johnwrites.hashnode.dev/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm font-medium mt-3 inline-block hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="/blog" className="text-blue-600 font-medium hover:underline">
          View all blog posts →
        </a>
      </div>
    </section>
  );
}
