import Form from "react-bootstrap/Form";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="p-3">
        <Form>
          {/* Assignment Name */}
          <Form.Group>
            <Form.Group className="mb-3 w-lg-75" controlId="formBasicEmail">
              <Form.Label>Assignment Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Assignment Name" />
            </Form.Group>
          </Form.Group>
          {/* Description */}
          <Form.Group
            className="mb-3 w-lg-75"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="The assignment is available online Submit a link to the landing page of your Web application running on Netfly. The landing page should include the following: Your full name and section Links to the Kanbasapplication Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
            />
          </Form.Group>
          {/* Points */}
          <Form.Group className="mb-3 w-lg-75">
            <Form.Group className="d-flex justify-content-end gap-2 ">
              <Form.Label className="mb-0 d-flex align-items-center">
                Points
              </Form.Label>
              <Form.Control
                className="w-65"
                type="text"
                placeholder="Enter Points"
              />
            </Form.Group>
          </Form.Group>
          {/* Assignment Group */}
          <Form.Group className="mb-3 w-lg-75">
            <Form.Group className="d-flex justify-content-end gap-2 ">
              <Form.Label className="mb-0 d-flex align-items-center">
                Assignment Group
              </Form.Label>
              <Form.Select className="w-65" aria-label="Default select example">
                {/* <option>Open this select menu</option> */}
                <option value="1">Assignment</option>
                <option value="2">Quiz</option>
                <option value="3">Exam</option>
                <option value="4">Project</option>
              </Form.Select>
            </Form.Group>
          </Form.Group>
          {/* Display Grade as */}
          <Form.Group className="mb-3 w-lg-75">
            <Form.Group className="d-flex justify-content-end gap-2">
              <Form.Label className="mb-0 d-flex align-items-center">Display Grade as</Form.Label>
              <Form.Select className="w-65" aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">Percentage</option>
                <option value="2">Complete/Incomplete</option>
                <option value="3">Letter Grade</option>
              </Form.Select>
            </Form.Group>
          </Form.Group>
          {/* Submission Type */}
          <Form.Group className="mb-3 w-lg-75">
            <Form.Group className="d-flex justify-content-end gap-2">
              <Form.Label className="mb-0 d-flex align-items-top">Submission Type</Form.Label>
              <div className="border border-dark rounded flex-column w-65 p-4">
                <Form.Select
                  className="mb-3"
                  aria-label="Default select example"
                >
                  <option>Online</option>
                  <option value="1">On Paper</option>
                  <option value="2">No Submission</option>
                </Form.Select>

                <div>
                  <p className="mb-2">Online Entry Options</p>
                  <Form.Check
                    type="checkbox"
                    id="text-entry"
                    label="Text Entry"
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    id="website-url"
                    label="Website URL"
                    className="mb-2"
                    defaultChecked
                  />
                  <Form.Check
                    type="checkbox"
                    id="media-recordings"
                    label="Media Recordings"
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    id="student-annotation"
                    label="Student Annotation"
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    id="file-uploads"
                    label="File Uploads"
                    className="mb-2"
                  />
                </div>
              </div>
            </Form.Group>
          </Form.Group>
          {/* Assign */}
          <Form.Group className="mb-3 w-lg-75">
            <Form.Group className="d-flex justify-content-end gap-2">
              <Form.Label className="mb-0 d-flex align-items-">Assign</Form.Label>
              <div className="border border-dark rounded flex-column w-65 p-4">
                {/* Assign to */}
                <Form.Group className="mb-3">
                  <Form.Label>Assign to</Form.Label>
                  <div className="d-flex align-items-center gap-2">
                    <Form.Control type="text" value="Everyone" readOnly />
                    <button className="btn btn-light border">×</button>
                  </div>
                </Form.Group>

                {/* Due Date */}
                <Form.Group className="mb-3">
                  <Form.Label>Due</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    defaultValue="2024-05-13T23:59"
                  />
                </Form.Group>

                {/* Available From/Until */}
                <div className="d-flex flex-column flex-lg-row gap-3">
                  <Form.Group className="flex-grow-1 flex-lg-shrink-1">
                    <Form.Label>Available from</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      defaultValue="2024-05-06T12:00"
                      className="w-100"
                    />
                  </Form.Group>
                  <Form.Group className="flex-grow-1 flex-lg-shrink-1">
                    <Form.Label>Until</Form.Label>
                    <Form.Control 
                      type="datetime-local" 
                      className="w-100"
                    />
                  </Form.Group>
                </div>
              </div>
            </Form.Group>
          </Form.Group>
          <hr className="w-75 my-4" />
          <div className="w-75 d-flex justify-content-end gap-2">
            <button className="btn btn-light border">Cancel</button>
            <button className="btn btn-danger">Save</button>
          </div>
        </Form>
      </div>
    </div>
  );
}
