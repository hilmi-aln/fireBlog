import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import blogimage from "../../assets/blok.png";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import { BlogContext } from "../../contexts/BlogContext";

const UpdateBlog = () => {
  const { currentUser } = useContext(BlogContext);
  const [newBlog, setNewBlog] = useState({
    author: currentUser.email,
    title: "",
    content: "",
    image: "",
  });

  const navigate = useNavigate();
  const { getBlog, updateBlog } = useContext(BlogContext);
  const { id } = useParams();

  const result = getBlog(id);
  console.log(result);
  const res = useMemo(() => {
    return result ? result[0] : { title: "", content: "", image: "" };
  }, [result]);

  useEffect(() => {
    setNewBlog(res);
  }, [res]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(id, newBlog);
    navigate("/");
  };

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
            <form onSubmit={handleSubmit}>
              <Stack spacing={3} direction="column">
                <TextField
                  variant="outlined"
                  label="Title"
                  required
                  defaultValue={result[0].title}
                  onChange={(e) => {
                    setNewBlog({ ...newBlog, title: e.target.value });
                  }}
                />
                <TextField
                  variant="outlined"
                  label="Image URL"
                  required
                  value={result[0].imageURL}
                  onChange={(e) => {
                    setNewBlog({ ...newBlog, imageURL: e.target.value });
                  }}
                />
                <TextField
                  variant="outlined"
                  label="Content"
                  multiline
                  rows={10}
                  required
                  value={result[0].content}
                  onChange={(e) => {
                    setNewBlog({ ...newBlog, content: e.target.value });
                  }}
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
