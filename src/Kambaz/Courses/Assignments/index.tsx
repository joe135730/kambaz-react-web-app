import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlsButtons from "./AssignmentsControlsButtons";
import { LuNotebookPen } from "react-icons/lu";

export default function Assignments() {
  return (
    <div>
      <AssignmentsControls />
      <ListGroup className="rounded-0" id="wd-modules">
        {/* Tab Title: Assignments control */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS{" "}
            <AssignmentsControlsButtons />
          </div>
          {/* A1 */}
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <LuNotebookPen className="me-2" />
                  <div>
                    <div>
                      <div>
                        <a
                          href="#/Kambaz/Courses/1234/Assignments/123"
                          className="wd-assignment-link fw-bold"
                        >
                          A1
                        </a>{" "}
                      </div>
                      <div>
                        <small className="text-secondary">
                          <span className="text-danger">
                            Multiple Modules |
                          </span>
                          <span className="text-dark fw-bold">
                            {" "}
                            Not available until
                          </span>{" "}
                          May 6 at 12:00am |
                        </small>
                      </div>
                      <div>
                        <small className="text-secondary">
                          <span className="text-dark">Due</span> May 13 at
                          11:59pm | 100 pts
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
            {/* A2 */}
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <LuNotebookPen className="me-2" />
                  <div>
                    <div>
                      <div>
                        <a
                          href="#/Kambaz/Courses/1234/Assignments/123"
                          className="wd-assignment-link fw-bold"
                        >
                          A2
                        </a>{" "}
                      </div>
                      <div>
                        <small className="text-secondary">
                          <span className="text-danger">
                            Multiple Modules |
                          </span>
                          <span className="text-dark fw-bold">
                            {" "}
                            Not available until
                          </span>{" "}
                          May 13 at 12:00am |
                        </small>
                      </div>
                      <div>
                        <small className="text-secondary">
                          <span className="text-dark">Due</span> May 20 at
                          11:59pm | 100 pts
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
            {/* A3 */}
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <LuNotebookPen className="me-2" />
                  <div>
                    <div>
                      <div>
                        <a
                          href="#/Kambaz/Courses/1234/Assignments/123"
                          className="wd-assignment-link fw-bold"
                        >
                          A3
                        </a>{" "}
                      </div>
                      <div>
                        <small className="text-secondary">
                          <span className="text-danger">
                            Multiple Modules |
                          </span>
                          <span className="text-dark fw-bold">
                            {" "}
                            Not available until
                          </span>{" "}
                          May 13 at 12:00am |
                        </small>
                      </div>
                      <div>
                        <small className="text-secondary">
                          <span className="text-dark">Due</span> May 20 at
                          11:59pm | 100 pts
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

{
  /* <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </a>{" "}
          <br />
          Multiple Modules | <b>Not available until</b> May 6 at 12:00am |{" "}
          <b>Due</b> May 13 at 11:59pm |100 pts
        </li>
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </a>{" "}
          <br />
          Multiple Modules | <b>Not available until</b> May 13 at 12:00am |{" "}
          <b>Due</b> May 20 at 11:59pm |100 pts
        </li>
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </a>{" "}
          <br />
          Multiple Modules | <b>Not available until</b> May 20 at 12:00am |{" "}
          <b>Due</b> May 27 at 11:59pm |100 pts
        </li>
      </ul>
    </div>  */
}
