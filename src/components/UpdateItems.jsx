import { useLoaderData } from "react-router-dom";


const UpdateItems = () => {
    const items = useLoaderData()
    const { _id, name, email, image, subcategory, price, rating, customization, stockStatus, description, time } = items

    return (
        <div>
            {/* <h1>update  section{name}</h1> */}


            <div className="max-w-lg mx-auto mt-8 p-6 bg-gray-300 rounded-lg shadow-md">
                <h2 className="text-2xl text-center font-bold mb-4">Update Art & Craft Item</h2>

                <form action="#" method="post" className="space-y-4">
                    {/* Image*/}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input type="text" name="image" className="mt-3  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    {/* Item Name  */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Item Name</label>
                        <input type="text" id="item_name" name="item_name" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    {/* Subcategory Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Subcategory Name</label>
                        <input type="text" id="subcategory_name" name="subcategory_name" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    {/* Short Description  */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Short Description</label>
                        <textarea id="short_description" name="short_description" rows="3" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                    </div>

                    {/*  Price  */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="text" id="price" name="price" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rating</label>
                        <input type="number" id="rating" name="rating" min="0" max="5" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    {/* Customization*/}

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Customization</label>
                        <select id="stock_status" name="Customization" className="mt-1  p-2.5 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="In Stock">yes</option>
                            <option value="Made to Order">no</option>
                        </select>
                    </div>

                    {/* Processing Time  */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                        <input type="text" id="processing_time" name="processing_time" className="mt-1  p-2.5 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    {/* Stock Status*/}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock Status</label>
                        <select id="stock_status" name="stock_status" className="mt-1  p-2.5 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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