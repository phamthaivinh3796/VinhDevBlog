import React from "react";
import { Card, CardBody, Button, CardTitle, CardText } from "reactstrap";
import Styles from "./index.style";
import { history } from "../../Layout/Admin";

const CardBlog = ({ item }) => {
  return (
    <Styles image={item.image}>
      <Card>
        <div className="image-card" alt="Card image cap"></div>
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <CardText className="text-left">
            {item.content.slice(0, 40).concat("...")}
          </CardText>
          <div className="d-flex justify-content-between align-items-center">
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
            <Button
              onClick={() => history.push(`/${item.id}`)}
              type="button"
              color="outline-primary"
            >
              View Detail
            </Button>
          </div>
        </CardBody>
      </Card>
    </Styles>
  );
};

export default CardBlog;
