import { NavLink } from "react-router-dom";

export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink
        to="/Kambaz/Courses/1234/Home"
        id="wd-course-home-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "border-start border-4 border-black" : ""} text-danger`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "border-start border-4 border-black" : ""} text-danger`
        }
      >
        Modules
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "border-start border-4 border-black" : ""} text-danger`
        }
      >
        Piazza
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "border-start border-4 border-black" : ""} text-danger`
        }
      >
        Zoom
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/Assignments"
        id="wd-course-assignments-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "border-start border-4 border-black" : ""} text-danger`
        }
      >
        Assignments
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/Quizzes"
        id="wd-course-quizzes-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "border-start border-4 border-black" : ""} text-danger`
        }
      >
        Quizzes
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/Grades"
        id="wd-course-grades-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "border-start border-4 border-black" : ""} text-danger`
        }
      >
        Grades
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/:cid/People"
        id="wd-course-people-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "border-start border-4 border-black" : ""} text-danger`
        }
      >
        People
      </NavLink>
    </div>
  );
}
