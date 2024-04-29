import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Pages/Banner";
import Card from "../Pages/Card";
import Review from "../Pages/Review";
import Cost from "../Pages/Cost";
import { useEffect } from "react";
import Subcategory from "../Pages/Subcategory";

const Home = () => {
    useEffect(() => {
		document.title = 'Home'
	}, [])
    const artItems = useLoaderData()
    return (
        <div className="font-Roboto">
            <Banner></Banner>
            <div className=" text-center mt-12">
                <h2 className="lg:text-5xl text-2xl font-extrabold mb-8  bg-gradient-to-r from-pink-600 via-blue-900 to-blue-500 text-transparent bg-clip-text animate-gradient ">   Craft Categories Items Features </h2>
                <p className="lg:w-1/2  mx-auto mb-10 font-Roboto">painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language. The elements of this language—its shapes, lines, colours, tones, and textures—are used in various ways to produce sensations of volume, space, movement, and light on a flat surface</p>
            </div>
            <div className="grid p-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    artItems.slice(0, 6).map(artItem => <Card key={artItem._id} artItem={artItem}>

                    </Card>)
                }
            </div>
            <div className="mt-8">
                <h1 className="lg:text-5xl text-2xl text-center font-extrabold mb-8  bg-gradient-to-r from-pink-600 via-blue-900 to-blue-500 text-transparent bg-clip-text animate-gradient font-Roboto">Art & Craft Categories Section</h1>
                <p className="lg:w-1/2 mt-4 mx-auto text-center mb-5 font-Roboto">Arts and crafts is a category of applied arts, which is a section of handicrafts and manufacturing that includes visual arts.</p>
                {/* <div className="grid p-2 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {
                        artItems.map(artItem => <div key={artItem._id}>
                           <div className="relative font-Roboto overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <img
                                    alt=""
                                    src={artItem.image}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                                    <div className="p-4 sm:p-6">
                                        <time className="block text-xs text-white/90"> {artItem.time} </time>

                                        <a href="#">
                                            <h3 className="mt-0.5 text-lg text-white">{artItem.subcategory}</h3>
                                        </a>

                                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                            {artItem.description}
                                        </p>
                                    </div>
                                    <Link to={`/card/${artItem._id}`}>
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
                </div> */}
                <Subcategory></Subcategory>
            </div>
            <Review></Review>
            <Cost></Cost>
        </div>
    );
};

export default Home;