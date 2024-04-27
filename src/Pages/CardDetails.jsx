import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const items = useLoaderData()
    const { _id, name, email, image, subcategory, price, rating, customization, stockStatus, description, time } = items

    return (
        <div>

            <div className="hero min-h-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{subcategory}</h1>
                        <div className=" ">
                            <div className="flex justify-around mt-4 ">
                            <p className="text-2xl font-bold bg-green-100 p-2 rounded-xl">customization: {customization}</p>
                            <p className="text-2xl font-bold p-2 rounded-xl bg-green-100">stockStatus: {stockStatus}</p>
                            </div>
                            <div className="flex justify-around mt-4">
                                <p className="font-bold bg-gray-300 p-2 rounded-lg">Prices: {price}</p>
                                <p className="font-bold bg-gray-300 p-2 rounded-lg">Rating: {rating}</p>
                                <p className="font-bold bg-gray-300 p-2 rounded-lg">Time: {time}</p>
                            </div>

                        </div>
                        <p className="py-6">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;