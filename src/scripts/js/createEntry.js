//Function that builds the entry
const createEntry = (date, concepts, entry, mood) => {
    const newDonut = {
        date: date,
        concepts: concepts,
        entry: entry,
        mood: mood,
    }
    return newEntry
}

export default createEntry