const myForm = document.querySelector('#my-form');
const expenceAmount = document.querySelector('#expenceAmount');
const description = document.querySelector('#description');
const category = document.querySelector('#category');
const userList = document.querySelector('#users');
var btnEdit = document.getElementById('btn');





myForm.addEventListener('submit', onSubmit)

function onSubmit(e) 
{
    e.preventDefault();

    
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`$${expenceAmount.value} - ${description.value} - ${category.value}  `));
        userList.appendChild(li);



        
        var deleteBtn = document.createElement('button');
       
        deleteBtn.className='btn btn-outline-danger btn-sm'
        deleteBtn.appendChild(document.createTextNode("Delete"));
       
        li.appendChild(deleteBtn) 
        
        userList.appendChild(li);


        
        var editbtn = document.createElement('button');
        
        
        editbtn.className='btn btn-outline-info btn-sm float-right'
        editbtn.appendChild(document.createTextNode("Edit"));
        
        li.appendChild(editbtn)
       
        userList.appendChild(li);


        



        
        let data = { expenceAmount: expenceAmount.value, description:description.value, category:category.value };
        let key=expenceAmount.value
        
        localStorage.setItem(key, JSON.stringify(data));
        //sessionStorage.setItem('formData', data);
       



        // Clear fields
        expenceAmount.value="";
        description.value="";
        category.value=""


        deleteBtn.addEventListener('click', () => {
            
           
            localStorage.removeItem(key);
            li.remove();
          });


          editbtn.addEventListener('click', () => {
             
            localStorage.removeItem(key);
            li.remove();

            
            expenceAmount.value = data.expenceAmount;
            description.value = data.description;
            category.value=data.category
            

          });
        
      
}







