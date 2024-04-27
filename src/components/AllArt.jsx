import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllArt = () => {
    const { user } = useContext(AuthContext)

    const artItems = useLoaderData()

    const { name, email, image, subcategory, price, rating, customization, stockStatus, description, time } = artItems
    return (
        // <div className="overflow-x-auto">
        //     <table className="max-w-7xl mx-auto divide-y-2 divide-gray-200 bg-white text-sm">
        //         <thead className="ltr:text-left rtl:text-right">
        //             <tr>
        //                 <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        //                 <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">subcategory</th>
        //                 <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">email</th>
        //                 <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
        //                 <th className="px-4 py-2"></th>
        //                 <th>name</th>
        //             </tr>
        //         </thead>

        //         <tbody className="divide-y divide-gray-200 mr-10">

        // {artItems.map((item) => (
        //     <tr key={item._id}>

        //         <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.name}</td>
        //         <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.subcategory}</td>
        //         <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.email}</td>
        //         <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.price}</td>
        //         <td className="whitespace-nowrap px-4 py-2"></td>
        //         <a
        //             href="#"
        //             className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        //         >
        //             View
        //         </a>
        //     </tr>
        // ))}



        //         </tbody>
        //     </table>
        // </div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>CreationTime</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>

                    </tr>
                    {artItems.map((item) => (
                        <tr className="hover:shadow-lg" key={item._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                        <div className="text-sm opacity-50">{item.item_name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.email}
                                <br />
                                <span className="badge badge-ghost badge-sm">LastSingIn: {user.metadata.
                                    lastSignInTime}</span>
                            </td>
                            <td>{user.metadata.creationTime
                            }</td>
                            <th>
                                <button className="btn btn-success btn-xs">details</button>
                            </th>
                        </tr>
                    ))}

                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>CreationTime</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default AllArt;