const check_boxes = document.getElementsByClassName('check-box')
const bd = document.body
const dot_buttons = document.getElementsByClassName('dot_button')
const next_step_button = document.getElementsByClassName('next_step_button')[0]
const sections = document.querySelectorAll('section')
const go_back_button = document.getElementsByClassName('go_back_button')[0]
const radio = document.getElementsByClassName('radio')[0]
const selection_items = document.getElementsByClassName('selection-item')
const selections_items = document.getElementsByClassName('selections-item')



next_step_button.addEventListener('click', handleNextStepButtonClicked)
radio.addEventListener('click', handleRadioButtonClicked)
go_back_button.addEventListener('click', handleGoBackBtnClicked)

for (const dot_button of dot_buttons) {
    dot_button.addEventListener('click', handleDotButtonClicked)
}
for (const selection_item of selection_items) {
    selection_item.addEventListener('click', handleSelectionItemClicked)
}
for (const selections_item of selections_items) {
    selections_item.addEventListener('click', handleSelectionsItemClicked)
}

for (const element of check_boxes) {
    element.addEventListener('click', handleCheckBoxClicked)
}

function handleCheckBoxClicked() {
    this.classList.toggle('selected')
    this.parentElement.classList.toggle('selected')
}
function handleRadioButtonClicked() {
    for (const element of document.getElementsByClassName('price')) {
        element.classList.toggle('hidden')
    }
    radio.classList.toggle('switched')
}

function handleSelectionItemClicked() {
    unselectAll(selection_items)
    this.classList.toggle('selected')
}

function handleSelectionsItemClicked() {
    this.classList.toggle('selected')
    this.querySelector('.check-box').click()
}

function handleDotButtonClicked(event) {
    document.querySelector('footer').style.visibility = 'visible'

    if (this.textContent == '4') {
        next_step_button.classList.add('confirm_state')
        next_step_button.textContent = 'Confirm'
    }

    else {
        next_step_button.textContent = 'Next Step'
        next_step_button.classList.remove('confirm_state')

    }

    if (this.textContent == '2' || this.textContent == '3' || this.textContent == '4') {
        go_back_button.classList.add('shown')
    } else {
        go_back_button.classList.remove('shown')
    }

    unselectAll(dot_buttons)
    this.classList.add('selected')
    unselectAll(sections)
    try {
        sections[parseInt(this.textContent) - 1].classList.add('selected')
    } catch (error) {

    }
}

function handleGoBackBtnClicked() {
    let selectedBtn = document.querySelector('.dot_button.selected')
    if (selectedBtn.parentElement.previousElementSibling) {
        selectedBtn.parentElement.previousElementSibling.firstElementChild.click()
    }
}

function handleNextStepButtonClicked(event) {

    let selectedBtn = document.querySelector('.dot_button.selected')
    if (selectedBtn.textContent == '4') {
        unselectAll(sections)
        document.getElementById('finish').classList.add('selected')
        document.querySelector('footer').style.visibility = 'hidden'
        go_back_button.classList.toggle('shown')
    }
    else if (selectedBtn.parentElement.nextElementSibling) {
        selectedBtn.parentElement.nextElementSibling.firstElementChild.click()
    }
}

function unselectAll(elements) {
    for (const element of elements) {
        element.classList.remove('selected')
    }
}