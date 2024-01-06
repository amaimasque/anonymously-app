import Skeleton from "@mui/material/Skeleton";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import "./Post.css";

const LoadingPost = () => {
  return (
    <>
      <Card id="post_container">
        <CardHeader
          avatar={<Skeleton variant="circular" width={40} height={40} />}
        />
        <Skeleton variant="rectangular" height={window.innerHeight / 2} />
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </CardContent>
      </Card>
    </>
  );
};

export default LoadingPost;
