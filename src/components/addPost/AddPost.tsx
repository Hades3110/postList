import './addPost.css'

const AddPost = () => {
  return (
    <form className="form">
      <input type="text" className="text_name" placeholder="enter post headline"/>
      <textarea placeholder="enter description"></textarea>
      <input type="submit" value="SEND" className="submit"/>
    </form>
  )
}

export default AddPost;