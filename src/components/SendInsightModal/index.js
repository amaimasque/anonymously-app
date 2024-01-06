import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import "./SendInsightModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: 400
};

const SendInsightModal = ({ open, onClose, onSubmit }) => {
  const [thought, setThought] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (open) setLoading(false);
  }, [open]);

  const handleOnChangeThought = (e) => {
    if (e.target.value !== thought) setThought(e.target.value)
  };

  const handleSubmit = () => {
    setLoading(true);
    onSubmit(thought);
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Send Insight
        </Typography>
        <TextField
          id="send_insight_input"
          label="Share your insight"
          multiline
          fullWidth
          rows={4}
          onChange={handleOnChangeThought}
        />
        <LoadingButton
          variant="contained"
          id="send_insight_button"
          onClick={handleSubmit}
          loading={isLoading}
          disabled={isEmpty(thought)}
        >
          Send
        </LoadingButton>
      </Box>
    </Modal>
  );
};

SendInsightModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SendInsightModal;
