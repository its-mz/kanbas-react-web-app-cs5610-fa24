import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    // const links = [
    //     { label: "Home", path: "/Kanbas/Courses/1234/Home" },
    //     { label: "Modules", path: "/Kanbas/Courses/1234/Modules" },
    //     { label: "Piazza", path: "/Kanbas/Courses/1234/Piazza" },
    //     { label: "Zoom", path: "/Kanbas/Courses/1234/Zoom" },
    //     { label: "Assignments", path: "/Kanbas/Courses/1234/Assignments" },
    //     { label: "Quizzes", path: "/Kanbas/Courses/1234/Quizzes" },
    //     { label: "Grades", path: "/Kanbas/Courses/1234/Grades" },
    //     { label: "People", path: "/Kanbas/Courses/1234/People" },
    // ];

    return (
        <div className="wd list-group fs-5 rounded-0" id="wd-courses-navigation">
            {/* <Link id="wd-course-home-link" to={`/Kanbas/Courses/${cid}/Home`} className="list-group-item active border border-0">Home</Link>
            <Link id="wd-course-modules-link" to={`/Kanbas/Courses/${cid}/Modules`} className="list-group-item text-danger border border-0">Modules
            </Link>
            <Link id="wd-course-piazza-link" to={`/Kanbas/Courses/${cid}/Piazza`} className="list-group-item text-danger border border-0">Piazza</Link>
            <Link id="wd-course-zoom-link" to={`/Kanbas/Courses/${cid}/Zoom`} className="list-group-item text-danger border border-0">Zoom</Link>
            <Link id="wd-course-quizzes-link" to={`/Kanbas/Courses/${cid}/Assignments`} className="list-group-item text-danger border border-0">
                Assignments</Link>
            <Link id="wd-course-assignments-link" to={`/Kanbas/Courses/${cid}/Quizzes`} className="list-group-item text-danger border border-0">Quizzes
            </Link>
            <Link id="wd-course-grades-link" to={`/Kanbas/Courses/${cid}/Grades`} className="list-group-item text-danger border border-0">Grades</Link>
            <Link id="wd-course-people-link" to={`/Kanbas/Courses/${cid}/People`} className="list-group-item text-danger border border-0">People</Link> */}

            {links.map((link) => (
                <Link key={link} className={`list-group-item border-0 text-danger ${pathname.includes(link) ? "active text-black" : ""}`} id={`wd-course-${link}-link`} to={`/Kanbas/Courses/${cid}/${link}`}>{link}</Link>)
            )}
        </div>
    );
}
