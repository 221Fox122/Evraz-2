const answer=document.getElementById('answer')
const input=document.getElementById('input')
const button=document.getElementById('button')
const body=document.getElementById('body')


if (answer && input && button) {
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target)
        console.log(event.target.innerText)
    });

// body.addEventListener('click', function (event)
// {
//         console.log(event);
//         console.log(event.target)
//         console.log(event.target.innerText)
//     });}
else{console.error('нет такого поля')}
