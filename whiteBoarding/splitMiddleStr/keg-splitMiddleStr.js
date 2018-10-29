// Here's a start...10-28-18

str1 = abcdefghijklmnopqrstuvxyz
str2 = 123456789

function(str1, str2){
  let l2 = str2.length
  let l1 = str1.length
  let a = str1.splice(0, x)
  let b = str2.splice(x, y - 1)
  let answer = b + a + str2
  return answer
}
