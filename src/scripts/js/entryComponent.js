const webComponent = {

    makeJournalEntryComponent: (journalEntry) => {
        return `
        <article>
            <p>Date: ${journalEntry.date}</p>
            <p>Concept: ${journalEntry.concept}</p>
            <p>Entry: ${journalEntry.entry}</p>
            <p>Mood: ${journalEntry.mood}</p>  
        </article>
   
     `}
    }