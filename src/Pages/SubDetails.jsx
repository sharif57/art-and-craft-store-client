import { useLoaderData } from "react-router-dom";

const SubDetails = () => {
    const item = useLoaderData()
    return (
        <div>
            <section className="overflow-hidden p-2 shadow-xl bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1>{item.item_name}</h1>
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            {item.subcategory_Name}
                        </h2>

                        <p className=" text-gray-500 md:mt-4 md:block">
                            {item.description}
                        </p>
                        <div className="flex justify-around">
                            <p className="p-2 bg-slate-200">Price: {item.price}</p>
                            <p className="p-2 bg-slate-200">Rating: {item.rating}</p>
                            <p className="p-2 bg-slate-200">Time: {item.processing_time}</p>
                        </div>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                    src={item.image}
                    className="h-full w-[500px] object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section>
        </div>
    );
};

export default SubDetails;