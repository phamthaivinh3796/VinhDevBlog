import React from "react";
import Styles from "./index.style";
import TitlePage from "../../component/TitlePage";
import CardInfo from "../../component/CardInfo";
import { data } from "../../data/index";
const DetailPost = (props) => {
  const id = props.match.params.id;
  const item = data.find((item) => item.id === Number(id));

  return (
    <Styles image={item.image}>
      <div className="detail-container container-fluid">
        <div className="row">
          <div className="col-3 border-right">
            <CardInfo />
          </div>

          <div className="content-container col-9">
            <TitlePage title={item.title} />
            <div className="image-card"></div>
            <div className="content">
              {item.content.split(".").map((i, index) => (
                <div key={index} className="mb-2">
                  {item.content.split(".").length - 1 !== index
                    ? i.concat(".")
                    : i}
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default DetailPost;
