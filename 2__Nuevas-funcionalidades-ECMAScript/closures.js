function miClosure () {
    var x = 10;
    return function miMetodo() {
        return function miSubmetodo() {
            return function misubsubmetodo() {
                return x;
            }
        }
    }
}

var x = miClosure()()()();
console.log(x);