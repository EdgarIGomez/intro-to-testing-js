// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return "Hello, Jane!"', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    })
    it('should return "Hello, Alex!"', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    })
    it('should return "Hello, Pat!"', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    })
    it('should return "Hello, World!', function(){
        expect(sayHello()).toBe("Hello, World!")
    })
    it('should return "Hello, World!', function(){
        expect(sayHello(true)).toBe("Hello, World!")
    })
    it('should return "Hello, World!"', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

describe('isFive', function (){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function")
    });
    it('should return a boolean', function (){
        expect(typeof isFive()).toBe("boolean")
    })
    it('should return true', function () {
        expect(isFive(5)).toEqual(true)
    });
    it('should return false if no number', function () {
        expect(isFive("number")).toEqual(false)
    });
    it('should return true if "5" is entered', function () {
        expect(isFive("5")).toEqual(true)
    });
})

describe('isEven', function (){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function")
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe("boolean")
    });
    it('should return true if isEven(2)', function () {
        expect(isEven(2)).toEqual(true)
    });
    it('should return true if isEven(-4)', function () {
        expect(isEven(-4)).toEqual(true)
    });
    it('should return false if isEven(3)', function () {
        expect(isEven(3)).toEqual(false)
    });
    it('should return false if isEven("banana")', function () {
        expect(isEven("banana")).toEqual(false)
    });
    it('should return true if isEven("8")', function () {
        expect(isEven("8")).toEqual(true)
    });
    it('should return false if isEven(Infinity)', function () {
        expect(isEven(Infinity)).toEqual(false)
    });
    it('should return false if isEven(true)', function () {
        expect(isEven(true)).toEqual(false)
    });
    it('should return false if isEven(false)', function () {
        expect(isEven(false)).toEqual(false)
    });
    it('should return false if isEven() is just called', function () {
        expect(isEven()).toEqual(false)
    });
})


/*describe('double', function(){
    it('should return a number', function(){
        expect(typeof double()).toBe("number")
    });

});*/

/*
describe('nameOfFunctionToBeTested', function(){
    it('describe what is being tested', function(){
        expect('what you are wanting to test').'jasmineMethod'('what it is supposed to be')
    })
})*/
