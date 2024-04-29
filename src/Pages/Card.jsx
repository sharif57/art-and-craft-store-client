import { BiDollar } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import { RiAtFill } from "react-icons/ri";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ artItem }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, name, email, item_name, image, subcategory, price, rating, customization, stockStatus, description, time } = artItem

    return (
        

        <div className="mb-8 font-Roboto">


            <div href="#" className="group max-w-sm bg-white hover:shadow-lg relative block overflow-hidden">
                <button
                    className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </button>

                <img
                    src={image}
                    alt=""
                    className="h-64 p-4 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-6">
                    <div className="flex justify-between">
                        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium ">{stockStatus}</span>

                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{item_name}</h3>

                    <div className="flex justify-between">

                        <div className="flex items-center  gap-1 ">
                            <BiDollar className=""></BiDollar>
                            <p className=" text-gray-700 font-bold">{price}</p>

                        </div>
                        <div className="flex items-center  gap-1 ">
                            <FcRating />

                            <p className=" text-gray-700 font-bold">{rating}</p>

                        </div>


                    </div>

                    <form className="mt-4">
                        <Link to={`/card/${_id}`}>
                            <button
                                className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                            >
                                View Details
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Card;