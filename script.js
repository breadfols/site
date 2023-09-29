const inputEl= document.getElementById('input')
const btnEl= document.querySelector('.todo_list_button')
const fieldEl= document.querySelector('.todo_list_field')
function onBtnclick(){
 if(inputEl.value.length){
    const divEl=document.createElement('div')
    divEl.classList.add('todo_list_item')
    
    const checkbox=document.createElement('input')
    checkbox.type='checkbox'

    const text=document.createElement('p')
    text.classList.add('todo_list_item-text')
    text.innerText= inputEl.value

    const img=document.createElement('img')   
    img.src='trash.png'

    divEl.appendChild(checkbox)
    divEl.appendChild(text)
    divEl.appendChild(img)
    fieldEl.appendChild(divEl)
    inputEl.value=''
 }
}
btnEl.addEventListener('click', onBtnclick)