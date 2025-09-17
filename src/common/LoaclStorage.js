const storage = {
  Get(id) {
    return JSON.parse(localStorage.getItem(id));
  },
  Set(item) {
    localStorage.setItem(item.key, JSON.stringify(item.value));
  },
  Clear() {
    localStorage.clear();
  },
};
