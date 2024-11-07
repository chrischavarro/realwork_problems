function findUnusedLetters(string) {
  const lowercaseString = string.toLowerCase();
  const result = [];
  const charSet = new Set(lowercaseString);
  for (i = 97; i <= 122; i++) {
    const char = String.fromCharCode(i);
    if (!charSet.has(char)) {
      result.push(char);
    }
  }
  return result.join('');
}

function findUnusedLetters(string) {
  const lowercaseString = string.toLowerCase();
  const charSet = new Set(lowercaseString);
  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(97 + index)
  );
  return alphabet.filter((char) => !charSet.has(char)).join('');
}

console.log(
  findUnusedLetters('A slow yellow fox crawls under the proactive dog')
);
console.log(findUnusedLetters('A quick brown fox jumps over the lazy dog'));
