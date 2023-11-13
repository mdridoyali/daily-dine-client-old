import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Categories from "./Categories";
import ChefRecommend from "./ChefRecommend";
import DailyDine from "./DailyDine";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DailyDine</title>
      </Helmet>
      <Banner />
      <Categories />
      <DailyDine />
      <PopularMenu />
      <CallUs />
      <ChefRecommend />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
