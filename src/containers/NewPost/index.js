import { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Input from "@mui/material/Input";
import Container from "../../components/Container";

import AddIcon from "@mui/icons-material/Add";

const NewPost = ({ onSubmit, isLoading }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [thought, setThought] = useState("");

  const handleOnChangeFile = (e) => {
    if (e.target.files && e.target.files.length) {
      setSelectedPhoto(e.target.files[0]);
    }
  };

  const handleOnChangeThought = (e) => {
    if (e.target.value !== thought) setThought(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(thought, selectedPhoto);
  };

  console.log(selectedPhoto);

  return (
    <>
      <Container row>
        <Button component="label" variant="outlined" id="add_photo_button">
          {selectedPhoto === null ? (
            <>
              <AddIcon style={{ display: "block" }} />
              <span>Add Photo/Video</span>
            </>
          ) : // ) : (
          selectedPhoto.type && selectedPhoto.type.includes("image") ? (
            <img
              src={URL.createObjectURL(selectedPhoto)}
              alt="Thought to be posted"
              height={100}
            />
          ) : (
            <video autoPlay loop muted height={100} width={"auto"}>
              <source
                src={URL.createObjectURL(selectedPhoto)}
                type="video/mp4"
              />
            </video>
          )}
          <Input
            type="file"
            name="file"
            id="input_image_hidden"
            onChange={handleOnChangeFile}
            maxRows={1}
          />
        </Button>
        <TextField
          id="thoughts_input"
          label="New Thought"
          multiline
          placeholder="Share your thoughts..."
          autoFocus
          fullWidth
          style={{ height: "100px" }}
          onChange={handleOnChangeThought}
        />
      </Container>
      <LoadingButton
        variant="contained"
        id="post_button"
        onClick={handleSubmit}
        loading={isLoading}
        disabled={isLoading}
      >
        Post
      </LoadingButton>
    </>
  );
};

NewPost.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};

NewPost.defaultProps = {
  isLoading: false,
};

export default NewPost;
