//Function that builds the entry
const createEntry = (date, concepts, entry, mood) => {
  const newEntry = {
    date: date,
    concepts: concepts,
    entry: entry,
    mood: mood
  };
  return newEntry;
};

export default createEntry;
