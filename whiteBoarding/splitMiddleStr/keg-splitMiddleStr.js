// Here's a start...10-28-18

let str1 = 'abcdefghijklmnopqrstuvxyz'
let str2 = '123456789'

function splitMiddle(str1, str2) {
  let l2 = str2.length
  let l1 = str1.length
  let a = str1.slice(0, l2)
  let b = str1.slice(l2, l1 - 1)
  let answer = b + a + str2
  return answer
}
console.log(splitMiddle(str1, str2))
