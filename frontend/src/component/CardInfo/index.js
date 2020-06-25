import React, { useState } from "react";
import Styles from "./index.style";
const CardInfo = () => {
  const [channel, setChannel] = useState("");
  return (
    <Styles avatar="https://pbs.twimg.com/media/EWQBIe2UYAAl6Kz.jpg">
      <div className="card card-container">
        <div className="img-info"></div>
        <div className="card-body w-100">
          <h5 className="card-title">Phạm Thái Vĩnh</h5>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
          <div
            style={{ height: 80 }}
            className="d-flex justify-content-around align-items-center"
          >
            <div
              onMouseOver={() => setChannel("facebook")}
              onMouseLeave={() => setChannel("")}
              className={`${
                channel === "facebook" && "channel-active"
              } channel-info`}
            >
              <i className="channel-icon fab fa-facebook-f"></i>
            </div>
            <div
              onMouseOver={() => setChannel("instagram")}
              className={`${
                channel === "instagram" && "channel-active"
              } channel-info`}
              onMouseLeave={() => setChannel("")}
            >
              <i className="channel-icon fab fa-instagram"></i>
            </div>
            <div
              onMouseOver={() => setChannel("youtube")}
              className={`${
                channel === "youtube" && "channel-active"
              } channel-info`}
              onMouseLeave={() => setChannel("")}
            >
              <i className="channel-icon fab fa-youtube"></i>
            </div>
            <div
              onMouseOver={() => setChannel("twitter")}
              className={`${
                channel === "twitter" && "channel-active"
              } channel-info`}
              onMouseLeave={() => setChannel("")}
            >
              <i className="channel-icon fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default CardInfo;
