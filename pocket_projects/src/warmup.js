
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let element = document.createElement("p");
    element.innerText = string;
    htmlElement.append(element);
};

// export default htmlGenerator;




