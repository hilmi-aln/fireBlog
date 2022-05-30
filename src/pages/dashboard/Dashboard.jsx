// import { useFetch } from "../../helper/Firebase";
import loading from "../../assets/loading.gif";
import { Box, Grid } from "@material-ui/core";

import "./Dashboard.css";
import { BlogContext } from "../../contexts/BlogContext";
import { useContext } from "react";
import BlogCard from "../../components/BlogCard";

function Dashboard() {
  
  // const {currentUser } = useContext(AuthContext)
  const { currentBlog, isLoading } = useContext(BlogContext);
  return (
    <div style={{display: "flex"}}>
      {isLoading ? <img src={loading} alt="loading" style={{margin: "auto"}}/> : (
      <Box>
        <Grid
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {currentBlog &&
            currentBlog.map((element) => {
              return <BlogCard element={element}/>;
            })}
        </Grid>
      </Box>)}
    </div>
  );
}

export default Dashboard;

{
  /* <Grid card xs={4}>
                      <Card style={{ margin: "1rem" }}>
                        <CardMedia
                          component="img"
                          height="194"
                          image={blog.imageURL}
                          alt="Paella dish"
                        />
                        <CardHeader
                          title={blog.title}
                          subheader="September 14, 2016"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {blog.content}
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Grid> */
}
