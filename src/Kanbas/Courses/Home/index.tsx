import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        // <table id="wd-home">
        <div className="d-flex" id="wd-home">
            <div className="flex-fill">
                {/* <tr>
                <td valign="top"> */}
                <Modules />
            </div>
            {/* </td> */}
            {/* <td valign="top"> */}
            <div className="d-none d-md-block">

                <CourseStatus />
            </div>
        </div>
            //     {/* </td>
            // </tr> */}
    // {/* </table> */ }
    );
}
