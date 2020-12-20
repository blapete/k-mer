const KMER = 1;

const convert = (c) => {
    if (c == 'A') return 'C';
    if (c == 'C') return 'G';
    if (c == 'G') return 'T';
    if (c == 'T') return 'A';
};

const base = 'ACGT';
let x = '';
let y = '';
let z;

z = 0;
do {
    z += 1;
    x += base[0];
} while (z < KMER);



z = 0;
do {
    z += 1;
    y += base[base.length - 1];
} while (z < KMER);


let counter = 1;


console.time('Run');


while (x != y) {
    counter++;
    console.log(x);
    for (let i = 0; i < KMER; i++) {
        if (x[i] == base[base.length - 1]) {
            x = x.slice(0, i) + convert(x[i]) + x.slice(i + 1);
        } else {
            x = x.slice(0, i) + convert(x[i]) + x.slice(i + 1);
            break;
        };
    };
};


console.timeEnd('Run');

console.log(`${counter} possible k-mers of length ${KMER}`);
