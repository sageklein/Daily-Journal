//Represents what entry should look like in HTML

const entryHTML = entry => {
  return `
    <div class="entry" class="card">
    <p>Date: ${entry.date}</p>
    <p>Concept: ${entry.concept}</p>
    <p>Entry: ${entry.entry}</p>
    <p>Mood: ${entry.mood}</p>  
        <button type="button" class="card" class="record-button" id="deleteEntry--${entry.id}">
            Delete Entry
        </button>
        <button type="button" class="card" class="record-button" id="editEntry--${entry.id}">
            Edit Entry
        </button>
    </div>
    `;
};
export default entryHTML;
