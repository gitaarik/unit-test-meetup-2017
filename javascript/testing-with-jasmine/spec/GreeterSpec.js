describe("Greeter", function () {
    var greeter;

    beforeEach(function () {
        greeter = new Greeter();
    });

    it("should say 'Hello World'", function () {
        var greeting = greeter.greet();

        expect(greeting).toEqual('Hello World!');

    });


});
