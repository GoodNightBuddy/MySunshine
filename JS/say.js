export function hi() {
    alert('Hi!')
}

export function bye() {
    alert('Bye')
}

export default function() {
    alert('Module loaded(defult export)')
}



let arrayCounter = function(arr) {
    return `Array length equal ${arr.length}`
  }
  
console.log(arrayCounter([1, 2, 3, 4, 5]))
  