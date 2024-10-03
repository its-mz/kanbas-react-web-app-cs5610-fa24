import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input id="wd-username" value="" placeholder="username" className="form-control mb-2"/>
            <input id="wd-password" value="" placeholder="password"
                type="password" className="form-control mb-2"/>
            <input id="wd-firstname" value="" placeholder="First Name" className="form-control mb-2"/>
            <input id="wd-lastname" value="" placeholder="Last Name" className="form-control mb-2"/>
            <input id="wd-dob" defaultValue="2000-01-01" type="date" className="form-control mb-2"/>
            <input id="wd-email" value="" placeholder="E-mail" type="email" className="form-control mb-2"/>
            {/* <select id="wd-role">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select><br /> */}
            <input id="wd-email" value="" placeholder="User" type="email" className="form-control mb-2"/>
            <Link to="/Kanbas/Account/Signin" className="btn btn-signout w-100">Sign out</Link>
        </div>
    );
}
