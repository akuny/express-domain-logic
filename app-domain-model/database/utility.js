module.exports = {
  idSearch: (id, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return i;
      }
    }
  }
};
