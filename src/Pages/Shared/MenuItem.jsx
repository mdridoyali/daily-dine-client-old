

// eslint-disable-next-line react/prop-types
const MenuItem = ({item}) => {

    const {name, image, price, recipe} = item
    return (
        <div className="flex px-2 md:w-10/12 mx-auto space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] h-[50px] md:h-[90px]" src={image} />
            <div>
                <h3 className="uppercase font-bold ">{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 font-bold ">${price}</p>
        </div>
    );
};

export default MenuItem;