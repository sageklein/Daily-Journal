/*
  Represents what entry should look like in HTML
*/

const entryHTML = (entry) => {
    return `
    <div class="donut">
    <p>Date: ${entry.date}</p>
    <p>Concept: ${entry.concept}</p>
    <p>Entry: ${entry.entry}</p>
    <p>Mood: ${entry.mood}</p>  
        <button type="button" id="deleteEntry--${entry.id}">
            Delete Entry
        </button>
        <button type="button" id="editEntry--${entry.id}">
            Edit Entry
        </button>
    </div>
    `
}

export default entryHTML