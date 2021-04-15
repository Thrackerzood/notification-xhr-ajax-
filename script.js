let login_checked = document.querySelector('.login_check')
const submit = document.querySelector('.submit');
const password_1 = document.querySelector('.password_1');
const password_2 = document.querySelector('.password_2');


submit.addEventListener('click', ()=>{
   if(password_check() == 1){
      request(xhr,requestURL)
   .then(data =>{
      console.log(window.atob(data))
   })
}else{
   login_checked.innerHTML = 'Пароль должен содержать больше 6 символов и букву верхнего регистра';
   login_checked.style = 'color: red;right:120px;max-width: 200px';
}
});
password_1.addEventListener('keyup', password_check);
password_2.addEventListener('keyup', password_check);
const xhr = new XMLHttpRequest();
const requestURL = 'http://localhost/notification/indexphp.php'


function password_check(){
   if(password_1.value === password_2.value){
         if(/([\w]{6}[A-Z]+)/g.test(password_1.value)){
            login_checked.innerHTML = 'Пароль подходящий';
            login_checked.style = 'color: green;right:160px;';
            return 1;
         }else{
            login_checked.innerHTML = 'Пароль должен содержать больше 6 символов и букву верхнего регистра';
            login_checked.style = 'color: red;right:120px;max-width: 200px';
            return 0;
         }
   }
   return 0;
}

function request(xhr,requestURL){
   return new Promise((reserve,reject)=>{
      xhr.onload = function(){
         if(xhr.status >= 400){
            reject(err);
         }else{
            reserve(this.response)
         }
      }
      data = {'key': 'str'}
      xhr.open('POST', requestURL)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify(btoa(password_1.value)))
   })
}