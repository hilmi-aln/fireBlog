import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import blog from "../../assets/blok.png";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { BlogContext } from "../../contexts/BlogContext";

const UpdateBlog = () => {
  const [title, setTitle] = useState("");


  const { getBlog } = useContext(BlogContext);
  const { id } = useParams();
  const updateBlog = getBlog(id);
  // console.log("first");

  return (
    <div>
      {updateBlog ? (
        <div className="new-blog">
          <img src={blog} alt="blog" className="form-img" />
          <h1> New Blog </h1>
          <Box
            style={{ width: "368px", minWidth: "368px" }}
            justifyContent="center"
            alignItems="center"
          >
            <form>
              <Stack spacing={3} direction="column">
                <TextField
                  variant="outlined"
                  label="Title"
                  required
                  defaultValue={updateBlog[0].title}
                  onChange={(e) => {setTitle(e.target.value)}}
                />
                <TextField
                  variant="outlined"
                  label="Image URL"
                  required
                  value={updateBlog[0].imageURL}
                />
                <TextField
                  variant="outlined"
                  label="Content"
                  multiline
                  rows={10}
                  required
                  value={updateBlog[0].content}
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
