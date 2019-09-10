const api = {

    getJournalEntry: () => {
        return fetch("http://localhost:3000/entries")
        .then(entries => entries.json())
    },  
    
    saveJournalEntry: entry => {
    fetch("http://localhost:3000/journalArray", {method: "POST", headers: 
        {"Content-Type": "application/json"},
			body: JSON.stringify(entry)
		});
    },
    
	deleteEntry: entryId => {
        return fetch(`http://localhost:3000/journalArray/${entryId}`, 
        {method: "DELETE"})
        .then(response => response.json());
	}
};
export default api;