// import htmlGenerator from "./warmup"; //handles only one export
import {htmlGenerator} from "./warmup"; // lines 2 and 3 handle many exports
// import * as warmUp from "./warmup";
import {Clock} from "./clock";

// const partyHeader = document.getElementById('party');
// htmlGenerator('Party Time.', partyHeader);

// const clock = new Clock();
// const clockElement = document.getElementById('clock');
// htmlGenerator(clock, clockElement);

new Clock();
