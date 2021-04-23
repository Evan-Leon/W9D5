
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let element = document.createElement("p");
    element.innerText = string;
    if (htmlElement.hasChildNodes()){
        const childs = Array.from(htmlElement.children, (child) => {child.remove();})
       
    }
    htmlElement.append(element);
};

// export default htmlGenerator;




