import React from "react";
import { useNavigate } from "react-router-dom";

const BlogPosts: React.FC = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/blogs");
  };

  const posts = [
    {
      id: 1,
      title: "Cactus & Succulent Care Tips",
      date: "September 12",
      readTime: "Read in 6 minutes",
      image: "./src/assets/images/blog_post1.png",
    },
    {
      id: 2,
      title: "Top 10 Succulents for Your Home",
      date: "September 13",
      readTime: "Read in 2 minutes",
      image: "./src/assets/images/blog_post2.png",
    },
    {
      id: 3,
      title: "Cacti & Succulent Care Tips",
      date: "September 15",
      readTime: "Read in 3 minutes",
      image: "./src/assets/images/blog_post3.png",
    },
    {
      id: 4,
      title: "Best Houseplants Room By Room",
      date: "September 15",
      readTime: "Read in 3 minutes",
      image: "./src/assets/images/blog_post4.png",
    },
  ];

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Blog Posts</h2>
      <div className="flex justify-between flex-wrap">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col items-start p-4 bg-white shadow-lg border rounded-md w-[22%] mb-4"
          >
            <img src={post.image} alt={post.title} className="w-full mb-4" />
            <p className="text-sm text-green-600 mb-1">
              {post.date} | {post.readTime}
            </p>
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <button
              onClick={handleReadMoreClick}
              className="text-green-600 font-semibold hover:underline"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
