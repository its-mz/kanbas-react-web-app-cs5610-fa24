import { useParams } from "react-router";
import * as db from "../../Database";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find(a => a._id === aid && a.course === cid);
    return (
        <div className="flex-fill">
            <div id="wd-assignments-editor" className="container mt-5">
                <form>
                    <div className="mb-3" id="wd-name">
                        <label htmlFor="wd-name">Assignment Name</label>
                        <><input id="wd-name" className="form-control" value={`${assignment && assignment.title}`} /><br /></>
                        
                    </div>

                    <div className="mb-3" id="wd-description">
                        <textarea id="wd-description" className="form-control" rows={10}>
                            The assignment is available online Submit a link to the landing page of your web application running on Netlify.
                        </textarea>
                    </div>
                    <div className="row mb-3" id="wd-points">
                        <div className="col-md-2 d-flex align-items-center justify-content-end">
                            <label htmlFor="wd-points" className="form-label">Points</label>
                        </div>
                        <div className="col-md-10">
                            <input id="wd-points" className="form-control" value={100} />
                        </div>
                    </div>

                    <div className="row mb-3" id="wd-group">
                        <div className="col-md-2 d-flex align-items-center justify-content-end">
                            <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                        </div>
                        <div className="col-md-10">
                            <select id="wd-group" className="form-select">
                                <option value="ASSIGNMENT">ASSIGNMENTS</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3" id="wd-display-grade-as">
                        <div className="col-md-2 d-flex align-items-center justify-content-end">
                            <label htmlFor="wd-display-grade-as">Display grade as</label>
                        </div>
                        <div className="col-md-10">
                            <select id="wd-group" className="form-select">
                                <option value="Percentage">Percentage</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3" id="wd-submission-type">
                        <div className="col-md-2 d-flex align-items-start justify-content-end">
                            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                        </div>

                        <div className="col-md-10 mb-3" style={{ padding: "0 0.75rem" }}>
                            <div className="border p-3 rounded" id="wd-submission-option">
                                <div className="mb-3">
                                    <div>
                                        <select id="wd-group" className="form-select">
                                            <option value="Online">Online</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label pb-3"><b>Online Entry Options</b></label>
                                </div>
                                <div className="form-check mb-4" id="wd-text-entry">
                                    <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                </div>
                                <div className="form-check mb-4" id="wd-website-url">
                                    <input type="checkbox" className="form-check-input" id="wd-website-url" />
                                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                </div>
                                <div className="form-check mb-4" id="wd-media-recordings">
                                    <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                                    <label className="form-check-label" htmlFor="wd-media-recordingsi">Media Recordings</label>
                                </div>
                                <div className="form-check mb-4" id="wd-student-annotation">
                                    <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                </div>
                                <div className="form-check mb-4" id="wd-file-upload">
                                    <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                                    <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3" id="wd-assign-to">
                        <div className="col-md-2 d-flex align-items-start justify-content-end">
                            <label id="wd-assign-to" className="form-label">Assign</label>
                        </div>
                        <div className="col-md-10 mb-3" style={{ padding: "0 0.75rem" }}>

                            <div className="border p-3 rounded" id="wd-assign-to-box">
                                <label id="wd-assign-to" className="form-label"><b>Assign to</b></label>
                                <div className="mb-3" id="wd-everyone">
                                    <input type="text" id="wd-assign-to" className="form-control" placeholder="Everyone" value="Everyone"></input>
                                </div>
                                <div className="row mb-3" id="wd-due">
                                    <div className="col">
                                        <label id="wd-due-date" className="form-label"><b>Due</b></label>
                                        <input id="wd-due-date" className="form-control" placeholder="YYYY-MM-DD" type="date" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label id="wd-available-from" className="form-label"><b>Available from</b></label>
                                        <input id="wd-available-from" className="form-control" defaultValue="YYYY-MM-DD" type="date" />
                                    </div>
                                    <div className="col-md-6">
                                        <label id="wd-available-until" className="form-label"><b>Until</b></label>
                                        <input id="wd-available-until" className="form-control" defaultValue="YYYY-MM-DD" type="date"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-secondary me-2" style={{ width: "100px" }}>Cancel</button>
                        <button type="button" className="btn btn-danger" style={{ width: "100px" }}>Save</button>
                    </div>
                    <tr>
                        <td colSpan={10}><hr /></td>
                    </tr>
                </form>
            </div >
        </div>
    );
}
