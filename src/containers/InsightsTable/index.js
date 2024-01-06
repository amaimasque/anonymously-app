import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./InsightsTable.css";
import { Collapse, Divider, Typography } from "@mui/material";

const sampleInsights = [
  {
    user: {
      username: "AnonymityCreed",
    },
    id: 1,
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo:
      "https://images.pexels.com/photos/18362535/pexels-photo-18362535/free-photo-of-residential-building-against-blue-sky.jpeg",
    video: null,
    insights: 0,
  },
  {
    user: {
      username: "AnonymityCreed",
    },
    id: 4,
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in. Laoreet id donec ultrices tincidunt arcu non. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Iaculis eu non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Erat nam at lectus urna duis. Bibendum est ultricies integer quis auctor. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Vitae justo eget magna fermentum. Interdum varius sit amet mattis vulputate enim. Sit amet est placerat in egestas erat. Suspendisse ultrices gravida dictum fusce ut placerat orci. Id eu nisl nunc mi. Proin sed libero enim sed faucibus turpis in. Sollicitudin tempor id eu nisl. Posuere morbi leo urna molestie at elementum eu facilisis. Ut venenatis tellus in metus vulputate. Commodo viverra maecenas accumsan lacus vel. Aliquam id diam maecenas ultricies mi eget. Cras ornare arcu dui vivamus arcu felis. Fusce id velit ut tortor pretium viverra suspendisse. Netus et malesuada fames ac turpis egestas. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Cursus eget nunc scelerisque viverra mauris. Erat nam at lectus urna duis convallis. Libero enim sed faucibus turpis in eu mi. Diam sit amet nisl suscipit adipiscing bibendum est. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Pellentesque adipiscing commodo elit at. Ultrices vitae auctor eu augue ut lectus arcu. Posuere sollicitudin aliquam ultrices sagittis. Non odio euismod lacinia at quis risus sed vulputate. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Quis hendrerit dolor magna eget est. Magna sit amet purus gravida quis blandit turpis cursus in. Sagittis purus sit amet volutpat consequat mauris nunc congue. Dictumst vestibulum rhoncus est pellentesque. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Diam donec adipiscing tristique risus nec. Ipsum consequat nisl vel pretium lectus quam id. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. In est ante in nibh mauris cursus mattis molestie a.",
    photo: null,
    video: null,
    insights: 2,
    recentInsight: {
      id: 1,
      message: "That's awesome!",
      user: {
        username: "TestUser",
      },
    },
  },
];
const insightsList = [
  {
    id: 1,
    message: "That's awesome!",
    user: {
      username: "TestUser",
    },
  },
  {
    id: 2,
    message: "I hope you had a great time.",
    user: {
      username: "TestUser",
    },
  },
];

const headCells = [
  {
    id: "post",
    numeric: false,
    disablePadding: false,
    label: "Post",
  },
  {
    id: "insights",
    numeric: true,
    disablePadding: false,
    label: "No. Of Insights",
  },
  {
    id: "recent",
    numeric: false,
    disablePadding: false,
    label: "Recent Activity",
  },
];

export default function EnhancedTable() {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedId, setSelectedId] = React.useState(null);

  const handleClick = (event, id) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - sampleInsights.length)
      : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <TableHead>
              <TableRow>
                {headCells.map((head, i) => (
                  <TableCell
                    width={"10%"}
                    align={i !== 0 ? "right" : "inherit"}
                  >
                    {head.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleInsights.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <>
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell component="th" id={labelId} scope="row">
                        <div id="post_cell">
                          {row.photo && (
                            <img
                              src={row.photo}
                              alt="Thought to be posted"
                              height={100}
                            />
                          )}
                          {row.post?.slice(0, 200)}
                        </div>
                      </TableCell>
                      <TableCell align="right">{row.insights}</TableCell>
                      <TableCell align="right">
                        {row.recentInsight ? (
                          `${row.recentInsight?.user?.username} said: ${row.recentInsight?.message}`
                        ) : (
                          <i>No recent insight</i>
                        )}
                      </TableCell>
                    </TableRow>
                    <Collapse in={selectedId === row.id}>
                      {insightsList.map((insight) => (
                        <Typography variant="body1" sx={{ margin: "10px" }}>
                          {`${insight.user?.username ?? "Anonymous"} said:`}{" "}
                          {insight.message}
                        </Typography>
                      ))}
                    </Collapse>
                  </>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={3} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sampleInsights.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
