const Description = () => {
    return (
        <div>
            <div className="mx-5 mt-5 p-6 border-2 border-green-500 rounded-lg grid grid-cols-4 justify-center">
                <h4 className="border-2 col-span-2 px-4 pt-4 text-center">Product Description:</h4>
                <h4 className="border-2">Quantity</h4>
                <h4 className="border-2">Truck Fare: </h4>
                {/* <h4 className="border-2">Advance:</h4>
                <h4 className="border-2">Net Pay:</h4> */}
            </div>
        </div>
    );
};

export default Description;