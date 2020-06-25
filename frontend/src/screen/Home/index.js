import React from "react";
import CardBlog from "../../component/CardBlog";
import TitlePage from "../../component/TitlePage";
import { data } from "../../data/index";

const Home = () => {
  return (
    <div style={{ paddingTop: 100 }}>
      <TitlePage title="ALL NEWS" />
      <div style={{ width: "95%", margin: "auto" }} className="row">
        {data.map((item, index) => (
          <div key={index} className="col-4 my-2">
            <CardBlog item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
