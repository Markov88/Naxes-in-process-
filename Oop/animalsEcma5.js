function Animal (age) {
    this.age = age
}
Animal.prototype.sleep = function () {
    return `${ this.sleep = 'zzz' }`
}
 
function Dolphin (age) {
    Animal.call(this, age)
}
Dolphin.prototype = Object.create(Animal.prototype)
Dolphin.prototype.swim = function () {
    return `${ this.swim = 'splahh' }`  
}

let dolphin = new Dolphin(11)
dolphin.sleep = dolphin.sleep()
dolphin.swim = dolphin.swim()
console.log(dolphin )

function Lion (age) {
    Animal.call(this, age)
}
Lion.prototype = Object.create(Animal.prototype)
Lion.prototype.roar = function () {
    return `${ this.roar = 'wrrrrr' }`
}
Lion.prototype.eat = function () {
    return `${ this.eat = 'Yamyyy' }`
}
let lion = new Lion(13)
lion.sleep = lion.sleep()
lion.eat = lion.eat()
lion.roar = lion.roar()
console.log(lion)

function Bee (age) {
    Animal.call(this, age)
}

function Eagle (age) {
    Animal.call(this, age)
}
Eagle.prototype = Object.create(Lion.prototype)
Eagle.prototype.fly = function () {
    return `${ this.fly = 'Whoohoo' }`
}
let eagle = new Eagle(4)
eagle.sleep = eagle.sleep()
eagle.eat = eagle.eat()
eagle.fly = eagle.fly()
console.log(eagle)


Bee.prototype = Object.create(Eagle.prototype)
let bee = new Bee(1)
bee.sleep = bee.sleep()
bee.fly = bee.fly()
console.log(bee)
