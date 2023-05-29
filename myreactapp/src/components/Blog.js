import Post from "./Post";
import './post.css';
function Blog(props)
{

  const elements = [];
  for (let i = 0; i < props.posts.length; i++) {
    elements.push(<Post title={props.posts[i].title} content={props.posts[i].content}></Post>);
  }

  return (
    <div>
    <div>
        {elements}
        </div>
        </div>
  );
}

export default Blog;