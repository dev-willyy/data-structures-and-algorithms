// Sample 4
function logarithm(n) {
  let i = n;
  // 1
  let count = 0;
  // 1
  while (i > 1) {
    // 1logN
    count = count + 1;
    // (1 + 1)logN = 2logN
    i = i / 2;
    // (1 + 1)logN = 2logN
  }
  return count;
  // 1

  // TC = 5logN + 3 = O(logN)
}
logarithm(32);

// &PS: O(N) >>> O(logN)


// Sample 5
function doubleLoop(N) {
  let a = 0;
  for (i = 0; i < N; i++) {
		// N loops is run for every decrement
    for (j = N; j > i; j--) {
      a = a + i + j;
      console.log(a);
    }
  }
}
doubleLoop(3);
