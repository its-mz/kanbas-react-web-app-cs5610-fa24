import { Link } from "react-router-dom";
import './styles.css';
import * as db from "./Database";

export default function Dashboard() {
    const courses = db.courses;
    return (
        // <div id="wd-dashboard" className="container-fluid">
        //     <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        //     <h2 id="wd-dashboard-published">Published Courses ({courses.length})<hr /></h2>
        //     <div id="wd-dashboard-courses" className="row justify-content-start" style={{ maxWidth: "1200px" }}>
        //         <div className="wd-dashboard-course col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3 mb-4">
        //             <div className="card custom-card rounded-3 overflow-hidden">
        //                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
        //                     to="/Kanbas/Courses/1234/Home">
        //                     <img src="/images/reactjs.jpg" className="card-img-top" alt="Course Image" />
        //                     <div className="card-body">
        //                         <h5 className="wd-dashboard-course-title card-title">
        //                             CS1234 React JS
        //                         </h5>
        //                         <p className="wd-dashboard-course-info card-text">
        //                             Term: Fall, Year: 2024, Section: 001
        //                         </p>
        //                         <button className="btn btn-primary">Go</button>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div id="wd-dashboard-courses" className="row">
        //             <div className="row row-cols-1 row-cols-md-5 g-4">
        //                 {courses.map((course) => (
        //                     <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        //                         <div className="card rounded-3 overflow-hidden">
        //                             <Link to={`/Kanbas/Courses/${course._id}/Home`}
        //                                 className="wd-dashboard-course-link text-decoration-none text-dark" >
        //                                 <img src="/images/reactjs.jpg" width="100%" height={160} />
        //                                 <div className="card-body">
        //                                     <h5 className="wd-dashboard-course-title card-title">
        //                                         {course.name} </h5>
        //                                     <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
        //                                         {course.description} </p>
        //                                     <button className="btn btn-primary"> Go </button>
        //                                 </div>
        //                             </Link>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>


        //         <div className="wd-dashboard-course col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3 mb-4">
        //             <div className="card custom-card rounded-3 overflow-hidden">
        //                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
        //                     to="/Kanbas/Courses/1234/Home">
        //                     <img src="/images/reactjs.jpg" className="card-img-top" alt="Course Image" />
        //                     <div className="card-body">
        //                         <h5 className="wd-dashboard-course-title card-title">
        //                             CS1234 React JS
        //                         </h5>
        //                         <p className="wd-dashboard-course-info card-text">
        //                             Term: Fall, Year: 2024, Section: 001
        //                         </p>
        //                         <button className="btn btn-primary">Go</button>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="wd-dashboard-course col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3 mb-4">
        //             <div className="card custom-card rounded-3 overflow-hidden">
        //                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
        //                     to="/Kanbas/Courses/1234/Home">
        //                     <img src="/images/reactjs.jpg" className="card-img-top" alt="Course Image" />
        //                     <div className="card-body">
        //                         <h5 className="wd-dashboard-course-title card-title">
        //                             CS1234 React JS
        //                         </h5>
        //                         <p className="wd-dashboard-course-info card-text">
        //                             Term: Fall, Year: 2024, Section: 001
        //                         </p>
        //                         <button className="btn btn-primary">Go</button>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="wd-dashboard-course col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3 mb-4">
        //             <div className="card custom-card rounded-3 overflow-hidden">
        //                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
        //                     to="/Kanbas/Courses/1234/Home">
        //                     <img src="/images/reactjs.jpg" className="card-img-top" alt="Course Image" />
        //                     <div className="card-body">
        //                         <h5 className="wd-dashboard-course-title card-title">
        //                             CS1234 React JS
        //                         </h5>
        //                         <p className="wd-dashboard-course-info card-text">
        //                             Term: Fall, Year: 2024, Section: 001
        //                         </p>
        //                         <button className="btn btn-primary">Go</button>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="wd-dashboard-course col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3 mb-4">
        //             <div className="card custom-card rounded-3 overflow-hidden">
        //                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
        //                     to="/Kanbas/Courses/1234/Home">
        //                     <img src="/images/reactjs.jpg" className="card-img-top" alt="Course Image" />
        //                     <div className="card-body">
        //                         <h5 className="wd-dashboard-course-title card-title">
        //                             CS1234 React JS
        //                         </h5>
        //                         <p className="wd-dashboard-course-info card-text">
        //                             Term: Fall, Year: 2024, Section: 001
        //                         </p>
        //                         <button className="btn btn-primary">Go</button>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="wd-dashboard-course col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3 mb-4">
        //             <div className="card custom-card rounded-3 overflow-hidden">
        //                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
        //                     to="/Kanbas/Courses/1234/Home">
        //                     <img src="/images/reactjs.jpg" className="card-img-top" alt="Course Image" />
        //                     <div className="card-body">
        //                         <h5 className="wd-dashboard-course-title card-title">
        //                             CS1234 React JS
        //                         </h5>
        //                         <p className="wd-dashboard-course-info card-text">
        //                             Term: Fall, Year: 2024, Section: 001
        //                         </p>
        //                         <button className="btn btn-primary">Go</button>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="wd-dashboard-course col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3 mb-4">
        //             <div className="card custom-card rounded-3 overflow-hidden">
        //                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
        //                     to="/Kanbas/Courses/1234/Home">
        //                     <img src="/images/reactjs.jpg" className="card-img-top" alt="Course Image" />
        //                     <div className="card-body">
        //                         <h5 className="wd-dashboard-course-title card-title">
        //                             CS1234 React JS
        //                         </h5>
        //                         <p className="wd-dashboard-course-info card-text">
        //                             Term: Fall, Year: 2024, Section: 001
        //                         </p>
        //                         <button className="btn btn-primary">Go</button>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="wd-dashboard-course col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3 mb-4">
        //             <div className="card custom-card rounded-3 overflow-hidden">
        //                 <Link className="wd-dashboard-course-link text-decoration-none text-dark"
        //                     to="/Kanbas/Courses/1234/Home">
        //                     <img src="/images/reactjs.jpg" className="card-img-top" alt="Course Image" />
        //                     <div className="card-body">
        //                         <h5 className="wd-dashboard-course-title card-title">
        //                             CS1234 React JS
        //                         </h5>
        //                         <p className="wd-dashboard-course-info card-text">
        //                             Term: Fall, Year: 2024, Section: 001
        //                         </p>
        //                         <button className="btn btn-primary">Go</button>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name} </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description} </p>
                                        <button className="btn btn-primary"> Go </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
