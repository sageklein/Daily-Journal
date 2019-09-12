import entryHTML from "./entryHTML.js"

/*
  Put entries on the DOM
*/

const entryDOM = (entryObj) => {
    document.querySelector("#entry--container").innerHTML += entryHTML(entryObj)
}

export default entryDOM