import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

const notifications = [
  {
    id: 1,
    user: {
      username: "AnonymityCreed",
    },
    dateCreated: "Fri Jan 05 2024 00:03:09 GMT+0800 (Philippine Standard Time)",
    title: "AnonymityCreed posted a new thought",
  },
  {
    id: 1,
    user: {
      username: "AnonymityCreed",
    },
    dateCreated: "Fri Jan 05 2024 00:03:09 GMT+0800 (Philippine Standard Time)",
    title: "AnonymityCreed sent an insight",
  },
];
export const Notifications = () => {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="div"
      aria-labelledby="nested-list-subheader"
    >
      {notifications.map((notification) => (
        <ListItem
          secondaryAction={
            <Typography variant="subtitle1">
              {notification.dateCreated}
            </Typography>
          }
        >
          <ListItemIcon>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {notification.user.username.charAt(0).toUpperCase() ??
                "Anonymous"}
            </Avatar>
          </ListItemIcon>
          <ListItemText primary={notification.title} />
        </ListItem>
      ))}
    </List>
  );
};
