import { useLoaderData } from "react-router-dom";
import Banner from "../Pages/Banner";
import Card from "../Pages/Card";
import Review from "../Pages/Review";
import Cost from "../Pages/Cost";

const Home = () => {
    const artItems = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className=" text-center mt-12">
                <h2 className="text-5xl font-extrabold mb-8">  Painting and Drawing Items Features </h2>
                <p className="w-1/2  mx-auto mb-10">painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language. The elements of this language—its shapes, lines, colours, tones, and textures—are used in various ways to produce sensations of volume, space, movement, and light on a flat surface</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    artItems.slice(0,6).map(artItem => <Card key={artItem._id} artItem={artItem}>

                    </Card>)
                }
            </div>
            <Review></Review>
            <Cost></Cost>
        </div>
    );
};

export default Home;