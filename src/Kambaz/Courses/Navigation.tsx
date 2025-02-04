import { Link } from "react-router-dom";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kambaz/Courses/1234/Home"
        id="wd-course-home-link"
        className="list-group-item active border border-0"
      >
        Home
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Modules"
        className="list-group-item text-danger border border-0"
        id="wd-course-modules-link"
      >
        Modules
      </Link>
      <Link
        target="_blank"
        to="https://northeastern.instructure.com/courses/206195/external_tools/289"
        className="list-group-item text-danger border border-0"
        id="wd-course-piazza-link"
      >
        Piazza
      </Link>
      <Link
        target="_blank"
        to="https://applications.zoom.us/lti/rich"
        className="list-group-item text-danger border border-0"
        id="wd-course-zoom-link"
      >
        Zoom
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Assignments"
        className="list-group-item text-danger border border-0"
        id="wd-course-quizzes-link"
      >
        Assignments
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Quizzes"
        className="list-group-item text-danger border border-0"
        id="wd-course-assignments-link"
      >
        Quizzes
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Grades"
        className="list-group-item text-danger border border-0"
        id="wd-course-grades-link"
      >
        Grades
      </Link>
      <Link
        to="/Kambaz/Courses/:cid/People"
        className="list-group-item text-danger border border-0"
        id="wd-course-people-link"
      >
        People
      </Link>
    </div>
  );
}
