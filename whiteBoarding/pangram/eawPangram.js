//  this is an example file to build out for the pangram checker
`this is an example of a pangram checker if you know there won't be any
repeated characters or non-alpha characters`.

`function isPangram(str) {
	let alpha = ["abcdefghijklmnopqrstuvwxyz"]
	let clean = str.toLowerCase().split('')
  let srt = clean.sort().join('')
  return alpha == srt
}
console.log(isPangram("wqertyuioplkjhgfdsazxcvbnm"))`



`this is an example of a pangram checker if there may be non-alpha characters
but no repeats`

`function isPangram(str) {
	let alpha = ["abcdefghijklmnopqrstuvwxyz"]
	let clean = str.toLowerCase().replace(/[^a-z]/g, '').split('')
  let srt = clean.sort().join('')
  return alpha == srt
}
console.log(isPangram("wqertyuioplkjh23gfdsazxc23--vbnm"))`




`this is an example of a pangram checker if there may character repeats`

`function isPangram(str) {

	let alpha = ["abcdefghijklmnopqrstuvwxyz"]
	let clean = str.toLowerCase().split('').sort().join('').replace(/(.)(?=.*\1)/g, '');
  console.log(clean)
  if (alpha == clean) console.log("true")
  else console.log("falst")
}

isPangram("wqertyuioplkjhgfdsazxcfwwvbnm")`
