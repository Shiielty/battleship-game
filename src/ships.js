const Ships = (coordinates) => {
  let length = coordinates.length
  let hits = 0;
  let sink = false;

  const getCoor = () => coordinates;
  const getLength = () => length;
  const getHits = () => hits;
  const getSink = () => sink;
  const hit = () => {
    hits += 1;
  }
  const isSunk = () => {
    if (getLength() === getHits()) {
      sink = true;
    }
    return getSink();
  }

  return { 
    getCoor,
    getLength,
    getHits,
    getSink,
    hit,
    isSunk
  }
}

export { Ships }