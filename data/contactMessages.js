const contactMessages = [];

function addMessage(name, email, subject, message) {
  contactMessages.push({ name, email, subject, message, time: new Date() });
}

module.exports = {
    addMessage,
    contactMessages
};