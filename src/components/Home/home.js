import React from "react";
import NewsSlider from "../widgets/NewsSlider/slider";
import Newslist from "../widgets/Newslist/newsList";
import VideoList from '../widgets/VideosList/videosList';

const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{
          dots: false
        }}
      />
      <Newslist 
      type="card" 
      loadmore={true} 
      start={3} 
      amount={3} />

      <VideoList 
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={3}
      />
    </div>
  );
};

export default Home;
