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
