import Divider from "@mui/material/Divider";
import "./Home.css";
import Container from "../../components/Container";
import NewPost from "../../containers/NewPost";

import { useCallback, useEffect, useState } from "react";
import ThoughtsThread from "../../containers/ThoughtsThread";
import { createNewPost, getPosts } from "../../utils/api";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [isPostingNew, setIsPostingNew] = useState(false);

  const getAllPosts = useCallback(async () => {
    try {
      setPostsLoading(true);
      const res = await getPosts();
      const { data: allPosts } = res.data;
      setPosts(allPosts);
    } catch (error) {
      console.log(error);
    } finally {
      setPostsLoading(false);
    }
  }, []);

  useEffect(() => {
    // API integration - get all posts
    getAllPosts();
  }, []);

  const handleOnSubmit = async (thought, selectedPhoto) => {
    // API integration create post
    setIsPostingNew(true);
    const form = new FormData();
    form.append("file", selectedPhoto);
    form.append("thought", thought);
    try {
      const res = await createNewPost(form);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPostingNew(false);
    }
  };

  return (
    <Container additionalStyles={{ paddingBottom: 60 }}>
      <NewPost onSubmit={handleOnSubmit} isLoading={isPostingNew} />
      <Divider variant="fullWidth" />
      <ThoughtsThread posts={posts} loading={postsLoading} />
    </Container>
  );
};
