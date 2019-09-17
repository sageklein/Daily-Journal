import entryHTML from "./entryHTML.js"

let injectDOM= (entry) => {
            const journalContainer = document.querySelector("#entry--container");
            journalContainer.innerHTML += entryHTML(entry);
    }

export default injectDOM

