import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import "./Details.css";
import { AuthContext } from "../../contexts/AuthContext";

const Details = () => {
  const { getBlog } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const result = getBlog(id);
  console.log(result);
  console.log(currentUser);
  

  const navigate = useNavigate();

  return (
    <div>
      {result?.length > 0 ? (
        <div className="detailsPage">
          <div className="container">
            <header>
              <h1>{result[0].title}</h1>
            </header>
            <img
              src={result[0].imageURL}
              alt="blogImage"
              className="container-image"
            />
            <p>{result[0].content}</p>
            {/* <p></p> */}
            {
              currentUser.email === result[0].author ? ( <div className="buttons">
              <button className="edit" onClick={() => {navigate(`/updateBlog/${id}`)}}>Edit</button>
              <button className="delete">Delete</button>
            </div> ) : null
            }
            
          </div>
        </div>
      ) : (<div>Loading...</div>)}
    </div>
  );
};

export default Details;
