import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaCircle, FaSearch } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div>
                <div id="wd-assignment-control" className="d-flex justify-content-between align-items-center mb-3">
                    <div className="input-group input-group-lg border border-1 rounded-1" style={{ maxWidth: "300px" }}>
                        <span className="input-group-text bg-white border-0"><FaSearch /></span>
                        <input id="wd-search-assignment" type="text" placeholder="Search for Assignments" className="form-contro form-control-lg border-0" />
                    </div>

                    <div>
                        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 rounded-1">+ Group</button>
                        <button id="wd-add-assignment" className="btn btn-lg btn-danger rounded-1">+ Assignment</button>
                    </div>
                </div>
            </div>
            
            <div className="assignments-tab">
                <ul id="wd-assignments" className="list-group rounded-0">
                    <li className="wd-assignment-lists list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-start"><BsGripVertical className="me-2 fs-3" /><GoTriangleDown className="me-2 fs-3" /> <b>ASSIGNMENT</b>
                            <span id="wd-assignments-percentage" className="border border-1 rounded-pill px-3 py-1 me-2 ms-auto">40% of Total
                            </span>
                            <FiPlus /><IoEllipsisVertical className="fs-4" />
                        </div>


                        <ul className="wd-assignments list-group rounded-0">
                            <li className="wd-assignments list-group-item p-3 ps-1">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center"><BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-2 fs-3 green-icon" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <a className="wd-assignment-link text-dark no-underline ms-2"
                                            href="#/Kanbas/Courses/1234/Assignments/123">
                                            <b>A1</b>
                                        </a>
                                        <div className="wd-assignment-ddl ms-2">
                                            <span style={{ color: "red" }}>Multiple Modules</span>  |  <b>Not available until </b>Sep. 19 at 8:59pm <b>Due </b>Sep. 20 at 11:59pm | 100 pts
                                        </div>
                                    </div>
                                    <div className="float-end">
                                        <span className="me-1 position-relative"><FaCheckCircle style={{ top: "2px" }}
                                            className="text-success me-1 position-absolute fs-5" />
                                            <FaCircle className="text-white me-1 fs-6" />
                                            <IoEllipsisVertical className="fs-4" /></span>
                                    </div>
                                </div>
                            </li>

                            <li className="wd-assignments list-group-item p-3 ps-1">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center"><BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-2 fs-3 green-icon" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <a className="wd-assignment-link text-dark no-underline ms-2"
                                            href="#/Kanbas/Courses/1234/Assignments/123">
                                            <b>A2</b>
                                        </a>
                                        <div className="wd-assignment-ddl ms-2">
                                            <span style={{ color: "red" }}>Multiple Modules</span>  |  <b>Not available until </b>Sep. 19 at 8:59pm <b>Due </b>Sep. 20 at 11:59pm | 100 pts
                                        </div>
                                    </div>
                                    <div className="float-end">
                                        <span className="me-1 position-relative"><FaCheckCircle style={{ top: "2px" }}
                                            className="text-success me-1 position-absolute fs-5" />
                                            <FaCircle className="text-white me-1 fs-6" />
                                            <IoEllipsisVertical className="fs-4" /></span>
                                    </div>
                                </div>
                            </li>
                            <li className="wd-assignments list-group-item p-3 ps-1">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center"><BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-2 fs-3 green-icon" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <a className="wd-assignment-link text-dark no-underline ms-2"
                                            href="#/Kanbas/Courses/1234/Assignments/123">
                                            <b>A3</b>
                                        </a>
                                        <div className="wd-assignment-ddl ms-2">
                                            <span style={{ color: "red" }}>Multiple Modules</span>  |  <b>Not available until </b>Sep. 19 at 8:59pm <b>Due </b>Sep. 20 at 11:59pm | 100 pts
                                        </div>
                                    </div>
                                    <div className="float-end">
                                        <span className="me-1 position-relative"><FaCheckCircle style={{ top: "2px" }}
                                            className="text-success me-1 position-absolute fs-5" />
                                            <FaCircle className="text-white me-1 fs-6" />
                                            <IoEllipsisVertical className="fs-4" /></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
