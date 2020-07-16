global.jQuery = require("jquery");
require("bootstrap");
import "bootstrap/dist/css/bootstrap.css";

import "./app.scss";

import React from "react";
import ReactDOM from "react-dom";
/* import Pomodoro from "./components/pomodoro"; */

import BreakTimerModal from "./components/modal";
import Pomodoro from "./components/pomodoro";

const App = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className={"App"}>
            <div className={"App-title"}>
                <h1>{"Pomodoro"}</h1>
            </div>
            <div className={"Timers"}>
                <Pomodoro showModal={setModalShow} />
            </div>

            <BreakTimerModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

/* export default Pomodoro; */

ReactDOM.render(<App />, document.querySelector("#root"));
