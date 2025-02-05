import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentsControlsButtons() {
    return(
        <div className="float-end">
            <span className="badge rounded-pill bg-secondary text-dark border border-dark">40% of Total</span>
            <BsPlus/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}