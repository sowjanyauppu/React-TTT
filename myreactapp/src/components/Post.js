import './post.css';
function Post(props)
{
    return(
        <div class="card">
    <div class="container">
    <h4><b> Title: {props.title}</b></h4> 
    <p>Content: {props.content}</p> 
  </div>
</div>

    )
}

export default Post;