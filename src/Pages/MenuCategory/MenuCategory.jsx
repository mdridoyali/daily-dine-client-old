import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem";

// eslint-disable-next-line react/prop-types
const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className=" mb-10">
      {title && <Cover title={title} img={coverImg}></Cover>}
      <div className="grid gap-5 pt-2 md:grid-cols-2 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        {" "}
        <button className="btn text-white mt-7 flex mx-auto bg-lime-600 uppercase">
          order now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
