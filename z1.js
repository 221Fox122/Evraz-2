const SL ={
    'aeioulnstr':1,
    'dg':2,
    'bcmp':3,
    'fhvwy':4,
    'k':5,
    'jx':6,
    'qz':7,
    'авеинорст':1,
    'дклмпу':2,
    'бгёья':3,
    'йы':4,
    'жзхцч':5,
    'шэю':8,
    'фщъ':10
}

let sum =0
let m=[]
const str =''
for (const index in str) {
    m.push(str[index])
}
for (const strel of str) {
    for (const Sl in SL) {
        if (Sl.indexOf(strel)>=0){sum+=SL[Sl]
        }
    }
}
console.log(sum)