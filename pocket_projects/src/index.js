// import htmlGenerator from "./warmup"; //handles only one export
import {htmlGenerator} from "./warmup"; // lines 2 and 3 handle many exports
// import * as warmUp from "./warmup";

const partyHeader = document.getElementById('party');
htmlGenerator('Party Time.', partyHeader);
