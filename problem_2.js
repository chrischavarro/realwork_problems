function animate(initialPosition, speed) {
  const result = [];
  // keep track of the array length to reference when creating an initial array and iterating through resulting array(s)
  const chamberLength = initialPosition.length;
  // split initial string into an array for mapping and iterating purposes
  // declare as let for redeclaration within while loop
  let current = initialPosition.split('').map((c) => (c === '.' ? [] : [c]));

  // iterate until the current array consists only of empty arrays indicating no particles remain
  while (current.some((p) => p.length > 0)) {
    // if the element is an empty array, there is no particle in that position so a . will be in its place
    // otherwise, we will place an X to indicate a particle is at that position
    result.push(current.map((c) => (c.length > 0 ? 'X' : '.')).join(''));

    // populate the length of the chamber with empty arrays
    // these arrays will either be empty or contain one or more particles at the same position
    const next = Array(chamberLength)
      .fill()
      .map(() => []);

    // iterate through the length of the chamber
    for (let i = 0; i < chamberLength; i++) {
      // iterate across every, if any, element in the current subarray
      current[i].forEach((p) => {
        // if current element is a particle pointing right and it falls within range, push it to the current subarray
        if (p === 'R' && i + speed < chamberLength) {
          next[i + speed].push('R');
        }
        // push left facing particle if its next iteration will be within the particle chamber range
        if (p === 'L' && i - speed >= 0) {
          next[i - speed].push('L');
        }
      });
    }
    // set current to the next set of particles in their new positions
    current = next;
  }
  // add the final particle chamber iteration where all particles are out of the chamber
  result.push('.'.repeat(chamberLength));

  return result;
}

console.log(animate('..R....', 2)); // [ "..X....", "....X..", "......X", "......." ]
console.log(animate('RR..LRL', 3)); // [ "XX..XXX", ".X.XX..", "X.....X", "......." ]
console.log(animate('LRLR.LRLR', 2)); // [ "XXXX.XXXX", "X..X.X..X", ".X.X.X.X.", ".X.....X.", "........." ]
console.log(animate('RLRLRLRLRL', 10)); // [ "XXXXXXXXXX", ".........." ]
