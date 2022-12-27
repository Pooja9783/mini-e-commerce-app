import React from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#D9DD6B", color: "#D54C4C" }} p={2}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          Mini-E-Commerce
        </Grid>
        <Grid item xs={4} md={8} sx={{ display: "flex" }}>
          <Grid mr={4}>
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
              Product
            </Link>
          </Grid>
          <Grid mr={4}>
            {" "}
            <Link
              to="/productdetails/:id"
              style={{ textDecoration: "none", color: "gray" }}
            >
              Product Details
            </Link>
          </Grid>
          <Grid mr={4}>
            {" "}
            <Link
              to="/orderpage"
              style={{ textDecoration: "none", color: "gray" }}
            >
              Orders
            </Link>
          </Grid>
          <Grid mr={4}>
            {" "}
            <Link to="/cart" style={{ textDecoration: "none", color: "gray" }}>
              Cart
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
