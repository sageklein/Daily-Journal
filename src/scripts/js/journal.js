import createNewEntry from "./createEntry.js";
import API from "./dataManager.js";
import addEntryToDOM from "./entryDOM.js";

// This makes sure there are entries when the page loads!
API.entries().then((allEntries) => {
    allEntries.forEach(entry => {
        addEntryToDOM(entry)
    })
})

// Event listener for the 'create new entry' button
document.querySelector("#entry-btn").addEventListener("click", () => {

    // 2. build entry object
    const newEntryObj = createNewEntry(date, concepts, entry, mood)
 
    // 3. clear inputs
    document.querySelector("#entry-input").value = "";

    // 4. clear journal-container before adding new donut
    document.querySelector("#entry--container").innerHTML = "";

    // 5. I need to save entry to the json I HAVE TWO????
    API.createEntry().then(data => injectDOM.addToDOM(data))

    // 5. I need to save entry to the json
    API.createEntry(newEntryObj).then(() => {


        // 6. get all the entries again
        API.getEntries().then((allEntries) => {
            allEntries.forEach(entry => {
                // 7. needs to send entry to DOM
                addEntryToDOM(entry)
            })
        })

    })
})

/*
Listen for delete buttons and then get the id value of the donut from the button id.
*/
const journalContainer = document.querySelector("#entry--container").addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteEntry--")) {
         // 1. Extract entry id from the button's id attribute
        console.log(event, event.target.id.split("--")[1])
        document.querySelector("#entry--container").innerHTML = "";
        API.deleteEntry(event.target.id.split("--")[1])
        .then(response => {
            // 2. clear journalContainer before adding new entry
            // 3. get all the entries again
            API.getEntries().then((allEntries) => {
                allEntries.forEach(entry => {
                    // 4. send entry to DOM
                    addEntryToDOM(entry)
                })
            })
        })
    }
})
