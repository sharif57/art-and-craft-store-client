import { Link, useLoaderData } from "react-router-dom";

const AllArt = () => {
   
    const artItems = useLoaderData()
    // const { name, email, image, subcategory, price, rating, customization, stockStatus, description, time } = artItems
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 shadow-2xl">
            {/* <h1>all card section {artItems.length}</h1> */}
            {
                artItems.map(art => <div key={art._id}>
                    <div href="#" className="group max-w-sm relative block overflow-hidden">
                        <button
                            className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                        >
                            <span className="sr-only">{ }</span>

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
                            src={art.image}
                            alt=""
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                        />

                        <div className="relative border border-gray-100 bg-white p-6">
                            <div className="flex justify-between">
                                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium ">{art.stockStatus}</span>
                                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">{art.customization}</span>

                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">{art.subcategory}</h3>

                            <p className="mt-1.5 text-sm text-gray-700">${art.price}</p>

                            <form className="mt-4">
                                <Link to={`/card/${art._id}`}>
                                <button 
                                    className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                                >
                                    View Details
                                </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllArt;