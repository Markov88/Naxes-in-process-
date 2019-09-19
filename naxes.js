const btn = document.getElementById('send')
const nameInput = document.querySelector('#name')
const email = document.getElementById('#email')
const phoneNum = document.querySelector('#tel')

btn.addEventListener("click", function validateForm (e) {
    e.preventDefault()
    validateName(nameInput.value)
    validatePhone(phoneNum)
})

function validateName (nameInput) {
    let fullNameArr = nameInput.split('')
    const space = ' '
    let firstName = ''
    if (fullNameArr.includes(space)) {
        for (let i = 0; i < fullNameArr.length; i++) {
            if (!firstName.includes(space)) {
                firstName += fullNameArr[i]
            }
        }
    }
    firstName = fullNameArr.splice(0, firstName.length)
    const lastName = fullNameArr
    if (firstName.length > 3 && firstName.length <= 21 && lastName.length >= 3 && lastName.length <= 20 && lastName.includes(space) === false) {
        console.log(firstName.join(''))
        console.log(lastName.join(''))
        return true
    } else {

        alert('Invalid Name')
        document.querySelector('#name').value = ''
        document.myForm.Fullname.focus()
        return false
    }
}

function validatePhone (tel) {

    let inputTel = tel.value.split('')
    if (inputTel.every((e) => Number(e) === +e) && inputTel.length >= 5 && inputTel[0] == 0) {
        console.log('correct phohe number')
        return true
    } else {
        alert('Incorect phone number!Phone number should be field with min 5 digits and it should contain only numbvers and start with 0.')
        document.querySelector('#tel').value = ''
        return false
    }
}









