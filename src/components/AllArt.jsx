import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllArt = () => {
    const { user } = useContext(AuthContext)

    const artItems = useLoaderData()

    const { _id,name, email, image, subcategory, price, rating, customization, stockStatus, description, time } = artItems
    return (

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
                            <Link to={`/card/${_id}`}>
                                <th>
                                    <button className="btn btn-success btn-xs">details</button>
                                </th>
                            </Link>
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