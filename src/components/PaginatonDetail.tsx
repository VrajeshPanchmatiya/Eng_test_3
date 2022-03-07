import { Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
const PaginatonDetail = () => {
  const { state } = useLocation();
  return (
    <>
      <h1>Selected Row Data</h1>
      <Typography data-testid="typography">{JSON.stringify(state)}</Typography>
    </>
  );
};
export default PaginatonDetail;
