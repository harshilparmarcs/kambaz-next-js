import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap d-flex justify-content-between align-items-center mb-3">
      <div className="input-group" style={{ maxWidth: "300px" }}>
        <span className="input-group-text bg-white">
          <CiSearch />
        </span>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search..." 
          id="wd-search-assignment"
        />
      </div>
      
      <div>
        <Button variant="secondary" size="lg" className="me-2" id="wd-add-assignment-group">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </Button>
        <Button variant="danger" size="lg" id="wd-add-assignment">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
      </div>
    </div>
  );
}