let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// const x = varA;

// varA = varB;
// varB = varC;
// varC = x;

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);