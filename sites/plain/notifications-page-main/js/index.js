const messages = document.getElementsByClassName('messages__message')

setupEvents()


function handleMessageClicked() {
    this.setAttribute('read', 'true')
}


function setupEvents() {
    for (const message of messages) {
        message.addEventListener('click', handleMessageClicked)
    }
}