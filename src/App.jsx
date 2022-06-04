import React from "react";
import PostList from "./components/post-list";

function App() {
  const posts = [
    {
      "user": "Evelyn Cantu",
      "title": "dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris.",
      "pages": 3
    },
    {
      "user": "Tucker Gardner",
      "title": "consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra.",
      "pages": 8
    },
    {
      "user": "Vielka Dennis",
      "title": "libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam",
      "pages": 8
    },
    {
      "user": "Doris Brown",
      "title": "auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui.",
      "pages": 3
    },
    {
      "user": "Drew Stevens",
      "title": "ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
      "pages": 5
    }
  ];
  return (
    <div className="App">
      <PostList posts={posts}></PostList>
      
    </div>
  );
}

export default App;
