const contactMessages = [];

function addMessage(name, email, message) {
  contactMessages.push({ name, email, message, time: new Date() });
}

module.exports = {
    addMessage,
    contactMessages
};