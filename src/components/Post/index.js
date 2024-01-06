import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import isEmpty from "lodash/isEmpty";
import { useState } from "react";

import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";

import "./Post.css";
import SendInsightModal from "../SendInsightModal";

const Post = ({ userInfo, postInfo, truncatePost, onPostClick }) => {
  const [showSend, setSendVisibility] = useState(false);
  const { dateCreated, post, photo, video } = postInfo;
  const handleOnSendInsight = (e) => {
    e.stopPropagation();
    setSendVisibility(true);
  };
  const handleCloseModal = () => setSendVisibility(false);
  const handleOnSubmitInsight = (insight) => {
    // TODO: API integration - send insight
    setTimeout(() => {
      setSendVisibility(false);
    }, 2000);
  };
  return (
    <>
      <Card id="post_container" onClick={onPostClick}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {userInfo.username.charAt(0).toUpperCase() ?? "Anonymous"}
            </Avatar>
          }
          title={userInfo.username ?? "Anonymous"}
          subheader={dateCreated ?? "September 14, 2016"}
        />
        {photo && (
          <CardMedia
            component="img"
            height={truncatePost ? window.innerHeight / 2 : "auto"}
            src={`https://firebasestorage.googleapis.com/v0/b/anonymously-433d7.appspot.com/o/${photo}?alt=media`}
            alt="Paella dish"
            style={{
              objectFit: "contain",
              backgroundColor: "whitesmoke",
            }}
          />
        )}
        {video && (
          <video
            autoPlay
            loop
            muted
            height={truncatePost ? window.innerHeight / 2 : "auto"}
            width={"auto"}
          >
            <source
              src={`https://firebasestorage.googleapis.com/v0/b/anonymously-433d7.appspot.com/o/${video}?alt=media`}
              type="video/mp4"
            />
          </video>
        )}
        {!isEmpty(post) && (
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.length > 1000 && truncatePost
                ? `${post.slice(0, 1000)}... Read More`
                : post}
            </Typography>
          </CardContent>
        )}
        <CardActions disableSpacing>
          <IconButton aria-label="heart">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="send insight" onClick={handleOnSendInsight}>
            <SendIcon />
          </IconButton>
        </CardActions>
      </Card>
      <SendInsightModal
        open={showSend}
        onClose={handleCloseModal}
        onSubmit={handleOnSubmitInsight}
      />
    </>
  );
};

Post.propTypes = {
  userInfo: PropTypes.object,
  postInfo: PropTypes.object,
  truncatePost: PropTypes.bool,
  onPostClick: PropTypes.func,
};

Post.defaultProps = {
  truncatePost: true,
  onPostClick: () => {},
};

export default Post;
