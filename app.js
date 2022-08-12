const text = "cheating is not allowed"
const arr = text.replace(/\s/g, '').split("")
const sqrt = Math.ceil(Math.sqrt(arr.length))
var newWords = []
for (i = 0; i < Math.ceil(sqrt); i++) {
    var newArr = []
    for (l = 0; l < arr.length; l = l + sqrt) {
        if (arr[i + l]) {
            newArr.push(arr[i + l])
        }
    }
    newWords.push(newArr.join(""))
}

console.log(newWords.join(" "))
