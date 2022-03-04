import Post from '../components/Post'

function PostList(props) {
  return (
    <section>
      <ul className='list'>
        {props.items.map((item) => <Post key= {item.id} text={item.text} image={item.image} />)}
      </ul>
    </section>
  );
}
export default PostList;