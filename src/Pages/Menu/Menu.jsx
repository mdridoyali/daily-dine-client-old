import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "./../../assets/menu/banner3.jpg";
import dessertImg from "./../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "./../../assets/menu/pizza-bg.jpg";
import saladImg from "./../../assets/menu/salad-bg.jpg";
import soupImg from "./../../assets/menu/soup-bg.jpg";

import PopularMenu from "../Home/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from './../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu ] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    console.log(dessert)
    // const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <div className="">
      <Helmet>
        <title>DailyDine | Menu</title>
      </Helmet>
      <Cover
        title={"OUR MENU"}
        img={menuImg}
        subHeder={"Would you like to try a dish?"}
      ></Cover>
      {/* main cover */}
      <p className="mt-20" ></p>
      <SectionTitle heading={"Today's Offer"} subHeading={"Dont't Miss"} ></SectionTitle>
     {/* offered menu */}
      <MenuCategory items={offered} ></MenuCategory>
      <MenuCategory items={dessert} coverImg={dessertImg} title={'dessert'} ></MenuCategory>
      <MenuCategory items={pizza} coverImg={pizzaImg} title={'pizza'} ></MenuCategory>
      <MenuCategory items={soup} coverImg={soupImg} title={'soup'} ></MenuCategory>
      <MenuCategory items={salad} coverImg={saladImg} title={'salad'} ></MenuCategory>




      <p className="mt-20" ></p>
      {/* <MenuCategory items={soup} ></MenuCategory> */}



      {/* <br />
      <br />
      <PopularMenu></PopularMenu>
      <Cover
        header={"DESSERTS"}
        img={dessertImg}
        subHeder={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>{" "}
      <br />
      <br />
      <PopularMenu></PopularMenu>
      <Cover
        header={"PIZZA"}
        img={pizzaImg}
        subHeder={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>{" "}
      <br />
      <br />
      <PopularMenu></PopularMenu> */}
    </div>
  );
};

export default Menu;
