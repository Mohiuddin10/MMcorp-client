const Description = () => {
    return (
        <div>
            <div className="mx-5 mt-5 p-6 border-2 border-green-500 rounded-lg grid grid-cols-4 justify-center">
                <div className="border-2 col-span-2 p-4 text-center">
                    <h4 className="">Product Description:</h4>
                    <h3 className="text-start">Imported Carbon Block</h3>
                </div>
                <h4 className="border-2 col-span-1 p-4 text-center">Quantity</h4>
                <h4 className="border-2 col-span-1 p-4 text-center">Truck Fare</h4>
                {/* <h4 className="border-2">Advance:</h4>
                <h4 className="border-2">Net Pay:</h4> */}
            </div>
        </div>
    );
};

export default Description;