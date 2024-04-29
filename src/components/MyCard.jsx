import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCard = () => {

    useEffect(() => {
		document.title = 'My Card Section'
	}, [])

    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/items/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {

                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your item has been deleted.",
                                    icon: "success"
                                });
                                // console.log('delete');
                                const remaining = item.filter(i => i._id !== id);
                                setItem(remaining)
                            }
                        })
                }
            })

    }

    useEffect(() => {
        fetch(`http://localhost:5000/myProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [user])
    return (
        <div className="font-Roboto">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 shadow-2xl p-4 gap-6">
                {
                    item?.map(p => (
                        <div key={p._id}>

                            <article className="flex bg-white p-4 shadow-md  transition hover:shadow-xl">

                                <div className="hidden sm:block sm:basis-56">
                                    <img
                                        alt=""
                                        src={p.image}
                                        className="aspect-square rounded-lg h-full w-full object-cover"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                        <a href="#">
                                            <p className="font-bold">{p.item_name}</p>
                                            <h3 className="font-bold uppercase text-2xl text-gray-900">
                                                {p.subcategory}
                                            </h3>
                                            <p className="mt-3"><span className="font-bold mt-7">Description:</span> {p.description}</p>
                                            <p className="mt-3"><span className="font-bold mt-7">Time:</span> {p.time}</p>


                                        </a>

                                        <div className="flex justify-between mt-3">
                                            <p className="bg-green-200 rounded-xl p-2">Rating:{p.rating}</p>
                                            <p className="bg-green-200 rounded-xl p-2">Prices: {p.price}</p>
                                        </div>
                                        <div className="flex justify-between mt-3 flex-col font-semibold">
                                            <p className="bg-gray-200 rounded-xl p-2">StockStatus:{p.stockStatus}</p>
                                            <p className="bg-gray-200 rounded-xl p-2 mt-3">Customization: {p.customization}</p>
                                        </div>

                                        {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                        {p.description}
                                    </p> */}
                                    </div>

                                    <div className="flex justify-around ">
                                        <div className="sm:flex sm:items-end sm:justify-end">
                                            <Link to={`/updateItems/${p._id}`}>
                                                <button
                                                    href="#"
                                                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                                >
                                                    Update
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="sm:flex sm:items-end sm:justify-end">
                                            <button onClick={() => handleDelete(p._id)}
                                                href="#"
                                                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div >



                    ))
                }
            </div >
        </div>
    );
};

export default MyCard;