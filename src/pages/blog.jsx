import { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const endpoint = "https://gql.hashnode.com/";
      const graphQLClient = new GraphQLClient(endpoint);
      const query = gql`
        query {
          publication(host: "johnwrites.hashnode.dev") {
            posts(first: 10) {
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
        setPosts(data.publication.posts.edges.map((edge) => edge.node));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-[100px] text-center">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-gray-600 mb-8">
        Insights, ideas, and developer takes from my desk.
      </p>
      <div className="space-y-10 text-left">
        {posts.map((post, index) => (
          <div key={index} className="border-b border-solid pb-4">
            <a
              href={`https://johnwrites.hashnode.dev/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </a>
            <p className="text-gray-400 text-sm italic">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-700 mt-2">{post.brief}</p>
            <a
              href={`https://johnwrites.hashnode.dev/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-blue-600 hover:underline font-medium"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
