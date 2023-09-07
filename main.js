const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');



let user=[];


myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value==="" || emailInput.value===""){

        msg.classList.add('error');
        msg.innerHTML="Plz enter all fields";

        setTimeout(() => msg.remove(), 5000)
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        



        // Store the data in localStorage or sessionStorage
    let data = { name: nameInput.value, email: emailInput.value };
    let key=nameInput.value
    //user.push(data)
    localStorage.setItem(key, JSON.stringify(data));
    //sessionStorage.setItem('formData', data);
    //console.log(user);



        // Clear fields
        emailInput.value="";
        nameInput.value="";
        
    }
}