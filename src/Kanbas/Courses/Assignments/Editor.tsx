export default function AssignmentEditor() {
    return (
        <div className="d-flex">
            <div id="wd-assignments-editor">
                <label htmlFor="wd-name">Assignment Name</label><br />
                <br></br>
                <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
                <textarea id="wd-description" cols={35} rows={10}>
                    The assignment is available online Submit a link to the landing page of your web application running on Netlify.
                </textarea>
                <br />
                <br></br>
                <table>
                    <tbody>
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="wd-points">Points</label>
                            </td>
                            <td>
                                <input id="wd-points" value={100} />
                            </td>
                        </tr>
                        <br></br>
                        {/* Complete on your own */}
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="wd-group">Assignment Group</label>
                            </td>
                            <select id="wd-group">
                                <option value="ASSIGNMENT">ASSIGNMENTS</option>
                            </select>

                        </tr>
                        <br></br>
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="wd-display-grade-as">Display grade as</label>
                            </td>
                            <select>
                                <option>Percentage</option>
                            </select>
                        </tr>
                        <br></br>
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="wd-submission-type">Submission Type</label>
                            </td>
                            <select>
                                <option>Online</option>
                            </select>
                            <br></br>
                            <br></br>
                            <label>Online Entry Options</label><br />

                            <input type="checkbox" name="wd-text-entry" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label><br />

                            <input type="checkbox" name="wd-website-url" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label><br />

                            <input type="checkbox" name="wd-media-recordings" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordingsi">Media Recordings</label><br />

                            <input type="checkbox" name="wd-student-annotation" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                            <input type="checkbox" name="wd-file-upload" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label>
                        </tr>
                        <br></br>
                        <tr>
                            <td align="right" valign="top">Assign</td>
                            <td>
                                <label id="wd-assign-to">Assign to</label><br></br>
                                <input type="text" id="wd-assign-to" placeholder="Everyone" value="Everyone"></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td align="right" valign="top"></td>
                            <td>
                                <label id="wd-due-date">Due</label><br></br>
                                <input id="wd-due-date" defaultValue="2024-09-18" type="date" /><br />
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td align="right" valign="top"></td>
                            <label id="wd-available-from">Available from&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <label id="wd-available-until">Until</label><br></br>
                            <input id="wd-available-from" defaultValue="2024-09-18" type="date" />
                            <input id="wd-available-until" defaultValue="2024-09-18" type="date"></input><br />
                        </tr>
                        <br></br>
                        <tr>
                            <td colSpan={2}><hr /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td align="right" valign="top">
                                <button>Cancel</button>
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </div>
    );
}
