function AllWordsToUpperCase(string) {
  const words = string.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
module.exports = AllWordsToUpperCase;
