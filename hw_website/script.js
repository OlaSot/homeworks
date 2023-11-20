// const change_theme_btn = document.createElement('button')
const change_theme_btn = document.querySelector('.changeBtn')

// change_theme_btn.innerText = "change_theme"


// document.body.prepend(change_theme_btn)

// const changeBtn = document.querySelector('.changeBtn')

// changeBtn.append(change_theme_btn)

const toggle = document.querySelector('.toggle')

change_theme_btn.addEventListener('change', () => {
    document.body.classList.toggle('dark_theme')
    localStorage.setItem('theme', document.body.classList)
    localStorage.setItem('switch',toggle.checked)
})

const class_theme = localStorage.getItem('theme')
const toggle_state = localStorage.getItem('toggle')

console.log(class_theme);
 if(class_theme){
  document.body.classList.add(class_theme) 
  toggle.checked = true
 }


const right_div = document.querySelector('.right_side')
const form = document.createElement('form')
const header_wrapper = document.createElement('div')
header_wrapper.classList.add('header_wrapper')

const header = document.createElement('h1')
header.innerText = 'Create account'
const images_div = document.createElement('div')
const img1 = document.createElement('img')
const img2 = document.createElement('img')
const img3 = document.createElement('img')
img1.src = './images/1.png'
img2.src = './images/2.png'
img3.src = './images/3.png'

images_div.append(img1, img2, img3)

header_wrapper.append(header, images_div)

const subtitle = document.createElement('p')
subtitle.innerText = 'Or register using email & password'

const label_name = document.createElement('label')
const name_input = document.createElement('input')
name_input.setAttribute('id', 'name')
name_input.setAttribute('placeholder', 'John rambo')
label_name.classList.add('direction')

label_name.setAttribute('for', 'name')
label_name.innerText = 'Full name'
label_name.append(name_input)

const label_email = document.createElement('label')
const email_input = document.createElement('input')
email_input.setAttribute('id', 'email')
email_input.setAttribute('placeholder', 'hello@hey.com')
label_email.classList.add('direction')


label_email.setAttribute('for', 'email')
label_email.innerText = 'Email address'
label_email.append(email_input)

const label_password = document.createElement('label')
const password_input = document.createElement('input')
password_input.setAttribute('id', 'password')
password_input.setAttribute('placeholder', '••••••••••••')
label_password.classList.add('direction')



label_password.setAttribute('for', 'password')
label_password.innerText = 'Create password'
label_password.append(password_input)

const label_confirm = document.createElement('label')
const confirm_input = document.createElement('input')
confirm_input.setAttribute('id', 'confirm')
confirm_input.setAttribute('placeholder', '••••••••••••')
label_confirm.classList.add('direction')


label_confirm.setAttribute('for', 'confirm')
label_confirm.innerText = 'Confirm password'
label_confirm.append(confirm_input)

const checkbox_input = document.createElement('input')
checkbox_input.setAttribute('id', 'agree')

const checkbox_label = document.createElement('label')
checkbox_label.classList.add('agree')

checkbox_input.setAttribute('type', 'checkbox')

checkbox_label.append(checkbox_input)
checkbox_label.innerHTML = 'I agree to the <a href="">terms</a> & <a href="">privacy policy</a>'
checkbox_label.prepend(checkbox_input)


const btn = document.createElement('button')
btn.innerText = 'Register'
btn.classList.add('register_btn')

btn.addEventListener('click', () => {
    localStorage.setItem('name', name_input.value)
    localStorage.setItem('email', email_input.value)
    localStorage.setItem('password', password_input.value)

})

form.append(header_wrapper, subtitle,label_name, label_email, label_password, label_confirm, checkbox_label, btn )

right_div.append(form)
