import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaCircle, FaSearch, FaTrash } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import { useNavigate, useParams } from "react-router";
// import * as db from "../../Database";
import { Link } from "react-router-dom";
import AssignmentControls from "./AssignmentControls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AssignmentsControlButtons from "./AssignmentControlButtons";
import { format } from "date-fns";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
    const { cid } = useParams();
    // const { assignments } = db;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(
        null
    );

    const handleDeleteClick = (id: string) => {
        setAssignmentToDelete(id);
    };

    const confirmDelete = () => {
        if (assignmentToDelete) {
            dispatch(deleteAssignment(assignmentToDelete));
            setAssignmentToDelete(null);
        }
    };

    const cancelDelete = () => {
        setAssignmentToDelete(null);
    };

    return (
        <div id="wd-assignments" className="container-fluid">
            <div>
                <AssignmentControls currentUser={currentUser} />
            </div>
            <div>
                {/* <div id="wd-assignment-control" className="d-flex justify-content-between align-items-center mb-3">
                    <div className="input-group input-group-lg border border-1 rounded-1" style={{ maxWidth: "300px" }}>
                        <span className="input-group-text bg-white border-0"><FaSearch /></span>
                        <input id="wd-search-assignment" type="text" placeholder="Search for Assignments" className="form-control form-control-lg border-0" />
                    </div>

                    <div>
                        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 rounded-1">+ Group</button>
                        <button id="wd-add-assignment" className="btn btn-lg btn-danger rounded-1" onClick={() => navigate(`./createAssigments`)}>+ Assignment</button>
                    </div>
                </div> */}
            </div>

            <div className="assignments-tab">
                <ul id="wd-assignments" className="list-group rounded-0">
                    <li className="wd-assignment-lists list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-start"><BsGripVertical className="me-2 fs-3" /><GoTriangleDown className="me-2 fs-3" /> <b>ASSIGNMENTS</b>
                            <span id="wd-assignments-percentage" className="border border-1 rounded-pill px-3 py-1 me-2 ms-auto">40% of Total
                            </span>
                            <AssignmentsControlButtons />
                            {/* <FiPlus /><IoEllipsisVertical className="fs-4" /> */}
                        </div>


                        <ul className="wd-assignments list-group rounded-0">
                            {assignments.filter((assignments: any) => assignments.course === cid).map((assignments: any) => (
                                <li className="wd-assignments list-group-item p-3 ps-1" style={{ borderLeft: "5px solid green" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center"><BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-2 fs-3 green-icon" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link
                                                to={`/Kanbas/Courses/${cid}/Assignments/${assignments._id}`}
                                                className="wd-assignment-link text-dark no-underline ms-2"
                                            >
                                                <b>{assignments.title}</b>
                                            </Link>
                                            {/* {assignments.lessons && ( */}
                                            {/* <div className="wd-assignment-ddl ms-2">
                                                <span style={{ color: "red" }}>Multiple Modules</span>  |  <b>Not available until </b>May 6 at 11:59pm <b>Due </b>May 13 at 11:59pm | 100 pts
                                            </div> */}
                                            <div className="text-muted mt-1">
                                                <span style={{ color: "red" }}>Multiple Modules</span>{" "}
                                                | <b>Not available until</b>{" "}
                                                {format(new Date(assignments.fromDate), "MMM d")} at
                                                12:00am | <b>Due</b>{" "}
                                                {format(new Date(assignments.dueDate), "MMM d")} at 11:59pm
                                                | {assignments.points} pts
                                            </div>

                                        </div>

                                        {/* <div className="d-flex align-items-center float-end"> */}
                                        <div className="d-flex align-items-center flex-nowrap">
                                            <span className="d-flex align-items-center">
                                                {/* <FaTrash className="text-danger me-2 mb-1" onClick={() => dispatch(deleteAssignment(assignments._id))} /> */}
                                                {/* <div className="d-flex align-items-center flex-nowrap"> */}
                                                {currentUser.role === "FACULTY" ? (
                                                    <FaTrash
                                                        onClick={() => handleDeleteClick(assignments._id)}
                                                        className="text-danger fs-5 me-2"
                                                    />
                                                ) : (
                                                    ""
                                                )}
                                                {assignmentToDelete === assignments._id && (
                                                    <div className="confirm-dialog-overlay">
                                                        <div className="confirm-dialog">
                                                            <p>
                                                                Are you sure you want to remove this assignment?
                                                            </p>
                                                            <button
                                                                onClick={confirmDelete}
                                                                className="btn btn-danger me-2"
                                                            >
                                                                Yes
                                                            </button>
                                                            <button
                                                                onClick={cancelDelete}
                                                                className="btn btn-secondary"
                                                            >
                                                                No
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                                <FaCheckCircle
                                                    className="text-success fs-4" />
                                                <FaCircle className="text-white me-1 fs-6" />
                                                <IoEllipsisVertical className="fs-4" /></span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/* <li className="wd-assignments list-group-item p-3 ps-1" style={{ borderLeft: "5px solid green" }}>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center"><BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-2 fs-3 green-icon" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <a className="wd-assignment-link text-dark no-underline ms-2"
                                            href="#/Kanbas/Courses/1234/Assignments/123">
                                            <b>A1</b>
                                        </a>
                                        <div className="wd-assignment-ddl ms-2">
                                            <span style={{ color: "red" }}>Multiple Modules</span>  |  <b>Not available until </b>May 6 at 11:59pm <b>Due </b>May 13 at 11:59pm | 100 pts
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center float-end">
                                        <span className="d-flex align-items-center"><FaCheckCircle
                                            className="text-success fs-4" />
                                            <FaCircle className="text-white me-1 fs-6" />
                                            <IoEllipsisVertical className="fs-4" /></span>
                                    </div>
                                </div>
                            </li>

                            <li className="wd-assignments list-group-item p-3 ps-1" style={{ borderLeft: "5px solid green" }}>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center"><BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-2 fs-3 green-icon" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <a className="wd-assignment-link text-dark no-underline ms-2"
                                            href="#/Kanbas/Courses/1234/Assignments/123">
                                            <b>A2</b>
                                        </a>
                                        <div className="wd-assignment-ddl ms-2">
                                            <span style={{ color: "red" }}>Multiple Modules</span>  |  <b>Not available until </b>May 13 at 11:59pm <b>Due </b>May 20 at 11:59pm | 100 pts
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center float-end">
                                        <span className="d-flex align-items-center"><FaCheckCircle
                                            className="text-success fs-4" />
                                            <FaCircle className="text-white me-1 fs-6" />
                                            <IoEllipsisVertical className="fs-4" /></span>
                                    </div>
                                </div>
                            </li>
                            <li className="wd-assignments list-group-item p-3 ps-1" style={{ borderLeft: "5px solid green" }}>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center"><BsGripVertical className="me-2 fs-3" /><MdOutlineAssignment className="me-2 fs-3 green-icon" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <a className="wd-assignment-link text-dark no-underline ms-2"
                                            href="#/Kanbas/Courses/1234/Assignments/123">
                                            <b>A3</b>
                                        </a>
                                        <div className="wd-assignment-ddl ms-2">
                                            <span style={{ color: "red" }}>Multiple Modules</span>  |  <b>Not available until </b>May 20 at 11:59pm <b>Due </b>May 27 at 11:59pm | 100 pts
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center float-end">
                                        <span className="d-flex align-items-center"><FaCheckCircle
                                            className="text-success fs-4" />
                                            <FaCircle className="text-white me-1 fs-6" />
                                            <IoEllipsisVertical className="fs-4" /></span>
                                    </div>
                                </div>
                            </li> */}
                    </li>
                </ul>
                {/* </li>
        </ul> */}
            </div >
        </div >
    );
}
