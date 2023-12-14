const a = 'vsim rjn cj,frf cj,frf vsim'
const result ={}
const array =a.split((' '))
for (const string of array) {
    if (result[string]){
        result[string]+=1;
    }
    else {
        result[string] = 1;
    }
}
console.log(result)