const fullNameRegEx = /^[а-яА-ЯіїєІЇЄҐґ]+ [а-яА-ЯіїєІЇЄҐґ]\. [а-яА-ЯіїєІЇЄҐґ]\.$/;
const idCardRegEx = /^[а-яА-ЯіїєІЇЄҐґ]{2} №[0-9]{6}$/;
const facultyRegEx = /^[а-яА-ЯіїєІЇЄҐґ]{4}$/;
const dateOfBirthRegEx = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;
const addressRegEx = /^м\. [а-яА-ЯіїєІЇЄҐґ]+$/;
function isValid(regEx, element, msg, error_display){
    if(regEx.test(element.value)){
        error_display.innerHTML = ''
        return true;
    }
    else{
        error_display.innerHTML = 'дані мають бути записані у наступній формі: ' + msg;
        return false;
    }
}

const form = document.getElementById('form')

const full_name = document.getElementById('full_name')
const id_card = document.getElementById('id_card')
const faculty = document.getElementById('faculty')
const date_of_birth = document.getElementById('date_of_birth')
const address = document.getElementById('address')

const error_full_name = document.getElementById('error_full_name')
const error_id_card = document.getElementById('error_id_card')
const error_faculty = document.getElementById('error_faculty')
const error_date_of_birth = document.getElementById('error_date')
const error_address = document.getElementById('error_address')


form.addEventListener('submit', (e) =>{
    const fields = [full_name, id_card, faculty, date_of_birth, address]
    const regExpressions = [fullNameRegEx, idCardRegEx, facultyRegEx, dateOfBirthRegEx, addressRegEx]
    const messages = ['ТТТТТТ Т.Т.', 'ТТ №ЧЧЧЧЧЧ', 'ТТТТ', 'ЧЧ.ЧЧ.ЧЧЧЧ', 'м. ЧЧЧЧЧЧ']
    const error_displays = [error_full_name, error_id_card, error_faculty, error_date_of_birth, error_address]

    for (let i = 0; i < fields.length; i++) {
        if (!isValid(regExpressions[i], fields[i], messages[i], error_displays[i])) {
            e.preventDefault();
        }
    }

})

const tab1 = document.getElementById('task1')
const tab2 = document.getElementById('task2')
const task1Display = document.getElementById('task1-display')
const task2Display = document.getElementById('task2-display')
tab1.addEventListener('click', ()=>{
    tab1.className = "active-tab"
    tab2.className = ""
    task1Display.style.display = 'block'
    task2Display.style.display = 'none'

})
tab2.addEventListener('click', ()=>{
    tab2.className = "active-tab"
    tab1.className = ""
    task1Display.style.display = 'none'
    task2Display.style.display = 'block'

})

function generateRandomColor(){
    return Math.floor(Math.random()*16777215).toString(16);

}
const variantCell = document.getElementById('variant-cell')
const colorPicker = document.getElementById('color-picker')
const changeCell = document.getElementById('change-cell')
variantCell.addEventListener('mouseover', (e)=>{
    variantCell.style.backgroundColor = "#" + generateRandomColor();
})
variantCell.addEventListener('click', (e)=>{
    variantCell.style.backgroundColor = colorPicker.value;
})
variantCell.addEventListener('dblclick', (e)=>{
    variantCell.style.backgroundColor = "#" + generateRandomColor();
    changeCell.style.backgroundColor = "#" + generateRandomColor();
})