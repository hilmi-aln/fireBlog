import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import blogimage from "../../assets/blok.png";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { BlogContext } from "../../contexts/BlogContext";

const UpdateBlog = () => {
  const [title, setTitle] = useState();
  const [imageURL, setImageURL] = useState();
  const [content, setContent] = useState();


  const navigate = useNavigate();
  const { getBlog, updateBlog } = useContext(BlogContext);
  const { id } = useParams();
  const blog = getBlog(id);
  // console.log("first");
  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(id, title, imageURL, content);
    navigate("/");
  }

  return (
    <div>
      {updateBlog ? (
        <div className="new-blog">
          <img src={blogimage} alt="blog" className="form-img" />
          <h1> New Blog </h1>
          <Box
            style={{ width: "368px", minWidth: "368px" }}
            justifyContent="center"
            alignItems="center"
          >
            <form onSubmit = {handleSubmit}>
              <Stack spacing={3} direction="column">
                <TextField
                  variant="outlined"
                  label="Title"
                  required
                  defaultValue={blog[0].title}
                  onChange={(e) => {setTitle(e.target.value)}}
                />
                <TextField
                  variant="outlined"
                  label="Image URL"
                  required
                  value={blog[0].imageURL}
                  onChange={(e) => {setImageURL(e.target.value)}}
                />
                <TextField
                  variant="outlined"
                  label="Content"
                  multiline
                  rows={10}
                  required
                  value={blog[0].content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <Button
                  variant="contained"
                  type="submit"
                  value="Submit"
                  style={{
                    backgroundColor: "rgb(4, 101, 130)",
                    fontWeight: "bold",
                  }}
                >
                  UPDATE
                </Button>
              </Stack>
            </form>
          </Box>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UpdateBlog;
