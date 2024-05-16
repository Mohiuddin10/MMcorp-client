import Party from "./Party/Party";
import TruckDetails from "./TruckDetails/TruckDetails";

const FinalTruckChalan = () => {
    return (
        <div>
            {/* header  */}
            <div className="text-center">
                <h1 className="text-6xl text-green-700">M & M Trading</h1>
                <h1 className="text-2xl text-green-900">172, Khatungonj. Ananda Market, Chattogram</h1>
                <h1 className="text-xl text-green-900">Phone: 01711-264423</h1>
            </div>

            {/* Delivery party  */}
            <Party></Party>
            {/* Truck details  */}
            <TruckDetails />

            <div className="mx-5 mt-5 p-6 border-2 border-green-500 rounded-lg grid grid-cols-3 justify-center">
                <h4 className="border-2 col-span-2 px-4 pt-4 mx-auto">Product Description:</h4>
                <h4 className="border-2">Truck Fare: </h4>
                {/* <h4 className="border-2">Advance:</h4>
                <h4 className="border-2">Net Pay:</h4> */}
            </div>
        </div>
    );
};

export default FinalTruckChalan;