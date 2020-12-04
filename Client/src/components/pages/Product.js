import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";
import Slider from "../Slider";
import SignUp from "../SignUp";
import Agents from "../Agents";
import ProductInfo from "../ProductInfo";
import ExtraIcons from "../extraIcons";

const Product = () => {
  return (
    <Grid columns="equal">
      <Grid.Row>
        <Slider />
        <Grid.Column width={4}>
          <SignUp />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ExtraIcons />
        </Grid.Column>
        <Grid.Column width={9}>
          <ProductInfo />
        </Grid.Column>
        <Grid.Column width={4}>
          <Agents />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default Product;
