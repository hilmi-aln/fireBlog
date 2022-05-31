import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import "./Details.css";

const Details = () => {
  const { getBlog } = useContext(BlogContext);
  const { id } = useParams();
  const blog = getBlog(id);

  const navigate = useNavigate();

  return (
    <div>
      {blog?.length > 0 ? (
        <div className="detailsPage">
          <div className="container">
            <header>
              <h1>{blog[0].title}</h1>
            </header>
            <img
              src={blog[0].imageURL}
              alt="blogImage"
              className="container-image"
            />
            <p>{blog[0].content}</p>
            {/* <p></p> */}
            <div className="buttons">
              <button className="edit" onClick={() => {navigate(`/updateBlog/${id}`)}}>Edit</button>
              <button className="delete">Delete</button>
            </div>
          </div>
        </div>
      ) : (<div>Loading...</div>)}
    </div>
  );
};

export default Details;
