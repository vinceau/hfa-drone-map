import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

export const WaypointsList = ({ waypoints }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Longitude</TableCell>
            <TableCell align="right">Latitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {waypoints.length === 0 ? (
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="center" colSpan={3}>
                <b>No waypoints added</b>
              </TableCell>
            </TableRow>
          ) : (
            waypoints.map((waypoint, i) => (
              <TableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="right">{waypoint.long}</TableCell>
                <TableCell align="right">{waypoint.lat}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
