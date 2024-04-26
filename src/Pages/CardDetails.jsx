import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const art = useLoaderData();

    return (
        <div>
            <h1>Card Details Section</h1>
            <p>Name: {art.price}</p>
            <p>Email: {art.rating}</p>
            {/* Display other details as needed */}
        </div>
    );
};

export default CardDetails;
