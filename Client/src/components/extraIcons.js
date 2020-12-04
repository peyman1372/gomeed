import React from "react";
import {
  Rating,
  Card,
  Icon,
  Image,
  Feed,
  Header,
  Button,
  Message,
  Grid,
  Segment,
  Label,
  Item,
} from "semantic-ui-react";

const ExtraIcons = () => {
  return (
    <React.Fragment>
      <Item>
        <Item.Content>
          <Item.Header>
            <Icon name="info circle" size="large" circular />
          </Item.Header>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header>
            <Icon name="share alternate" size="large" circular />
          </Item.Header>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header>
            <Icon name="flag" size="large" circular />
          </Item.Header>
        </Item.Content>
      </Item>
    </React.Fragment>
  );
};

export default ExtraIcons;
