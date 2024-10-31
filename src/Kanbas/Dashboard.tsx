import { Link } from "react-router-dom";
import './styles.css';
import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";
import { addEnrollment, deleteEnrollment } from "./reducer";
import { useState } from "react";

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: (_id: string) => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

    const dispatch = useDispatch();
    const [showEnroll, setShowEnroll] = useState(false);

    const isEnrolled = (courseID: string): boolean =>
        enrollments.some((enrollment: { user: string; course: string }) =>
            enrollment.user === currentUser._id && enrollment.course === courseID
        );


    return (
        <div id="wd-dashboard" className="container-fluid">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {currentUser.role === "FACULTY" ? (
                <>
                    <h5>
                        New Course
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={() => {
                                const _id = new Date().getTime().toString();
                                addNewCourse(_id);
                                dispatch(
                                    addEnrollment({
                                        user: currentUser._id,
                                        course: _id,
                                    })
                                );
                            }}
                        >
                            Add
                        </button>
                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={updateCourse}
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                    </h5>
                    <br />
                    <input
                        value={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <textarea
                        value={course.description}
                        className="form-control"
                        onChange={(e) =>
                            setCourse({ ...course, description: e.target.value })
                        }
                    />
                    <hr />
                </>
            ) : (
                <button
                    className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => setShowEnroll((showEnroll) => !showEnroll)}
                >
                    Enrollments
                </button>
            )}
            {showEnroll ? (
                <h2 id="wd-dashboard-published">
                    Published Courses ({courses.length})
                    <hr />
                </h2>
            ) : currentUser.role === "FACULTY" ? (
                <>
                    <h2 id="wd-dashboard-published">
                        Published Courses ({courses.length})
                        <hr />
                    </h2>
                </>
            ) : (
                <h2 id="wd-dashboard-enrolled">
                    Enrolled Courses
                    <hr />
                </h2>
            )}
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {currentUser.role === "FACULTY"
                        ?
                        courses.map((course) => (
                            <div
                                className="wd-dashboard-course col"
                                style={{ width: "300px" }}
                                key={course._id}
                            >
                                <div className="card rounded-3 overflow-hidden">
                                    <div>
                                        <Link
                                            to={`/Kanbas/Courses/${course._id}/Home`}
                                            className="wd-dashboard-course-link text-decoration-none text-dark"
                                        >
                                            <img src={`/images/${course._id}.png`} width="100%" height={160} />
                                            <div className="card-body">
                                                <h5 className="wd-dashboard-course-title card-title text-primary">
                                                    {course.name}
                                                </h5>
                                                <p
                                                    className="wd-dashboard-course-description card-text overflow-y-hidden"
                                                    style={{ maxHeight: 100 }}
                                                >
                                                    {course.description}
                                                </p>
                                            </div>
                                            <button className="btn btn-primary ms-2"> Go </button>
                                        </Link>

                                        <button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                                dispatch(
                                                    deleteEnrollment({
                                                        user: currentUser._id,
                                                        course: course._id,
                                                    })
                                                );
                                            }}
                                            className="btn btn-danger float-end me-2 mb-2"
                                            id="wd-delete-course-click"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            id="wd-edit-course-click"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                            className="btn btn-warning float-end me-2 mb-2"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        !showEnroll
                            ?
                            courses
                                .filter((course) =>
                                    enrollments.some(
                                        (enrollment: any) =>
                                            enrollment.user === currentUser._id &&
                                            enrollment.course === course._id
                                    )
                                )
                                .map((course) => (
                                    <div
                                        className="wd-dashboard-course col"
                                        style={{ width: "300px" }}
                                        key={course._id}
                                    >
                                        <div className="card rounded-3 overflow-hidden">
                                            <Link
                                                to={`/Kanbas/Courses/${course._id}/Home`}
                                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                            >
                                                <img src={`/images/${course._id}.png`} width="100%" height={160} />
                                                <div className="card-body">
                                                    <h5 className="wd-dashboard-course-title card-title text-primary">
                                                        {course.name}
                                                    </h5>
                                                    <p
                                                        className="wd-dashboard-course-description card-text overflow-y-hidden"
                                                        style={{ maxHeight: 100 }}
                                                    >
                                                        {course.description}
                                                    </p>
                                                    <button className="btn btn-primary"> Go </button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            :
                            courses.map((course) => (
                                <div
                                    className="wd-dashboard-course col"
                                    style={{ width: "300px" }}
                                    key={course._id}
                                >
                                    <div className="card rounded-3 overflow-hidden">
                                        <div>
                                            {isEnrolled(course._id) ? (
                                                <Link
                                                    to={`/Kanbas/Courses/${course._id}/Home`}
                                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                                >
                                                    <img src={`/images/${course._id}.png`} width="100%" height={160} />
                                                    <div className="card-body">
                                                        <h5 className="wd-dashboard-course-title card-title text-primary">
                                                            {course.name}
                                                        </h5>
                                                        <p
                                                            className="wd-dashboard-course-description card-text overflow-y-hidden"
                                                            style={{ maxHeight: 100 }}
                                                        >
                                                            {course.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ) : (
                                                <div className="wd-dashboard-course-link text-dark">
                                                    <img src={`/images/${course._id}.png`} width="100%" height={160} />
                                                    <div className="card-body">
                                                        <h5 className="wd-dashboard-course-title card-title text-primary">
                                                            {course.name}
                                                        </h5>
                                                        <p
                                                            className="wd-dashboard-course-description card-text overflow-y-hidden"
                                                            style={{ maxHeight: 100 }}
                                                        >
                                                            {course.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                            {isEnrolled(course._id) ? (
                                                <button
                                                    className="btn btn-danger float-end me-2 mb-2"
                                                    id="wd-unenroll-course-click"
                                                    onClick={() =>
                                                        dispatch(
                                                            deleteEnrollment({
                                                                user: currentUser._id,
                                                                course: course._id,
                                                            })
                                                        )
                                                    }
                                                >
                                                    Unenroll
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn btn-success float-end me-2 mb-2"
                                                    id="wd-enroll-course-click"
                                                    onClick={() =>
                                                        dispatch(
                                                            addEnrollment({
                                                                user: currentUser._id,
                                                                course: course._id,
                                                            })
                                                        )
                                                    }
                                                >
                                                    Enroll
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </div>
    );
}
