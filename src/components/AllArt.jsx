import { Link, useLoaderData } from "react-router-dom";

const AllArt = () => {

    const artItems = useLoaderData()

    const { name, email, image, subcategory, price, rating, customization, stockStatus, description, time } = artItems
    return (
        // <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 shadow-2xl">
        //     {/* <h1>all card section {artItems.length}</h1> */}
        //     {
        //         artItems.map(art => <div key={art._id}>
        //             <div href="#" className="group max-w-sm relative block overflow-hidden">
        //                 <button
        //                     className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        //                 >
        //                     <span className="sr-only">{ }</span>

        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         strokeWidth="1.5"
        //                         stroke="currentColor"
        //                         className="h-4 w-4"
        //                     >
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        //                         />
        //                     </svg>
        //                 </button>

        //                 <img
        //                     src={art.image}
        //                     alt=""
        //                     className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        //                 />

        //                 <div className="relative border border-gray-100 bg-white p-6">
        //                     <div className="flex justify-between">
        //                         <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium ">{art.stockStatus}</span>
        //                         <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">{art.customization}</span>

        //                     </div>
        //                     <h3 className="mt-4 text-lg font-medium text-gray-900">{art.subcategory}</h3>

        //                     <p className="mt-1.5 text-sm text-gray-700">${art.price}</p>

        //                     <form className="mt-4">
        //                         <Link to={`/card/${art._id}`}>
        //                         <button 
        //                             className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
        //                         >
        //                             View Details
        //                         </button>
        //                         </Link>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>)
        //     }
        // </div>


        // <div>
        //     <h1>All Art & Craft Items</h1>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Name</th>
        //                 <th>Category</th>
        //                 <th>Price</th>
        //                 <th>Action</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {items.map((item) => (
        //                 <tr key={item._id}>
        //                     <td>{item.name}</td>
        //                     <td>{item.category}</td>
        //                     <td>{item.price}</td>
        //                     <td>
        //                         <Link to={`/details/${item._id}`}>View Details</Link>
        //                     </td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>


        <div className="overflow-x-auto">
            <table className="max-w-7xl mx-auto divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">subcategory</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">email</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
                        <th className="px-4 py-2"></th>
                        <th>name</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 mr-10">
                    
                        {artItems.map((item) => (
                            <tr key={item._id}>
                             
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.name}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.subcategory}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.email}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.price}</td>
                                <td className="whitespace-nowrap px-4 py-2"></td>
                                <a
                                href="#"
                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                                View
                            </a>
                            </tr>
                        ))}
                    


                </tbody>
            </table>
        </div>
    );
};

export default AllArt;