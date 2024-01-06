import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LoadingButton from "@mui/lab/LoadingButton";

const LogoutModal = ({ open, onClose, onLogout, isLoggingOut }) => {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            loading={isLoggingOut}
            disabled={isLoggingOut}
            onClick={onLogout}
          >
            Yes
          </LoadingButton>
          <Button onClick={onClose} disabled={isLoggingOut}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

LogoutModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onLogout: PropTypes.func,
  isLoggingOut: PropTypes.bool,
};

LogoutModal.defaultProps = {
  isLoggingOut: false,
};

export default LogoutModal;
