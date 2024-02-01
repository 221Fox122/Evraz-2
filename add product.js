const NameDom= document.getElementById('Name')
const KategorDom= document.getElementById('Kategor')
const costDom= document.getElementById('cost')
const countDom= document.getElementById('count')
const YesDom= document.getElementById('Yes')
const NoDom= document.getElementById('No')
const HrupDom= document.getElementById('Hrup')
const BUDom= document.getElementById('B/U')
const OpisDom= document.getElementById('Opis')
const buttonAdd = document.getElementById('ADD')
const listDom= document.getElementById('list')
let prods= []

if(NameDom && KategorDom && costDom && countDom && YesDom && NoDom && HrupDom && BUDom && OpisDom) {
    prods = localStorage.getItem('prods')
    prods = JSON.parse(prods)
    if (!prods) {
        prods = [];
    }
    for (const prod of prods) {
        const text = `
        <div class="prod-Name">${prod.Name}</div>
        <div class="prod-prop">${prod.prop}</div>
        <div class="prod-Kategor">${prod.Kategor}</div>
        <div class="prod-cost">${prod.Cost}</div>
        <div class="prod-Count">${prod.Count}</div>
        

    `;
        const newDiv = document.createElement('div')
        newDiv.innerHTML = text;
        newDiv.classList.add('prod')
        listDom.appendChild(newDiv)
    }
    buttonAdd.addEventListener('click',function (event){
        const Name = NameDom.value;
        const Kategor = KategorDom.value;
        const Cost = costDom.value;
        const Count = countDom.value;
        // const Yes = YesDom.value
        // const No = NoDom.value
        const Hrup = HrupDom.value
        const BU = BUDom.value
        const Opis = OpisDom.value


        if(!Name){
            alert('необходимо написать название');
            return;
        }
        if(!Kategor){
            alert('необходимо написать категорию');
            return;
        }
        if(!Cost){
            alert('необходимо написать стоимость');
            return;
        }
        if(!Count){
            alert('необходимо написать категорию');
            return;
        }
        if (NoDom.checked) {
            sell=('Скидки нет')
        }
        else{
            sell=('Скидка есть')
        }
        if (BUDom.checked && HrupDom.checked){
            Osob=(BU + ', ' + Hrup)
        }
        else if (BUDom.checked){
            Osob=(BU)
        }
        else{
            Osob=(Hrup)
        }
        if(!Opis){
            alert('необходимо написать описание');
            return;
        }
        prop = (' ')
        const text = `
            <div class="prod-Name">${ Name }</div>
            <div class="prod-prop">${ prop }</div>
            <div class="prod-Kategor">${ Kategor }</div>
            <div class="prod-Cost">${ Cost }</div>
            <div class="prod-Count">${ Count }</div>
            <div class="prod-sell">${ sell }</div>
            <div class="prod-osob">${ Osob }</div>
            <div class="prod-Opis">${ Opis }</div>
            
        `;
        const newDiv = document.createElement('div')
        newDiv.innerHTML = text;
        newDiv.classList.add('prod')
        listDom.appendChild(newDiv)
        const object={Name,Kategor,};
        // const object2 =
        prods.push(object)
        localStorage.setItem('prods', JSON.stringify(prods))
        formDom.reset();
        // titleDom.value='';
        // descriptionDom.value='';
    });
}
else{
    console.error("нет такого элемента");
}
//
// if (NoDom.checked) {
//     console.log('Скидки нет')
// }
