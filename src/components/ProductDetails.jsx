import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Navbar from "./Navbar";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "500px",
  margin: "auto",
}));

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData);
  }, []);
  const products = useSelector((state) => state.products.data);
  // console.log(getCart);

  return (
    <div>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products
            ?.filter((e) => e.id == `${id}`)
            ?.map((item, i) => (
              <Grid item xs={12} sm={12} md={12} key={i} m={5}>
                <Item>
                  <img src={item.image} alt="img" />

                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="p">
                    Category : {item.category}
                  </Typography>
                  <br />
                  <Typography variant="p">Brand : {item.brand}</Typography>
                  <br />
                  <Typography variant="p">Price : {item.price}</Typography>
                </Item>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}
