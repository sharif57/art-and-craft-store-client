import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateItems = () => {
    useEffect(() => {
        document.title = 'Update Items'
    }, [])

    const items = useLoaderData()
    const { _id, name, email, item_name, image, subcategory, price, rating, customization, stockStatus, description, time } = items

    console.log(name)
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;

        const item_name = form.item_name.value
        const name = form.name.value;
        // const email = user.email;
        const image = form.image.value;
        const subcategory = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const description = form.description.value;
        const time = form.time.value;

        const newUsers = { name, email, image, item_name, subcategory, price, rating, customization, stockStatus, description, time }
        // console.log(newUsers);

        fetch(`http://localhost:5000/items/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUsers)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Items updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div>
            {/* <h1>update  section{name}</h1> */}


            <div className="max-w-lg mx-auto font-Roboto mt-8 p-6 bg-gray-300 rounded-lg shadow-md">
                <h2 className="text-2xl text-center font-bold mb-4">Update Art & Craft Item</h2>

                <form onSubmit={handleUpdate} action="#" method="post" className="space-y-4">
                    {/* Image*/}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input type="text" name="image" className="mt-3  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={image} />
                    </div>

                    {/* Item Name  */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Item Name</label>
                        <input type="text" id="item_name" name="item_name" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={item_name} />
                    </div>

                    {/* Subcategory Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Subcategory Name</label>
                        <input type="text" id="category" name="subcategory_name" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={subcategory} />
                    </div>

                    {/* Short Description  */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Short Description</label>
                        <textarea name="description" rows="3" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={description}></textarea>
                    </div>

                    {/*  Price  */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="text" id="price" name="price" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={price} />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rating</label>
                        <input type="number" name="rating" min="0" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={rating} />
                    </div>

                    {/* Customization*/}

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Customization</label>
                        <select name="customization" className="mt-1  p-2.5 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue={customization}>
                            <option value="In Stock">yes</option>
                            <option value="Made to Order">no</option>
                        </select>
                    </div>

                    {/* Processing Time  */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                        <input type="text" name="time" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={time} />
                    </div>

                    {/* Stock Status*/}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock Status</label>
                        <select name="stockStatus" className="mt-1  p-2.5 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue={stockStatus}>
                            <option value="In Stock">In Stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>

                    {/*  Update Button */}
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Update
                        </button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default UpdateItems;