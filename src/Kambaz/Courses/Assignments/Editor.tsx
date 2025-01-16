export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label> <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netfly. The landing page should include
        the following: Your full name and section Links to the Kanbas
        application Links to all relevant source code repositories The Kanbas
        application should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
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
            <br />
            <br />
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
            <br />
            <br />
            <label htmlFor="wd-points">Assign Assign to</label>
            <br />
            <input id="wd-assign" value="Everyone" />
            <br />
            <br />
            <label htmlFor="wd-points">Due</label>
            <br />
            <input type="date" value="2000-01-21" id="wd-text-fields-dueDate" />
            <br />
            <br />

            <label htmlFor="wd-availableFrom">Available from</label>
            <label htmlFor="wd-availableFrom">Until</label>
            <br />
            <input type="date" value="2000-01-21" id="wd-text-fields-dueDate" />
            <input type="date" value="2000-01-21" id="wd-text-fields-dueDate" />
            <hr />
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
