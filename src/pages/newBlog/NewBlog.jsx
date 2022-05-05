import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blog from "../../assets/blok.png";
import { writeUserData } from "../../helper/Firebase";
import "./NewBlog.css";



const NewBlog = () => {
  const [title, setTitle] = useState();
  const [imageURL, setImageURL] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();

  const blogSubmit = (e) => {
    e.preventDefault();
    writeUserData(title, imageURL, content)
    navigate("/");
  }
  return (
    <div className="new-blog">
      <img src={blog} alt="blog" className="form-img" />
      <h1> New Blog </h1>
      <Box
        style={{ width: "368px", minWidth: "368px" }}
        justifyContent="center"
        alignItems="center"
      >
        <form onSubmit={blogSubmit}>
          <Stack spacing={3} direction="column">
            <TextField variant="outlined" label="Title" required onChange={(e) => setTitle(e.target.value)}/>
            <TextField variant="outlined" label="Image URL" required onChange={(e) => setImageURL(e.target.value)}/>
            <TextField
              variant="outlined"
              label="Content"
              multiline
              rows={10}
              required
              onChange={(e) => setContent(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              value="Submit"
              style={{ backgroundColor: "rgb(4, 101, 130)", fontWeight:"bold" }}
            >
              SUBMIT
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
};

export default NewBlog;
