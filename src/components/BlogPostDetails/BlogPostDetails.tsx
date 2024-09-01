import React from "react";

const posts = [
  {
    id: 1,
    title: "Blog Post Title 1",
    image: "./public/images/blue_peonis.png",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas atque necessitatibus quos quibusdam debitis velit modi aliquam unde, nam aspernatur vel suscipit, excepturi quia similique sint corrupti facere est numquam vitae amet ipsa. Dolores, sunt quaerat, commodi perferendis, deleniti illum inventore veritatis esse ullam aliquam expedita mollitia quae impedit placeat laudantium sit unde nemo? Perspiciatis nemo autem, expedita pariatur dolorum doloremque odit necessitatibus illum dolores quos officia voluptas sit excepturi quidem cumque, assumenda facilis, incidunt in ipsum voluptates magni dolorem! Explicabo asperiores aut, neque aspernatur eum, reiciendis sunt vero atque ullam consequuntur ipsum amet iure ratione corrupti vel perspiciatis fuga?",
  },
  {
    id: 2,
    title: "Blog Post Title 2",
    image: "./public/images/lady_palm.png",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas atque necessitatibus quos quibusdam debitis velit modi aliquam unde, nam aspernatur vel suscipit, excepturi quia similique sint corrupti facere est numquam vitae amet ipsa. Dolores, sunt quaerat, commodi perferendis, deleniti illum inventore veritatis esse ullam aliquam expedita mollitia quae impedit placeat laudantium sit unde nemo? Perspiciatis nemo autem, expedita pariatur dolorum doloremque odit necessitatibus illum dolores quos officia voluptas sit excepturi quidem cumque, assumenda facilis, incidunt in ipsum voluptates magni dolorem! Explicabo asperiores aut, neque aspernatur eum, reiciendis sunt vero atque ullam consequuntur ipsum amet iure ratione corrupti vel perspiciatis fuga?",
  },
  {
    id: 3,
    title: "Blog Post Title 3",
    image: "./public/images/african_violet.png",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas atque necessitatibus quos quibusdam debitis velit modi aliquam unde, nam aspernatur vel suscipit, excepturi quia similique sint corrupti facere est numquam vitae amet ipsa. Dolores, sunt quaerat, commodi perferendis, deleniti illum inventore veritatis esse ullam aliquam expedita mollitia quae impedit placeat laudantium sit unde nemo? Perspiciatis nemo autem, expedita pariatur dolorum doloremque odit necessitatibus illum dolores quos officia voluptas sit excepturi quidem cumque, assumenda facilis, incidunt in ipsum voluptates magni dolorem! Explicabo asperiores aut, neque aspernatur eum, reiciendis sunt vero atque ullam consequuntur ipsum amet iure ratione corrupti vel perspiciatis fuga?",
  },
  {
    id: 4,
    title: "Blog Post Title 4",
    image: "./public/images/oak_plant.png",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas atque necessitatibus quos quibusdam debitis velit modi aliquam unde, nam aspernatur vel suscipit, excepturi quia similique sint corrupti facere est numquam vitae amet ipsa. Dolores, sunt quaerat, commodi perferendis, deleniti illum inventore veritatis esse ullam aliquam expedita mollitia quae impedit placeat laudantium sit unde nemo? Perspiciatis nemo autem, expedita pariatur dolorum doloremque odit necessitatibus illum dolores quos officia voluptas sit excepturi quidem cumque, assumenda facilis, incidunt in ipsum voluptates magni dolorem! Explicabo asperiores aut, neque aspernatur eum, reiciendis sunt vero atque ullam consequuntur ipsum amet iure ratione corrupti vel perspiciatis fuga?",
  },
  {
    id: 5,
    title: "Blog Post Title 5",
    image: "./public/images/evergreen.png",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas atque necessitatibus quos quibusdam debitis velit modi aliquam unde, nam aspernatur vel suscipit, excepturi quia similique sint corrupti facere est numquam vitae amet ipsa. Dolores, sunt quaerat, commodi perferendis, deleniti illum inventore veritatis esse ullam aliquam expedita mollitia quae impedit placeat laudantium sit unde nemo? Perspiciatis nemo autem, expedita pariatur dolorum doloremque odit necessitatibus illum dolores quos officia voluptas sit excepturi quidem cumque, assumenda facilis, incidunt in ipsum voluptates magni dolorem! Explicabo asperiores aut, neque aspernatur eum, reiciendis sunt vero atque ullam consequuntur ipsum amet iure ratione corrupti vel perspiciatis fuga?",
  },
  {
    id: 6,
    title: "Blog Post Title 6",
    image: "./public/images/spider_lily.png",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas atque necessitatibus quos quibusdam debitis velit modi aliquam unde, nam aspernatur vel suscipit, excepturi quia similique sint corrupti facere est numquam vitae amet ipsa. Dolores, sunt quaerat, commodi perferendis, deleniti illum inventore veritatis esse ullam aliquam expedita mollitia quae impedit placeat laudantium sit unde nemo? Perspiciatis nemo autem, expedita pariatur dolorum doloremque odit necessitatibus illum dolores quos officia voluptas sit excepturi quidem cumque, assumenda facilis, incidunt in ipsum voluptates magni dolorem! Explicabo asperiores aut, neque aspernatur eum, reiciendis sunt vero atque ullam consequuntur ipsum amet iure ratione corrupti vel perspiciatis fuga?",
  },
  {
    id: 7,
    title: "Blog Post Title 7",
    image: "./public/images/pine_plant.png",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas atque necessitatibus quos quibusdam debitis velit modi aliquam unde, nam aspernatur vel suscipit, excepturi quia similique sint corrupti facere est numquam vitae amet ipsa. Dolores, sunt quaerat, commodi perferendis, deleniti illum inventore veritatis esse ullam aliquam expedita mollitia quae impedit placeat laudantium sit unde nemo? Perspiciatis nemo autem, expedita pariatur dolorum doloremque odit necessitatibus illum dolores quos officia voluptas sit excepturi quidem cumque, assumenda facilis, incidunt in ipsum voluptates magni dolorem! Explicabo asperiores aut, neque aspernatur eum, reiciendis sunt vero atque ullam consequuntur ipsum amet iure ratione corrupti vel perspiciatis fuga?",
  },
  {
    id: 8,
    title: "Blog Post Title 8",
    image: "./public/images/arabic_cactus.png",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas atque necessitatibus quos quibusdam debitis velit modi aliquam unde, nam aspernatur vel suscipit, excepturi quia similique sint corrupti facere est numquam vitae amet ipsa. Dolores, sunt quaerat, commodi perferendis, deleniti illum inventore veritatis esse ullam aliquam expedita mollitia quae impedit placeat laudantium sit unde nemo? Perspiciatis nemo autem, expedita pariatur dolorum doloremque odit necessitatibus illum dolores quos officia voluptas sit excepturi quidem cumque, assumenda facilis, incidunt in ipsum voluptates magni dolorem! Explicabo asperiores aut, neque aspernatur eum, reiciendis sunt vero atque ullam consequuntur ipsum amet iure ratione corrupti vel perspiciatis fuga?",
  },
  {
    id: 9,
    title: "Blog Post Title 9",
    image: "./public/images/tropic_palm.png",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas atque necessitatibus quos quibusdam debitis velit modi aliquam unde, nam aspernatur vel suscipit, excepturi quia similique sint corrupti facere est numquam vitae amet ipsa. Dolores, sunt quaerat, commodi perferendis, deleniti illum inventore veritatis esse ullam aliquam expedita mollitia quae impedit placeat laudantium sit unde nemo? Perspiciatis nemo autem, expedita pariatur dolorum doloremque odit necessitatibus illum dolores quos officia voluptas sit excepturi quidem cumque, assumenda facilis, incidunt in ipsum voluptates magni dolorem! Explicabo asperiores aut, neque aspernatur eum, reiciendis sunt vero atque ullam consequuntur ipsum amet iure ratione corrupti vel perspiciatis fuga?",
  },
  {
    id: 10,
    title: "Blog Post Title 10",
    image: "./public/images/king_ficus.png",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas atque necessitatibus quos quibusdam debitis velit modi aliquam unde, nam aspernatur vel suscipit, excepturi quia similique sint corrupti facere est numquam vitae amet ipsa. Dolores, sunt quaerat, commodi perferendis, deleniti illum inventore veritatis esse ullam aliquam expedita mollitia quae impedit placeat laudantium sit unde nemo? Perspiciatis nemo autem, expedita pariatur dolorum doloremque odit necessitatibus illum dolores quos officia voluptas sit excepturi quidem cumque, assumenda facilis, incidunt in ipsum voluptates magni dolorem! Explicabo asperiores aut, neque aspernatur eum, reiciendis sunt vero atque ullam consequuntur ipsum amet iure ratione corrupti vel perspiciatis fuga?",
  },
];

const BlogDetailPost: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold mb-6 text-4xl">Blog Detail Posts</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h2>{post.title}</h2>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetailPost;
