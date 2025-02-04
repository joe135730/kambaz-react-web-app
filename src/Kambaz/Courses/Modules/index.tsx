import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
            {/* <ModuleControlButtons /> */}
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course <LessonControlButtons />
            </ListGroup.Item>
            
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>

    // A1 code
    // <div>
    //   {/* Implement Collapse All button, View Progress button, etc. */}
    //   <button>Collapse All</button>
    //   <button>View Progress</button>
    //   <select id="wd-select-one-genre">
    //     <option value="COMEDY">Comedy</option>
    //     <option value="DRAMA">Drama</option>
    //     <option selected value="PUBLISHALL">
    //       {" "}
    //       Publish All
    //     </option>
    //     <option value="FANTASY">Fantasy</option>
    //   </select>
    //   <button>+Module</button>
    //   <ul id="wd-modules">
    //     <li className="wd-module">
    //       <div className="wd-title">
    //         Week 1, Lecture 1- CourseIntroduction, Syllabus, Agenda
    //       </div>
    //       <ul className="wd-lessons">
    //         <li className="wd-lesson">
    //           <span className="wd-title">LEARNING OBJECTIVES</span>
    //           <ul className="wd-content">
    //             <li className="wd-content-item">Introduction to the course</li>
    //             <li className="wd-content-item">
    //               Learn what is Web Development
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="wd-lesson">
    //           <span className="wd-title">READING</span>
    //           <ul>
    //             <li>Full Stack Developer-Chapter 1 - Introduction</li>
    //             <li>Full Stack Developer - Chapter 2 - Creating Us</li>
    //           </ul>
    //         </li>
    //         <li className="wd-lesson">
    //           <span className="wd-title">SLIDES</span>
    //           <ul>
    //             <li>Introduction to Web Development</li>
    //             <li>Creating an HTTP server with Node.js</li>
    //             <li>Creating a React Application</li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </li>
    //     <li className="wd-module">
    //       <div className="wd-title">
    //         Week 1, Lecture 2- Formattring User Interfaces with HTML
    //       </div>
    //       <ul className="wd-lessons">
    //         <li className="wd-lesson">
    //           <span className="wd-title">LEARNING OBJECTIVES</span>
    //           <ul className="wd-content">
    //             <li className="wd-content-item">
    //               Learn how to create user interfaces with HTML
    //             </li>
    //             <li className="wd-content-item">
    //               Deploy the assignment to Netflify
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="wd-lesson">
    //           <span className="wd-title">SLIDES</span>
    //           <ul>
    //             <li>Introduction to HTML and the DOM</li>
    //             <li>Formatting Web content with Headings and</li>
    //             <li>Formatting content with Lists and Tables</li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </li>
    //     <li className="wd-module">
    //       <div className="wd-title">Week 2</div>
    //     </li>
    //     <li className="wd-module">
    //       <div className="wd-title">Week 3</div>
    //     </li>
    //   </ul>
    // </div>
  );
}
