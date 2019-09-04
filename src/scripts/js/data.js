const api = {

getJournalEntry: () => {
    return fetch("http://localhost:3000/entries")
    .then(entries => entries.json())
}
}