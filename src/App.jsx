import React from "react";
import DBoard from "./layout/dboard";
import StyledPostList from "./components/post-list";
import StyledPostListHeader from "./components/post-list-header";
import StyledPostHeader from "./components/post-header";
import StyledReplyList from "./components/reply-list";
import StyledSideBar from "./components/sidebar";

import { useSelector, useDispatch } from 'react-redux'
import {toggle} from './features/sidebar/sidebarSlice'

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
    },
    {
      "user": "Drew Stevens",
      "title": "ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
      "pages": 5
    },
    {
      "user": "Drew Stevens",
      "title": "ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
      "pages": 5
    },
    {
      "user": "Drew Stevens",
      "title": "ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
      "pages": 5
    }
    ,
    {
      "user": "Drew Stevens",
      "title": "ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
      "pages": 5
    },
    {
      "user": "Drew Stevens",
      "title": "ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
      "pages": 5
    },
    {
      "user": "Drew Stevens",
      "title": "ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
      "pages": 5
    },
    {
      "user": "Drew Stevens",
      "title": "ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
      "pages": 5
    },
    {
      "user": "Drew Stevens",
      "title": "ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
      "pages": 5
    }
  ];

  const isSideBarOpen = useSelector(state => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <StyledSideBar isOpen={isSideBarOpen} closeOnClick={()=>{dispatch(toggle())}} />
      <DBoard
        left={
          <div>
            <StyledPostListHeader title="吹水台" handleMenuToggle={()=>{dispatch(toggle());}} />
            <StyledPostList posts={posts} />
          </div>
        }
        right={
          <div>
            <StyledPostHeader></StyledPostHeader>
            <StyledReplyList></StyledReplyList>
          </div>
        }
      />
      
      
    </div>
  );
}

export default App;
