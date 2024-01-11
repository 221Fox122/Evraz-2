// const NameDom= document.getElementById('Name')
// const KategorDom= document.getElementById('Kategor')
// const costDom= document.getElementById('cost')
// const countDom= document.getElementById('count')
// const YesDom= document.getElementById('Yes')
// const NoDom= document.getElementById('No')
// const HrupDom= document.getElementById('Hrup')
// const BUDom= document.getElementById('B/U')
//
// let prods= []
//
// if(NameDom && KategorDom && costDom && countDom && YesDom && NoDom   ) {
//     prods = localStorage.getItem('prods')
//     prods = JSON.parse(prods)
//     if (!prods) {
//         prods = [];
//     }
//     for (const prod of prods) {
//         const text = `
//         <div class="prod-Name">${prod.Name}</div>
//         <div class="prod-Kategor">${prod.Kategor}</div>
//         <div class="prod-cost">${prod.cost}</div>
//
//     `;
//         const newDiv = document.createElement('div')
//         newDiv.innerHTML = text;
//         newDiv.classList.add('prod')
//         listDom.appendChild(newDiv)
//     }
//     buttonAdd.addEventListener('click',function (event){
//         const  = titleDom.value;
//         const description = descriptionDom.value;
//         if(!title){
//             alert('необходимо написать заголовок');
//             return;
//         }
//         if(!description){
//             alert('необходимо написать заголовок');
//             return;
//         }
//         const text = `
//             <div class="prod-title">${ title }</div>
//             <div class="prod-description">${ description }</div>
//         `;
//         const newDiv = document.createElement('div')
//         newDiv.innerHTML = text;
//         newDiv.classList.add('prod')
//         listDom.appendChild(newDiv)
//         const object={title,description};
//         // const object2 =
//         prods.push(object)
//         localStorage.setItem('prods', JSON.stringify(prods))
//         formDom.reset();
//         // titleDom.value='';
//         // descriptionDom.value='';
//     });
// }
// else{
//     console.error("нет такого элемента");
// }
//
// if (NoDom.checked) {
//     console.log('Скидки нет')
// }