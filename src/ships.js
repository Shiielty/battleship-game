const Ships = (length) => {
  return { 
    length,
    hits: 0, 
    sink: false, 
    hit: function() {
      this.hits += 1
      this.isSunk()
    },
    isSunk: function() {
      if (this.length === this.hits) {
        this.sink = true;
      }
    }
  }
};

export { Ships }