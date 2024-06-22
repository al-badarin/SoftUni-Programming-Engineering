//~~~~~~~~~~~~~~~~~~~~~ FOR DOM QUICK REFS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
const inputRef = document.getElementById("input-something");
const btnRef = document.getElementById("btn");
const ulRef = document.querySelector(".class-info"); //DO NOT FORGET THE . IN FRONT OF CLASS NAME
 
event.preventDefault(); // PREVENTING DEFAULT REFRESH ON SUBMIT BUTTONS
 
let smthg = selectRef.options[selectRef.selectedIndex].value; // EXAMPLE OF TAKING VALUE FROM DROPDOWN
 
selectRef.options[selectRef.selectedIndex].value = article.children[1].textContent; //TO RETURN A DROPDOWN VALUE IN ON EDIT
 
// EXAMPLE CLEAR INPUTS
function clearInputs(){
    inputRef.value = ""; // WHEN AN INPUT
    selectRef.selectedIndex = 0; // WHEN A DROPDOWN
    dateInpRef.value = ""; //FOR DATES
}
 
//EXAMPLE CREATE BUTTONS COMBINED WITH createBtn("edit-btn", "Edit", onEdit) IN MAIN FUNCTION
function createBtn(styleClass, text, callBack){
    let btn = document.createElement("button");
    btn.classList.add(styleClass);
    btn.textContent = text;
    btn.addEventListener("click", callBack);
    return btn
}
 
//EXAMPLE IF NEEDING TO COMPARE DATES if start is set before end
if(new Date(dateStart) > new Date(dateEnd)){
    return
};
 
//EXAMPLE CREATION OF DOM ELEMENTS AND PUTTING CLASS OR ID TO THEM
let article = document.createElement("article");
let p = document.createElement("p");
let li = document.createElement("li");
li.classList.add("info");
 
//EXAMPLE CLEARING STUFF AND ENABLE DISABLE BUTTONS
ulSomething.innerHTML = ""; // REMOVE ALL CONTENT OF AN DOM ELEMENT as ul, div, section, whatever...
btnRef.disabled = true; // DISABLE BTN
btnRef.disabled = false; // ENABLE BTN
 
 
//~~~~~~~~~~~~~~~~~~~~~ FOR CLASSES QUICK REFS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
let itExists = this.something.find((item) => item.neededThing === neededThing); //TO KNOW IF YOU HAVE A SPECIFIC {} IN []
this.items = this.items.filter(obj => obj.itemSomething !== itemSomething); //TO REMOVE {} FROM THE []
 
 
//~~~~~~~~~~~~~~~~~ FOR TESTING WITH MOCHA/CHAI QUICK REFS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
module.exports = {thingToTest}; // ADD IT TO FILE THAT IS BEING TESTED
 
const assert = require("chai").assert; // IF USING ASSERT
const expect = require("chai").expect; // IF USING EXPECT
const {thingToTest} = require("../thingToTest.js") //PATH FOR THE FILE WITH THE SCRIPT
 
//IF WE NEED TO TEST CLASSES
let ourVar;
    beforeEach(() => {ourVar = new ClassToTest("values", "for", "class")}); // SEE ALSO PAYMENT PACKAGE FROM ADVANCED CLASSES EXERCISE
 
//WITH EXPECT
it("something something equal", function () {
    expect(thingToTest.method(argument)).to.equal("expected result")
});
it("something something throw error", function () {
    expect(() => { thingToTest.method(argument) }).to.throw(Error, "error wording")
});
it("testing for a {} in an []", function () {
    let something = [{thing: 123, another: 321}, {}, {}]
    expect(thingToTest.method(something, 321)).to.deep.equal([123]);
});
 
//WITH ASSERT
it("something something equal", function (){
    assert.equal(thingToTest.method(argument), "expected result", "your comment, optional");
});
it("something something throw error", function () {
    assert.throw(() => thingToTest.method(argument), "error wording", "your comment, optional")
});