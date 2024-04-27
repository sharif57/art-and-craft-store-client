import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const items = useLoaderData()
    const { _id, name, email, image,item_name, subcategory, price, rating, customization, stockStatus, description, time } = items

    return (
        <div>

            <div className="hero min-h-10 bg-base-300">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl " />
                    <div>
                        <h1 className="font-bold">{item_name}</h1>
                        <h1 className="text-5xl font-bold">{subcategory}</h1>
                        <p className="py-6"><span className="font-bold">Description:</span> {description}</p>

                        <div className=" ">
                            <div className="flex gap-6 justify-around mt-4 ">
                            <p className="text-xl font-bold bg-green-100 p-2 rounded-xl">customization: {customization}</p>
                            <p className="text-xl font-bold p-2 rounded-xl bg-green-100">stockStatus: {stockStatus}</p>
                            </div>
                            <div className="flex justify-around mt-4">
                                <p className="font-bold bg-gray-300 p-2 rounded-lg">Prices: {price}</p>
                                <p className="font-bold bg-gray-300 p-2 rounded-lg">Rating: {rating}</p>
                                <p className="font-bold bg-gray-300 p-2 rounded-lg">Time: {time}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;