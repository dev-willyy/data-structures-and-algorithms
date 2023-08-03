// Sample 1
const checkForTimeComplexity = function (n) {
  console.log((n * (n + 1)) / 2);
  return (n * (n + 1)) / 2;

  // 1 + 1 + 1 + 1 = 4
  // O(4) === O(1)
};
checkForTimeComplexity(5);

// Sample 2
let a = 0,
  b = 0;
// 1 + 1 = 2

for (i = 0; i <= n; i++) {
  // 1 + (1 + 1)n = 2n + 1
  a = a + 5;
  // (1 + 1)n = 2n
}
for (j = 0; j <= m; j++) {
  // 1 + (1 + 1)m = 2m + 1
  b = b + 6;
  // (1 + 1)m = 2m
}

// TC = 4n + 4m + 4 === O(n + m)
// SC = O(1)


// Sample 3
let c = 0,
  d = 0;
// 1 + 1 = 2

for (l = 0; l <= p; l++) {
  // 1 + (1 + 1)p = 1 + 2p
  for (m = 0; m <= p; m++) {
    //( 1 + (1 + 1)p)p = p + 2p^2
    c = c + m;
    // (1 + 1)p^2 = 2p^2
  }
}
for (n = 0; n <= p; n++) {
  // 1 + (1 + 1)p = 1 + 2p
  d = d + n;
  // (1 + 1)p = 2p
}
// TC = 4p^2 + 7p + 4 === 0(n^2 + n) ≈ O(n^2)
// SC = 0(1)
