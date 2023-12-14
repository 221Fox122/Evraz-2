const titleDom= document.getElementById('title')
const descriptionDom= document.getElementById('description')
const buttonAdd= document.getElementById('add')
const listDom= document.getElementById('list')
const formDom= document.getElementById('form')

let items=[];

if(titleDom && descriptionDom && buttonAdd &&listDom){
    items=localStorage.getItem('items')
    items=JSON.parse(items)
    if(!items){
        items=[];
    }
    for (const item of items){
        const text = `
            <div class="item-title">${ item.title }</div>
            <div class="item-description">${ item.description }</div>
        `;
        const newDiv = document.createElement('div')
        newDiv.innerHTML = text;
        newDiv.classList.add('item')
        listDom.appendChild(newDiv)
    }
    buttonAdd.addEventListener('click',function (event){
        const title = titleDom.value;
        const description = descriptionDom.value;
        if(!title){
            alert('необходимо написать заголовок');
            return;
        }
        if(!description){
            alert('необходимо написать заголовок');
            return;
        }
        const text = `
            <div class="item-title">${ title }</div>
            <div class="item-description">${ description }</div>
        `;
        const newDiv = document.createElement('div')
        newDiv.innerHTML = text;
        newDiv.classList.add('item')
        listDom.appendChild(newDiv)
        const object={title,description};
        // const object2 =
        items.push(object)
        localStorage.setItem('items', JSON.stringify(items))
        formDom.reset();
        // titleDom.value='';
        // descriptionDom.value='';
    });
}
else{
    console.error("нет такого элемента");
}