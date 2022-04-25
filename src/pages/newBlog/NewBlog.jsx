import blog from "../../assets/blok.png";
import "./NewBlog.css";

const NewBlog = () => {
  return (
    <div className="newBlog">
        <header className="newBlog-header">
            <img src={blog} alt="image" />
            <h1 >NEW BLOG</h1>
        </header>
        <form className="newBlog-form">
            <input type="text" name="title" id="title" placeholder="Title"/>
            <input type="text" name="image" id="image" placeholder="Image URL"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Content"></textarea>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  )
}

export default NewBlog