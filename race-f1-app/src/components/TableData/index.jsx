import React, { useState } from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "grand_prix", label: "GRAND PRIX", minWidth: 200 },
  { id: "date", label: "DATE", minWidth: 100 },
  {
    id: "winner",
    label: "WINNER",
    minWidth: 200,
  },
  {
    id: "team",
    label: "TEAM",
    minWidth: 200,
  },
  {
    id: "laps",
    label: "LAPS",
    minWidth: 100,
  },
  {
    id: "time",
    label: "TIME",
    minWidth: 100,
  },
];

export default function TableData({ listData }) {
  const rows = listData;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "auto" }}>
      <TableContainer sx={{ height: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((value, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    className="hover:bg-gray-50"
                  >
                    <TableCell className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {value?.["GRAND PRIX"]}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-gray-700">
                      {value?.DATE}
                    </TableCell>
                    <TableCell className="px-6 py-4 cursor-pointer">
                      <Link to={`/bikers/${value?.WINNER}`}>
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                          {value?.WINNER}
                        </span>
                      </Link>
                    </TableCell>
                    <TableCell className="px-6 py-4 flex cursor-pointer">
                      <Link to={`/teams/${value?.CAR}`}>
                        <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                          {value?.CAR}
                        </span>
                      </Link>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-gray-700">
                      {value?.LAPS}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-gray-500">
                      {value?.TIME}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
