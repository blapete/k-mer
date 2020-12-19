// 4 types of nucleotides  A, C, G, and T

// calculate time to find all possible k-mers for specified length 'lenStr'

const convert = (c) => {
    if (c == 'A') return 'C';
    if (c == 'C') return 'G';
    if (c == 'G') return 'T';
    if (c == 'T') return 'A';
};

let opt = 'ACGT';
let s = '';
let sLast = '';
let lenStr = 13;

for (let i = 0; i < lenStr; i++) {
    s += opt[0];
}

for (let i = 0; i < lenStr; i++) {
    sLast += opt[opt.length - 1];
}

let pos = 0;
let counter = 1;
let changeNext;

console.time('Run')


while (s != sLast) {
    counter += 1
    changeNext = true;
    for (let i = 0; i < lenStr; i++) {
        if (changeNext) {
            if (s[i] == opt[opt.length - 1]) {
                s = s.slice(0, i) + convert(s[i]) + s.slice(i + 1);
                changeNext = true;
            } else {
                s = s.slice(0, i) + convert(s[i]) + s.slice(i + 1);
                break;
            }
        }
    }
}


console.timeEnd('Run')

console.log(`${counter} possible k-mers of length ${lenStr}`);
