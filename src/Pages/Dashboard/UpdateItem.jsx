import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const image_hoisting_key = import.meta.env.VITE_IMG_HOISTING_KEY
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`

const UpdateItem = () => {
    const { name, category, recipe, price, image, _id } = useLoaderData()
    console.log(name, category, recipe, price,  image, _id)

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxios()
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hoisting_api, imageFile, {
            headers: {
                'content-type': ' multipart/form-data'
            }
        })
        console.log(res.data)
        if (res.data.success) {
            // now send the menu item to the database with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            console.log(menuItem)
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {
                toast.success(`${data.name} Update Success`)
            }

        }
    }



    return (
        <div>
            <SectionTitle heading={'Update an Item'} subHeading={'Refresh info'} ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6 ">
                    <label className="label">
                        <span className="label-text">Recipe Name* </span>

                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        {...register('name')}
                        defaultValue={name}
                        required
                        className="input input-bordered w-full " />

                </div>

                <div className="flex flex-col md:flex-row md:gap-6 ">
                    {/* category */}
                    <div className="flex-1">
                        <div className="form-control w-full md:my-6 ">
                            <label className="label">
                                <span className="label-text">Category* </span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })} className="select select-bordered w-full ">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                    </div>
                    {/* price */}
                    <div className="flex-1">
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">price* </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                defaultValue={price}
                                {...register('price', { required: true })}
                                className="input input-bordered w-full " />

                        </div>
                    </div>
                </div>
                {/* recipe details */}
                <div>
                    <label className="label">
                        <span className="label-text"> Recipe Details* </span>
                    </label>
                    <textarea defaultValue={recipe}  {...register('recipe', { required: true })} className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                </div>
                <div className="my-5 ">
                    <input   {...register('image', { required: true })} type="file" className="file-input border   " />
                </div>
                <input className="btn  cursor-pointer" type="submit" value={'add item'} />
            </form>
        </div>
    );
};

export default UpdateItem;