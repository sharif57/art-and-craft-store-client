import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    useEffect(() => {
		document.title = 'Card Information'
	}, [])
    const items = useLoaderData()
    const { _id, name, email, image,item_name, subcategory, price, rating, customization, stockStatus, description, time } = items

    return (
        <div>

            <div className="hero min-h-10 bg-base-300 font-Roboto mt-5 p-2">
                <div className="lg:hero-content flex-col p-1 lg:flex-row-reverse">
                    <img src={image} className="lg:max-w-sm rounded-lg shadow-2xl " />
                    <div className="mt-5">
                        <h1 className="font-bold">{item_name}</h1>
                        <h1 className="lg:text-5xl text-2xl font-bold">{subcategory}</h1>
                        <p className="py-6"><span className="font-bold">Description:</span> {description}</p>

                        <div className=" ">
                            <div className="lg:flex gap-6 justify-around mt-4 items-center space-y-2 ">
                            <p className="lg:text-xl font-bold bg-green-100 p-2 rounded-xl">Customization: {customization}</p>
                            <p className="lg:text-xl font-bold p-2 rounded-xl bg-green-100">Stock Status: {stockStatus}</p>
                            </div>
                            <div className="lg:flex justify-around mt-4 space-y-2">
                                <p className="font-bold bg-gray-300 p-2 rounded-lg">Prices: {price}</p>
                                <p className="font-bold bg-gray-300 p-2 rounded-lg">Rating: {rating}</p>
                                <p className="font-bold  bg-gray-300 p-2 rounded-lg">Time: {time}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;