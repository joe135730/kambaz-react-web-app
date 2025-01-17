export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <label htmlFor="wd-name">Assignment Name</label> <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      {/* Description */}
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netfly. The landing page should include
        the following: Your full name and section Links to the Kanbas
        application Links to all relevant source code repositories The Kanbas
        application should include a link to navigate back to the landing page.
      </textarea>

      <table>
        {/* Points */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        {/* Assignment Griup */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Assignment Group</label>
          </td>
          <td>
            <select id="wd-select-one-genre">
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option selected value="ASSIGNMENTS">
                {" "}
                ASSIGNMENTS
              </option>
              <option value="FANTASY">Fantasy</option>
            </select>
          </td>
        </tr>
        <br />
        {/* Display Grade as */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Display Grade as</label>
          </td>
          <td>
            <select id="wd-select-one-genre">
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option selected value="PERCENTAGE">
                {" "}
                Percentage
              </option>
              <option value="FANTASY">Fantasy</option>
            </select>
          </td>
        </tr>
        <br />
        {/* Submission Type */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Submission Type</label>
          </td>
          <td>
            <select id="wd-select-one-genre">
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option selected value="ONLINE">
                {" "}
                Online
              </option>
              <option value="FANTASY">Fantasy</option>
            </select>
          </td>
        </tr>
        <br />
        {/* Online Entry Options */}
        <tr>
          <td></td>
          <td>
            <label>Online Entry Options</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-chkbox-textEntry"
            />
            <label htmlFor="wd-chkbox-comedy">Text Entry</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-chkbox-websiteURL"
            />
            <label htmlFor="wd-chkbox-drama">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-chkbox-mediaRecordings"
            />
            <label htmlFor="wd-chkbox-scifi">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-chkbox-studentAnnotation"
            />
            <label htmlFor="wd-chkbox-fantasy">Student Annotation</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-chkbox-fileUploads"
            />
            <label htmlFor="wd-chkbox-fantasy">File Uploads</label>
          </td>
        </tr>
        <br />
        {/* Assign Assign to */}
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-points">Assign Assign to</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input id="wd-assign" value="Everyone" />
          </td>
        </tr>
        <br />
        {/* Due */}
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-points">Due</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="date" value="2000-01-21" id="wd-text-fields-dueDate" />
          </td>
        </tr>
        <br />
        {/* Available from, Until*/}
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-availableFrom">Available from</label>
          </td>
          <td>
            <label htmlFor="wd-availableFrom">Until</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="date" value="2000-01-21" id="wd-text-fields-dueDate" />
          </td>
          <td>
            <input type="date" value="2000-01-21" id="wd-text-fields-dueDate" />
          </td>
        </tr>
      </table>
      <hr />
      <div style={{ textAlign: "right" }}>
        <button>Cancel</button>
        <button style={{ marginLeft: "10px" }}>Save</button>
      </div>
    </div>
  );
}
