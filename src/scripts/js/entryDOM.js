import entryHTML from "./entryHTML.js"

const injectDOM = {
    
    addEntryToDOM: function (entry){
            const journalContainer = document.querySelector("#entry--container");
            journalContainer.innerHTML += entryHTML(entry);
    }
}

export default injectDOM

