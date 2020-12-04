import React from "react";
import { Card, Icon, Feed, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import userImage from "../img/user.png";
// eslint-disable-next-line import/no-anonymous-default-export
const feeds = [];
const tempData = [
  {
    name: "RRZ SATIŞ OFİSİ",
    rate: "4.5",
    img: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
  },
  {
    name: "Sajad masih",
    rate: "4.1",
    img: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
  },
  {
    name: "Peyman gholi",
    rate: "3.2",
    img: "https://react.semantic-ui.com/images/avatar/small/helen.jpg",
  },
];
for (let i = 0; i < 3; i++) {
  feeds.push(
    <Feed.Event>
      <Feed.Label image={tempData[i].img} />
      <Feed.Content>
        <Feed.Summary>
          {tempData[i].name}
          <Header size="tiny" floated="right" textAlign="right">
            <Icon name="chat" disabled corner="top right" size="tiny" />
            <Icon name="phone volume" disabled corner="top right  " />
          </Header>
          {/* <Header size="tiny" floated="right" textAlign="right">
            
          </Header> */}
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="star" color="yellow" />
            4.1
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  );
}
const feedEventGenerator = () => {};
const Agents = () => (
  <Card>
    <Card.Content>
      <Header size="medium" floated="left" textAlign="right">
        Medium Header
      </Header>

      <Header size="small" floated="right" textAlign="left">
        <Icon name="question circle outline" disabled corner="top right  " />
      </Header>
    </Card.Content>
    <Card.Content>
      <Feed>{feeds}</Feed>
    </Card.Content>
  </Card>
);

export default Agents;
