import { Button, Form, InputGroup} from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function AssignmentsControls() {
  return (
    <div className="d-flex justify-content-between">
      <div className="flex-grow-1"> 
        <InputGroup size="lg" className="mb-3" style={{width:"90%"}}>
          <InputGroup.Text
            id="basic-addon1"
            style={{ backgroundColor: "white"}}
          >
            <HiMagnifyingGlass />
          </InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{
              borderLeft: "none", // Remove border between icon and input
            }}
          />
        </InputGroup>
      </div>
      <div>
        <Button
          variant="danger"
          size="lg"
          className="me-1 float-end"
          id="wd-add-assignment-btn"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </Button>

        <Button
          variant="secondary"
          size="lg"
          className="me-1 float-end"
          id="wd-add-group-btn"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </Button>
      </div>
    </div>
  );
}
