import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ artItem }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, name, email, image, subcategory, price, rating, customization, stockStatus, description, time } = artItem

    const handleView = _id => {
        console.log(_id);
    }
    return (
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{stockStatus}</span>
                <h2 className="text-xl font-semibold tracking-wide">{subcategory}</h2>
            </div>
            <p className="dark:text-gray-800">{description}</p>

            <Link to={`/card/${_id}`}>
                <button className="btn btn-primary w-full">View Details</button>
            </Link>
        </div>
    );
};

export default Card;