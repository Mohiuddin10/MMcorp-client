
const TruckEntry = () => {
    return (
        <div>


            {/* Truck chalan entry  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Truck Data Entry</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            {/* Client Details  */}
                            <div className="form-control">
                                <select className="select w-full max-w-xs">
                                    <option disabled selected>Client Name</option>
                                    <option>E. S. International</option>
                                    <option>Altu Khan Jute Mill Ltd</option>
                                    <option>Bart</option>
                                    <option>Lisa</option>
                                    <option>Maggie</option>
                                </select>
                            </div>

                            {/* Truck Number  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Truck No:</span>
                                </label>
                                <input type="text" name="truck_number" placeholder="Dm ta **-****" className="input input-bordered" required />
                            </div>
                            {/* Driver Details  */}
                            <div className="form-control">
                                {/* Driver Name  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Driver Name</span>
                                    </label>
                                    <input type="text" placeholder="Driver Name" name="driverName" className="input input-bordered" />
                                </div>

                                {/* Driver Phone  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Driver Phone</span>
                                    </label>
                                    <input type="tel" placeholder="Driver Phone" name="driverPhone" className="input input-bordered" required />
                                </div>

                            </div>

                            {/* Item Description  */}
                            <div className="form-control">
                                {/* Item Name  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="Driver Name" name="driverName" className="input input-bordered" />
                                </div>

                                {/* Driver Phone  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Driver Phone</span>
                                    </label>
                                    <input type="tel" placeholder="Driver Phone" name="driverPhone" className="input input-bordered" required />
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TruckEntry;