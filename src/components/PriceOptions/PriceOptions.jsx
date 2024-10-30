import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Standard workout equipment",
                "Limited gym hours",
                "Access to locker room"
            ],
            "price": 30.00
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "Extended gym hours",
                "Group fitness classes",
                "Access to locker room"
            ],
            "price": 50.00
        },
        {
            "id": 3,
            "name": "Platinum Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "24/7 gym access",
                "Personal training sessions",
                "Access to sauna and spa",
                "Access to locker room",
                "Towel service"
            ],
            "price": 80.00
        }
    ];

    return (
        <div className="mx-5">
            <h1 className="text-center font-semibold text-5xl md:text-7xl my-10">Best prices in the town</h1>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"> {
                priceOptions.map(priceOption=> <PriceOption key={priceOption.id} priceOption={priceOption}></PriceOption>)
            }</div>
        </div>
    );
};

export default PriceOptions;