function foobar() {
    let bar = 6;
}

// scope:
//  variables created within a function
//  will ONLY exist for as long as that function
//  runs
function baz() {
    let bar = 9;
    return bar;
}

baz()
console.log(bar);
