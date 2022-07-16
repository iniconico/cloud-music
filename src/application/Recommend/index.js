import React from "react";
import Scroll from "../../baseUI/scroll";
import RecommendList from "../../components/recommendList";
import Slider from "../../components/slider";
import { Content } from "./style";

function Recommend(props) {
  // mock数据
  const bannerList = [1, 2, 3, 4].map((item) => {
    return {
      imageUrl:
        "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg",
    };
  });
  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
    return {
      id: 1,
      picUrl:
        "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: 1145133,
      name: "Jackson Winston",
    };
  });

  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
    </Content>
  );
}

export default React.memo(Recommend);
