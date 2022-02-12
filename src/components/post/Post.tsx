import './post.css'

const Post = () => {
  return (
    <div className="post">
      <div className="header">
        <div className="head">Head</div>
        <div className="time">Time</div>
      </div>
      <button className="delete">&#10005;</button>
      <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet corporis cum cupiditate distinctio eligendi esse, expedita fuga harum iste itaque laudantium nemo nostrum, pariatur possimus qui veritatis vero!</div>
      <button className="more">More</button>
    </div>
  )
}

export default Post;
