import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <section className="mb-20">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Popular Menu"}
        ></SectionTitle>
        <div className="grid gap-5 md:grid-cols-2 ">
          {popularItems.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="btn text-white hover:text-black flex mx-auto mt-7 bg-lime-600 uppercase">
          view full menu
        </button>
      </section>
    </div>
  );
};

export default PopularMenu;
