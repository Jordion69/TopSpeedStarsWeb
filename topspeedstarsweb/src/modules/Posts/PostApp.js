import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { useState } from 'react';

const FAKE_POSTS = [
  { id: 1, text: 'Lorem ipsum dolor sit amet.', image: 'https://picsum.photos/id/237/200/300' },
  { id: 2, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, dolore.', image: 'https://picsum.photos/id/238/200/300'},
  { id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'https://picsum.photos/id/239/200/300' },
  { id: 4, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'https://picsum.photos/id/240/200/300' },
  { id: 5, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolore.', image: 'https://picsum.photos/id/241/200/300' },
  { id: 6, text: 'Lorem ipsum dolor sit amet consectetur.', image: 'https://picsum.photos/id/242/200/300' },
];

function PostApp() {
  const [posts, setPosts] = useState(FAKE_POSTS);

  const saveDataHandler = (inputPost) => {
    inputPost.id = Math.floor(Math.random()*100).toString();
    setPosts((prevPosts) => [inputPost, ...prevPosts]);
  }

  return (
    <main>
      <header>
        <h1>My Todo List</h1>
      </header>
      <section>
      <PostForm onSaveData={saveDataHandler}/>
    
      <PostList items={posts}/>
    </section>
    </main>
    
    
 
  );
}
export default PostApp;