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
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function")
    });
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe("boolean")
    });
    it('should return true if isVowel("a") is called', function () {
        expect(isVowel("a")).toEqual(true)
    });
    it('should return true if isVowel("A") is called', function () {
        expect(isVowel("A")).toEqual(true)
    });
    it('should return false if isVowel("y") is called', function () {
        expect(isVowel("y")).toEqual(false)
    });
    it('should return false if isVowel(4) is called', function () {
        expect(isVowel(4)).toEqual(false)
    });
    it('should return false if isVowel(true) is called', function () {
        expect(isVowel(true)).toEqual(false)
    });
    it('should return false if isVowel(false) is called', function () {
        expect(isVowel(false)).toEqual(false)
    });
    it('should return false if isVowel("banana") is called', function () {
        expect(isVowel("banana")).toEqual(false)
    });
    it('should return false if isVowel() is called', function () {
        expect(isVowel()).toEqual(false)
    });
    it('should return true if isVowel("e") is called', function () {
        expect(isVowel("e")).toEqual(true)
    });
    it('should return true if isVowel("i") is called', function () {
        expect(isVowel("i")).toEqual(true)
    });
    it('should return true if isVowel("O") is called', function () {
        expect(isVowel("O")).toEqual(true)
    });
    it('should return true if isVowel("u") is called', function () {
        expect(isVowel("u")).toEqual(true)
    });
});


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
