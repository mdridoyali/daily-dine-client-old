import { useState } from "react";
import Cover from "../Shared/Cover/Cover";
import orderImg from "./../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../Components/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OrderTab from "./OrderTab";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();


  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
    <Helmet>
        <title>Bistro Boss | Order Food</title>
    </Helmet>
    <Cover img={orderImg} title="Order Food"></Cover>
    <Tabs defaultIndex={tabIndex} className={'w-11/12 mx-auto my-16  '} onSelect={(index) => setTabIndex(index)}>
        <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinks}></OrderTab>
        </TabPanel>
    </Tabs>
</div>
  );
};

export default Order;
