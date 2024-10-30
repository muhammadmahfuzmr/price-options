import { IoMdCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div className="mx-6 text-xl hover:bg-blue-950 hover:rounded-xl cursor-pointer">
            <p className="flex items-center gap-2 "> <IoMdCheckmarkCircle></IoMdCheckmarkCircle>{feature}</p>
        </div>
    );
};

export default Feature;