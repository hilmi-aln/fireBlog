import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";

const BlogCard = ({element}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${element.id}`);
  }
  return (
    <Grid card xs={4} item style={{cursor : "pointer"}} onClick={handleClick}>
      <Card style={{ margin: "1rem" }}>
        <CardHeader
          title={element.title}
          // subheader={}
        />
        <CardMedia
          component="img"
          height="194"
          image={element.imageURL}
          alt="blog-image"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {element.content}
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
    </Grid>
  );
};

export default BlogCard;
