import { FaPlus, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function AssignmentControls({
    currentUser,
}: {
    currentUser: { role: string };
}) {
    const navigate = useNavigate();
    return (
        <div
            id="wd-assignment-controls"
            className="d-flex justify-content-between align-items-center mb-3"
        >
            <div className="input-group input-group-lg" style={{ maxWidth: "300px" }}>
                <span className="input-group-text bg-white border-end-0">
                    <FaSearch />
                </span>
                <input
                    id="wd-search-assignment"
                    className="form-control form-control-lg border-start-0"
                    type="text"
                    placeholder="Search for Assignments"
                />
            </div>
            {currentUser.role === "FACULTY" ? (
                <div>
                    <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 rounded-1">+ Group</button>
                    <button id="wd-add-assignment" className="btn btn-lg btn-danger rounded-1" onClick={() => navigate(`./createAssigments`)}>+ Assignment</button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}