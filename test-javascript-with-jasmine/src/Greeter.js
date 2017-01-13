function Greeter() {
    var name = "World";

    this.getName = function getName() {
        return name;
    }
}


Greeter.prototype.greet = function() {
    return "Hello " + this.getName() + "!";
};

