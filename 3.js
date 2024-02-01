const a= document.getElementById('a')
buttonAdd.addEventListener('click',function (event){
    const a = a.value;
    if (a.value == "Изменить текст"){
        a.value = "Новый текст"
    }
}