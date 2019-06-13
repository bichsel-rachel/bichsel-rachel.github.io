function testing() {
    var ClassA = function () {
        this.name = "class A";
    }

    ClassA.prototype.print = function () {
        console.log(this.name);
    }

    var a = new ClassA();

    a.print();

    //creates tool to inherit between classes. It clones the prototype
    var inheritsFrom = function (child, parent) {
        child.prototype = Object.create(parent.prototype);
    }

    var ClassB = function () {
        this.name = "class B";
        this.surname = "I'm the child";
    }

    inheritsFrom(ClassB, ClassA);

    var b = new ClassB();
    b.print();

    //override print function for ClassB
    //call function calls the base function on the current object (this)
    ClassB.prototype.print = function () {
        ClassA.prototype.print.call(this);
        console.log(this.surname);
    }

}

window.onload = testing;
