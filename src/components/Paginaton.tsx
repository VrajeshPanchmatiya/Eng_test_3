import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageAction } from "../redux/pageAction";
import { useNavigate } from "react-router-dom";
const Paginaton = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const dispatch = useDispatch();
  const navigat = useNavigate();
  const [page, setPage] = React.useState(0);
  const data = useSelector((state: any) => {
    return state.pageInfo;
  });
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const DisplayData = (data: any) => {
    navigat("/details", { state: data });
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(pageAction(pageNumber));
      setPageNumber(pageNumber + 1);
    }, 10000);
    return () => {
      clearTimeout();
    };
  }, [dispatch, pageNumber]);
  return (
    <div>
      <h1>Table</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Created AT</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * 20, page * 20 + 20).map((row: any) => (
              <TableRow
                key={Math.random()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => DisplayData(row)}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.created_at}
                </TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <Pagination
            count={data.length / 20}
            page={page}
            onChange={(e, page) => handleChange(e, page)}
            shape="rounded"
          />
        </Table>
      </TableContainer>
    </div>
  );
};
export default Paginaton;
