import { NavLink } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <NavLink
                to="/Kambaz/Account/Signin"
                className={({ isActive }) =>
                    `list-group-item border-0 ${isActive ? "border-start border-4 border-black" : ""} text-danger`
                }
            >
                Signin
            </NavLink>
            <NavLink
                to="/Kambaz/Account/Signup"
                className={({ isActive }) =>
                    `list-group-item border-0 ${isActive ? "border-start border-4 border-black" : ""} text-danger`
                }
            >
                Signup
            </NavLink>
            <NavLink
                to="/Kambaz/Account/Profile"
                className={({ isActive }) =>
                    `list-group-item border-0 ${isActive ? "border-start border-4 border-black" : ""} text-danger`
                }
            >
                Profile
            </NavLink>
        </div>
    );
}
