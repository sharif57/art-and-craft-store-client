import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddCraftItem = () => {
    const { user } = useContext(AuthContext)
    const handleAddItem = (e) => {
        e.preventDefault();
        const form = e.target;

        const item_name = form.item_name.value
        const name = form.name.value;
        const email = user.email;
        const image = form.image.value;
        const subcategory = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const description = form.description.value;
        const time = form.time.value;

        const newUsers = { name, email, image, item_name, subcategory, price, rating, customization, stockStatus, description, time }
        console.log(newUsers);

        // send data to the server
        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUsers)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold text-center">Add Craft Items</h2>
                <form onSubmit={handleAddItem}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group  text-red-700 border-2 border-black rounded-lg">
                                <input type="text" name="name" placeholder="User Name" className="input font-extrabold input-bordered w-full" defaultValue={user.displayName} disabled />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group border-2 border-black rounded-lg">
                                <input type="text" name="email" placeholder="User email" className="input input-bordered w-full" defaultValue={user.email} disabled />
                            </label>
                        </div>
                    </div>
                    {/* item_name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">item_name</span>
                        </label>
                        <label className="input-group   rounded-lg">
                            <input type="text" name="item_name" placeholder="item_name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="items image" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">subcategory_Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="subcategory_Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-8 gap-4">
                        <div className="form-control md:w-1/2 ">
                            {/* <label className="label">
                                <span className="label-text">customization</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="customization" placeholder="customization- example- yes, no" className="input input-bordered w-full" />
                            </label> */}
                            <label className="label">
                                <span className="label-text">customization</span>
                            </label>
                            <select className=" h-11" name="customization" required>
                                <option value="">Select Customization</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">stockStatus</span>
                            </label>
                            <select className=" h-11" name="stockStatus" required>
                                <option value="">Select Stock Status</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="short description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2  ml-4">
                            <label className="label">
                                <span className="label-text">processing_time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="time" placeholder="processing_time" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add items" className="btn btn-primary w-full" />

                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;