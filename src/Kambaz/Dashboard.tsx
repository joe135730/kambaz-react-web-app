import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />{" "}
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/src/assets/reactjs.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/2345/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/src/assets/java.png" width={200} />
            <div>
              <h5> CS2345 java </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/2000/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/src/assets/angular.png" width={200} />
            <div>
              <h5> CS2000 Angular </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1500/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/src/assets/python.jpg" width={200} />
            <div>
              <h5> CS1500 Python </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/2200/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/src/assets/c++.png" width={200} />
            <div>
              <h5> CS 2200 C++ </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/2300/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/src/assets/vue.png" width={200} />
            <div>
              <h5> CS 2300 Vue.js </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/2300/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/src/assets/csharp.jpg" width={200} />
            <div>
              <h5> CS 2300 C# </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
