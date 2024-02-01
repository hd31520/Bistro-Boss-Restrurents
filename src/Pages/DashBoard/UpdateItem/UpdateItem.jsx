import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';



const img_hosting_api=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`;
const UpdateItem = () => {
    const item = useLoaderData();
    const {name, category, recipe, price, _id} = item;
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    console.log("item viewer", item);


    
    const onSubmit = async (data) => {
        // console.log(data.image[0]);
        const imgFile = { image: data.image[0] };
        const res = await axios.post(img_hosting_api, imgFile, {
            headers: { "content-type": 'multipart/form-data' }
        })
        console.log(res.data)
        // console.log(res.data.data.display_url)
        if (res.data.success) {
            // now send the menu item to the srver
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }


            const menuRes = axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log('with imgbb url', menuRes);
            if ((await menuRes).data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            }

        }

    };
    return (
        <div>
            <SectionTitle heading="Update An Item" subheading="refresh Info"></SectionTitle>
            <div className="bg-[#F3F3F3] p-4 md:p-16">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full my-3">
                        <div className="label">
                            <span className="label-text">Recipe Name *</span>

                        </div>
                        <input defaultValue={name} {...register('name', { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />

                    </label>

                    <div className="flex gap-5">
                        <label className="form-control w-full my-3">
                            <div className="label">
                                <span className="label-text">Category *</span>

                            </div>
                            <select defaultValue={category} {...register('category', { required: true })} className="select select-bordered w-full ">
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
                            <input defaultValue={price} {...register('price', { required: true })} type="text" placeholder="Price" className="input input-bordered w-full " />

                        </label>

                    </div>


                    <label className="form-control my-3">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>

                        </div>
                        <textarea defaultValue={recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered h-32" placeholder="Recipe Details"></textarea>

                    </label>



                    <div className="my-6">
                        <input type="file" {...register('image')} className="file-input w-full " />
                    </div>


                    <div className="flex justify-center">
                        <button type="submit" className="btn bg-[#835D23] text-white">
                            Add Items <FaUtensils className="ml-4"></FaUtensils>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;