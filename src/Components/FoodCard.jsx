// eslint-disable-next-line react/prop-types
const FoodCard = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 bg-slate-800 text-white px-3 mt-3 mr-4 rounded">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-start">
            <button className="btn border-0  border-b-4 border-orange-400 hover:bg-black hover:text-white outline-none  ">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
