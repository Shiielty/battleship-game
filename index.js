const Ships = (length) => {
  let _hits = 0;
  let sink = false;
  let hit = () => _hits++;
  let isSunk = () => {
    if (_hits === length) {
      sink = true
    }
    console.log(sink)
  }

  return { length, sink, hit, isSunk }
};

console.log("hello")
