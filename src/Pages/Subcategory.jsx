import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Subcategory = () => {
    const [subcategory, setSubcategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/subcategory')
            .then(res => res.json())
            .then(data => {
                setSubcategory(data)
            })
    }, [])
    return (
        <div className="grid p-2 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">


            {
                subcategory.map(sub => <div key={sub._id}>
                    <div className="relative font-Roboto overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src={sub.image}
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <time className="block text-xs text-white/90"> {sub.processing_time} </time>

                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">{sub.subcategory_Name}</h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                    {sub.description}
                                </p>
                            </div>
                            <Link to={`/subDetails/${sub._id}`}>
                                <button
                                    className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                                >
                                    View Details
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>)
            }
        </div>
    );
};

export default Subcategory;