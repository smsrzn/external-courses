function ChangeString(string, number) {
  if (string.length > number) {
    return `${string.slice(0, number - 1)}…`;
  }
}
module.exports = ChangeString;
