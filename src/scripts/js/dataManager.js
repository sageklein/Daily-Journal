const API = {

    getEntries: () => {
        return fetch("http://localhost:8088/entries")
        .then(entries => entries.json())
    },  
    
    saveJournalEntry: entry => {
    fetch("http://localhost:8088/entries", {method: "POST", headers: 
        {"Content-Type": "application/json"},
			body: JSON.stringify(entry)
		});
    },
    
	deleteEntry: entryId => {
        return fetch(`http://localhost:8088/entries/${entryId}`, 
        {method: "DELETE"})
        .then(response => response.json());
	}
};
export default API;