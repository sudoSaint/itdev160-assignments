var messages = [];

function Message(type, user, text) {
    this.type = type;
    this.user = user;
    this.text = text;
}

function addMessage(event) {
  var user, type, className;
  var messageInput = document.getElementById('message-input');
  var messagesContainerEl = document.getElementById('message-container');

  switch (event.target.id) {
    case 'send-button':
      user = 'Mike';
      type = 'out';
      className = 'out-message';
      break;
    case 'reply-button':
      user = 'Joe';
      type = 'in';
      className = 'in-message';
      break;
    default:
      user = 'unknown';
      type = 'error';
      className = 'error-message';
  }
  console.log(type);

  //Create new message.
  if (messageInput.value != '') {
    //Construct message and add to collection
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    //create element
    var messageText = document.createTextNode(message.text);
    var messageSpanEl = document.createElement('span');
    var messageDivEl = document.createElement('div');

    messageSpanEl.appendChild(messageText);
    messageDivEl.appendChild(messageSpanEl);
    messageDivEl.className = className;

    // Add to DOM.
    messagesContainerEl.appendChild(messageDivEl);
  }
}

var init = function() {
  // Wire event handlers
  document.getElementById('send-button').onclick = addMessage;

  document.getElementById('reply-button').onclick = addMessage;
}

init();
