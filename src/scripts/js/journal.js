import createNewEntry from "./createEntry.js";
import API from "./dataManager.js";
import injectDOM from "./entryDOM.js";

// This makes sure we have donuts when the page loads!
API.getEntries().then((allEntries) => {
    allEntries.forEach(entry => {
        injectDOM.addEntryToDOM(entry)
    })
})
// Event listener for the 'create new entry' button
document.querySelector("#entry-btn").addEventListener("click", () => {
    // 1. needs to get values of the inputs
   
    const date = document.querySelector("#date").value
    const concepts = document.querySelector("#concepts").value
    const entry = document.querySelector("#entry").value
    const mood = document.querySelector("#mood").value

    // 2. build entry object
    const newEntryObj = createNewEntry(date, concepts, entry, mood)
    
    // // 4. clear journal-container before adding new donut
    // document.querySelector("#entry--container").innerHTML = "";

    // 3. clear inputs
    document.querySelector("#entry-btn").value = "";

    // 5. I need to save entry to the json server
    API.getEntries().then(data => injectDOM.addEntryToDOM((data)));

    // 4. clear inputs
    document.querySelector("#date, #concepts, #entry,  #mood").value = "";

    // 6. I need to save Entry to the DOM
    API.getEntry(newEntryObj).then(() => {

   
           // 6. get all the entries again
           API.getEntry().then((allEntry) => {
               allEntry.forEach(entry => {
                   // 7. needs to send entry to DOM
                   addDEntryToDOM(entry)
               })
           })
   
       })
    })

/*
Listen for delete buttons and then get the id value of the donut from the button id.
*/
const container = document.querySelector("#entry--container").addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteEntry--")) {
         // 1. Extract entry id from the button's id attribute
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
