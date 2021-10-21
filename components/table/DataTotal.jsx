import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import "dayjs/locale/en"; // ES 2015
import relativeTime from "dayjs/plugin/relativeTime";
import { isEmpty } from "lodash";
import React from "react";

dayjs.locale("en");
dayjs.extend(relativeTime);
const columns = [
  { id: "name", label: "Country Name", minWidth: 170 },
  {
    id: "confirmed,",
    label: "Confirmed",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "deaths",
    label: "Deaths",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "recovered",
    label: "Recovered",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
const DataTotal = ({ data, value, datasearch }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  let country = data;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ top: 57, minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {country
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item) => (
              <TableRow
                key={item.ID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.Country}
                </TableCell>
                <TableCell align="right">
                  {item.TotalConfirmed || item.Confirmed}
                </TableCell>
                <TableCell align="right">
                  {item.TotalDeaths || item.Deaths}
                </TableCell>
                <TableCell align="right">
                  {item.TotalRecovered || item.Recovered}
                </TableCell>
                <TableCell align="right">
                  {dayjs(item.Date).format("DD/MM/YYYY")}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 100]}
        component="div"
        count={isEmpty(datasearch) ? country.length : datasearch.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default DataTotal;
