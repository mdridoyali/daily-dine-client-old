import SectionTitle from "../../Components/SectionTitle";
import img1 from "./../../assets/home/slide1.jpg";
import img2 from "./../../assets/home/slide2.jpg";
import img3 from "./../../assets/home/slide3.jpg";

const ChefRecommend = () => {
  return (
    <div className="w-11/12 mx-auto mb-20">
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3">
        <div className="">
          <img className="w-full rounded-t h-96" src={img1} />
          <div className="text-center rounded-b bg-gray-200 p-6 space-y-2">
            <h2 className="text-xl font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn bg-lime-600 text-white ">add to cart</button>
          </div>
        </div>
        <div className="">
          <img className="w-full rounded-t  h-96"  src={img2} />
          <div className="text-center rounded-b bg-gray-200 p-6 space-y-2">
            <h2 className="text-xl font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn bg-lime-600 text-white ">add to cart</button>
          </div>
        </div>
        <div className="">
          <img className="w-full rounded-t  h-96"  src={img3} />
          <div className="text-center rounded-b bg-gray-200 p-6 space-y-2">
            <h2 className="text-xl font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn bg-lime-600 text-white ">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommend;
