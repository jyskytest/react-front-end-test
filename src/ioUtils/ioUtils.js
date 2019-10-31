let contactStore = [];  // mocked list of contacts
let nextContactId = 0;

function randomDelayPromise(data) {
  const delay = Math.floor(Math.random() * 400) + 200;
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
}

export const getContacts = () => contactStore;

export const addContactToDB = async contact => {
  contact.id = ++nextContactId;
  contact.dateCreated = Date.now();
  contact.dateUpdated = Date.now();
  contactStore = [contact, ...contactStore];
  return randomDelayPromise(contactStore);
}

export const deleteContactFromDB = contact => {
  contactStore = contactStore.filter((entry) => contact.id !== entry.id);
}

export const getContactById = (id) => {
  id = parseInt(id);
  const contact = contactStore.filter((contact => contact.id === id));
  if (contact.length > 0) {
    return contact[0]
  }
  return {}
}