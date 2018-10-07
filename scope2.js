/*
    ANY variable declared within a function
    is inaccessible outside of the function

    with the return keyword only the VALUE of the
    variable can be exported

    WITHIN a function, if a variable is referenced
    but it is NOT declared, javascript will peek outside
    of that function to see if it exists there
*/

function foobar() {
    let bar = 0;
    return bar;
}

//console.log(bar); // throw an error

let a = 1;
function somethingElse() {
    let a = 2;

    function test() {
        a = 3;
    }

    test();
    console.log(a)
}
somethingElse();
console.log(a)
