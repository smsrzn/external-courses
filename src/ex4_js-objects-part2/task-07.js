function changeString(string, number) {
  if (string.length > number) {
    return `${string.slice(0, number - 1)}…`;
  }

  return undefined;
}

module.exports = changeString;
