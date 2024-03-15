function myFunction() {
    // functions tem o seu proprio this
    this.name = 'Alan'

    const myArrowFunction = () => {
        this.lastName = 'Alan'
    };

    myArrowFunction()
    // arrow functions herda o this de onde foi criada
};

console.log(new myFunction())

console.log(this)