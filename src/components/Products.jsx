import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { getData } from "../redux/action";
import { Grid, Paper, Typography, Box } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Products() {
  const [value, setValue] = useState([]);
  const [filterValue, setfilterValue] = useState("");
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getData());
  }, []);
  const products = useSelector((state) => state.products.data);
  // console.log(products);

  const sortData = (m) => {
    if (m === "l") {
      let res = products.sort((a, b) => {
        return a.price - b.price;
      });
      // console.log(res);
      setValue([...res]);
    } else if (m === "h") {
      let res = products.sort((a, b) => {
        return b.price - a.price;
      });
      setValue([...res]);
    }
  };

  const filterCategory = (f) => {
    if (f === "k") {
      let res = products.filter((e) => {
        return e.category === "kids";
      });
      console.log(res);

      setValue([...res]);
    } else if (f === "w") {
      let res = products.filter((e) => {
        return e.category === "women";
      });
      console.log(res);
      setValue([...res]);
    } else if (f === "h") {
      let res = products.filter((e) => {
        return e.category === "homedecor";
      });
      console.log(res);
      setValue([...res]);
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Filter : by Category</Typography>
            <p onClick={() => filterCategory("k")}>Kids</p>
            <p onClick={() => filterCategory("w")}>Women</p>
            <p onClick={() => filterCategory("h")}>homedecor </p>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Sort : </Typography>
            <p onClick={() => sortData("l")}>Cost: Low To High</p>
            <p onClick={() => sortData("h")}>Cost: High To Low</p>
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products?.map((item, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Item>
              <img src={item.image} alt="img" />
              <Link
                to={`/productdetails/${item.id}`}
                style={{ textDecoration: "none", color: "gray" }}
              >
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="p">Category : {item.category}</Typography>
                <br />
                <Typography variant="p">Brand : {item.brand}</Typography>
                <br />
                <Typography variant="p">Price : {item.price}</Typography>
              </Link>
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
