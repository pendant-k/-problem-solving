function solution(phone_book) {
  const set = new Set();
  for (const v of phone_book) {
    set.add(v);
  }
    
  for (const v of phone_book) {
    for (let i = 1; i < v.length; i++) {
      const prefix = v.slice(0, i);

      if (set.has(prefix)) {
        return false;
      }
    }
  }
    
  return true;
}