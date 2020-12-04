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
  Modal,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import userImage from "../img/user.png";
import modalImage from "../img/offer-pack.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    console.log("click");
    setOpen(true);
  };

  const modall = () => {
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        // trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header>
          Takip edebilmek için gomeed.com aracısı olmalısın!
        </Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={modalImage} wrapped />
          <Modal.Description>
            <p>
              Ücretsiz verilen ilanlar ile portföyünüzü güçlendirip
              satışlarınızdan kazanç sağlayabilirsiniz.
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} positive>
            Ok
          </Button>
        </Modal.Actions>
      </Modal>
    );
  };

  return (
    // <Rating icon="star" defaultRating={3} maxRating={4} />
    <React.Fragment>
      <Card>
        <Card.Content>
          <Card.Header>Steve Sanders</Card.Header>
        </Card.Content>
        <Feed>
          <Feed.Event>
            <Image src={userImage} size="tiny" circular centered />
          </Feed.Event>
          <Header as="h4" textAlign="center">
            Se*** Sö***
          </Header>
          <Header as="h4" textAlign="center">
            <Rating icon="star" defaultRating={1} maxRating={2} />
            0.0
          </Header>
          <Card.Content textAlign="center">
            <Button primary size="small" onClick={handleClick}>
              Takip
            </Button>
            <Icon disabled name="chat" size="big" />
          </Card.Content>
        </Feed>
        <Card.Content>
          <Card.Meta>
            <Header as="h3" block textAlign="center">
              +9053 ... ....
            </Header>
          </Card.Meta>
          <Card.Description textAlign="center">
            <p>
              Satışta <Link to="/about">2 ilani</Link> var
            </p>
          </Card.Description>
        </Card.Content>
      </Card>
      {modall()}
    </React.Fragment>

    //   <h3 className="ui left aligned header">İlan Sahibi</h3>
    //   <img
    //     classNameName="ui tiny circular centered image"
    //     src={userImage}
    //     alt="user"
    //   />
    //   <h4 className="ui center aligned header">Se*** Sö***</h4>
    //   <div className="ui star rating" data-rating="2"></div>

    //   <div classNameName="content"></div>
    //   <div classNameName="image">
    //     <img />
    //   </div>
    //   <div classNameName="content">
    //     <span classNameName="right floated">
    //       <i classNameName="heart outline like icon"></i>
    //       17 likes
    //     </span>
    //     <i classNameName="comment icon"></i>3 comments
    //   </div>
    //   <div classNameName="extra content">

    //     <div classNameName="ui large transparent left icon input">
    //       <i classNameName="heart outline icon"></i>
    //       <input type="text" placeholder="Add Comment..." />
    //     </div>
    //   </div>
    // </div>
  );
};
