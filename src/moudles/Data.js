var Data = {
  data: [],
  add: function(value) {
    this.data.push({
      id: this.data.length,
      isDone: false,
      value: value
    });
  },
  finish: function(id) {
    for(let i = 0; i < this.data.length; i++) {
      if (this.data[i].id == id) {
        this.data[i].isDone = true;
      }
    }
  }
};
export default Data;