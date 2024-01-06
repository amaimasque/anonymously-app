import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import Container from "../../components/Container";
import Post from "../../components/Post";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LoadingPost from "../../components/LoadingPost";

const ThoughtsThread = ({ posts, loading }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container row additionalStyles={{ margin: "20px 0px" }}>
        <LightbulbIcon />
        <Typography variant="h6" color="text.primary" id="page_header_text">
          Thoughts Thread
        </Typography>
      </Container>
      {loading ? (
        <LoadingPost />
      ) : (
        posts.map(({ user, ...post }) => (
          <Post
            postInfo={post}
            userInfo={user}
            key={post.id}
            onPostClick={() => navigate(`/app/thoughts/${post.id}`)}
          />
        ))
      )}
    </>
  );
};

ThoughtsThread.propTypes = {
  posts: PropTypes.object,
  loading: PropTypes.bool,
};

ThoughtsThread.defaultProps = {
  loading: false,
};

export default ThoughtsThread;
