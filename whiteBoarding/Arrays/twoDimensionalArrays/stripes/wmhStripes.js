const stripes = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let tempArr = []
    for (let j = 0; j < num; j++) {
      if ([i] % 2 === 0) {
        tempArr.push(1)
      } else {
        tempArr.push(0)
      }
    }
    arr.push(tempArr)
  }
  return arr;
}
