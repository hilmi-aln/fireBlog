// import { useFetch } from "../../helper/Firebase";
import loading from "../../assets/loading.gif";


import "./Dashboard.css";
import { BlogContext } from "../../contexts/BlogContext";
import { useContext } from "react";
import BlogCard from "../../components/BlogCard";
import { Box, Grid } from "@mui/material";


function Dashboard() {
  
  // const {currentUser } = useContext(AuthContext)
  const { currentBlog, isLoading } = useContext(BlogContext);
  return (
    
    <div style={{display: "flex", margin:"10px"}}>
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
            currentBlog.map((element, index) => {
              return <BlogCard element={element} key={index}/>;
            })}
        </Grid>
      </Box>)}
    </div>
  );
}

export default Dashboard;

