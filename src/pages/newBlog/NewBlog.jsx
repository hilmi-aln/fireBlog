import { Box, Button, Stack, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import blog from "../../assets/blok.png";
import { writeUserData } from "../../helper/Firebase";
import "./NewBlog.css";
import { AuthContext } from "../../contexts/AuthContext";

const NewBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const [newBlog, setNewBlog] = useState({
    author: currentUser.email,
    title: "",
    content: "",
    imageURL: "",
  });
  

  const navigate = useNavigate();

  const blogSubmit = (e) => {
    e.preventDefault();
    writeUserData(newBlog);
    navigate("/");
  };
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
            <TextField
              variant="outlined"
              label="Title"
              required
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              label="Image URL"
              required
              onChange={(e) =>
                setNewBlog({ ...newBlog, imageURL: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              label="Content"
              multiline
              rows={10}
              required
              onChange={(e) =>
                setNewBlog({ ...newBlog, content: e.target.value })
              }
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
              SUBMIT
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
};

export default NewBlog;
