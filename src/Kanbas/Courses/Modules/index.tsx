export default function Modules() {
    return (
        <div>
            {/* Implement Collapse All button, View Progress button, etc. */}
            <button>Collapse All</button><button>View Progress</button>
            <select>Publish All
                <option selected value="Publish All">
                    Publish All</option>
            </select>
            <button>+Module</button>

            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Week 2 on developing Kanbas</li>
                                <li className="wd-content-item">Implement Kanbas functions</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 3</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item"> Styling User Interfaces with CSS, Assignment 2</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
