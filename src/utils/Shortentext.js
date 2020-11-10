function Shortentext(text, startingPoint, maxLength) {
    return text.length > maxLength
      ? text.slice(startingPoint, maxLength)
      : text;
  }

export default Shortentext