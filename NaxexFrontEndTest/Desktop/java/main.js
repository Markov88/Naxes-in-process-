function Animal(age,sleep){

    this.age = age;
    this.sleep = "zzzzz";
    }
    
    function Dolphin() {
    Animal.call(this,"21",this.sleep);
    }
    Animal.prototype.swim = function() {
      this.swim = "splah";
    }
    
    Dolphin.prototype = Object.create(Animal.prototype);
    
    var dolphin = new Dolphin();
    dolphin.swim;

