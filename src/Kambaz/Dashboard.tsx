import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />{" "}
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "250px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/reactjs.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1234 React JS
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "250px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2000/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/java.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS2345 Java
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "250px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2000/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/angular.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS2000 Angular
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "250px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1500/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/python.jpg"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1500 Python
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "250px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2200/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/c++.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS2200 C++
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "250px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2300/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/vue.png"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS2300 Vue.js
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "250px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2350/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/csharp.jpg"
                  width="100%"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS2350 C#
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>

        {/* A1 code */}
        {/* <div>
          <div className="wd-dashboard-course">
            <Link
              to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link"
            >
              <img src="/images/reactjs.png" width={200} />
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
              <img src="/images/java.png" width={200} />
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
              <img src="/images/angular.png" width={200} />
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
              <img src="/images/python.jpg" width={200} />
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
              <img src="/images/c++.png" width={200} />
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
              <img src="/images/vue.png" width={200} />
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
              <img src="/images/csharp.jpg" width={200} />
              <div>
                <h5> CS 2300 C# </h5>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer{" "}
                </p>
                <button> Go </button>
              </div>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
