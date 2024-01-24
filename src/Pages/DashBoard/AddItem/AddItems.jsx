import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";




const img_hosting_api=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`;
const AddItems = () => {
    // const axiosPublic = useAxiosPublic();e
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();


    const onSubmit = async (data) => {
        // console.log(data.image[0]);
        const imgFile ={image: data.image[0]};
        const res = await axios.post(img_hosting_api, imgFile ,{
            headers: {"content-type": 'multipart/form-data'}
        })
        console.log(res.data)
        // console.log(res.data.data.display_url)
        if(res.data.success){
            // now send the menu item to the srver
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }


            const menuRes = axiosSecure.post('/menu', menuItem);
            console.log('with imgbb url',menuRes);

        }

    };
    return (
        <div>
            <div>
                <SectionTitle heading="Add an item" subheading="What's New"></SectionTitle>
            </div>
            <div className="bg-[#F3F3F3] p-4 md:p-16">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full my-3">
                        <div className="label">
                            <span className="label-text">Recipe Name *</span>

                        </div>
                        <input {...register('name', {required: true})} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />

                    </label>

                    <div className="flex gap-5">
                        <label className="form-control w-full my-3">
                            <div className="label">
                                <span className="label-text">Category *</span>

                            </div>
                            <select defaultValue="default" {...register('category', {required: true})} className="select select-bordered w-full ">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desert">Desert</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </label>
                        <label className="form-control w-full my-3">
                            <div className="label">
                                <span className="label-text">Price *</span>

                            </div>
                            <input {...register('price', {required: true})} type="text" placeholder="Price" className="input input-bordered w-full " />

                        </label>

                    </div>


                    <label className="form-control my-3">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>

                        </div>
                        <textarea {...register('recipe', {required: true})} className="textarea textarea-bordered h-32" placeholder="Recipe Details"></textarea>

                    </label>



                    <div className="my-6">
                        <input type="file" {...register('image')} className="file-input w-full " />
                    </div>


                    <button type="submit" className="btn bg-[#835D23] text-white">
                        Add Items <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;