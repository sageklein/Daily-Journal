
const injectDOM = {

   addToDOM: (entries) => {
      entries.forEach(entry => {
        const journalContainer = document.querySelector("#journalEntries");
        journalContainer.innerHTML += webComponent.makeJournalEntryComponent(entry);
        })
     } 
}

