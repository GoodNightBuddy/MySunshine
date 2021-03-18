// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice() {
//         console.log('Animal i have become')
//     }

//     static type = "ANIMAL"
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal {
//     static type = 'CAT'

//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }

//     voice() {
//         super.voice()
//         console.log('I am cot')
//     }

//     get ageInfo() {
//         return this.age * 7
//     }

//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })

// cat.ageInfo = 5
// console.log(cat.ageInfo)

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

let box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

let box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'yellow'
})

class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

let circle1 = new Circle({
    selector: '#circle1',
    size: 100,
    color: 'green'
})

class Aligment {
    constructor(id) {
        this.$ul = document.getElementById(id)
    }
}

class Centering extends Aligment {
    constructor(options) {
        super(options.id)
        this.$ul.style.display = options.display
        this.$ul.style.justifyContent = options.justifyContent
    }
}

// let center = new Centering({
//     id: 'container1',
//     display: 'flex',
//     justifyContent: 'space-between'
// })


class Padding extends Centering {
    constructor(options) {
        super(options)
        this.$ul.style.paddingTop = options.paddingTop + 'px'
    }
}

let pad = new Padding({
    id: 'container1',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 100
})


// class Centering extends Aligment {
//     constructor(id, display, justifyContent) {
//         super(id)
//         this.$ul.style.display = display
//         this.$ul.style.justifyContent = justifyContent
//     }
// }

// let center = new Centering('container1', 'flex', 'space-between')