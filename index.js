function sum(...arg) {
    // function tem seu proprio argument e seu proprio objeto this
    console.log(arg);    
};

const sumArrow = () => {
    // arrow function herda o this e o argument de onde ela foi criada
    
    console.log(arguments);    
};

sum(1, 2, 3, 4, 5, 6, 7, 8, 9)
sumArrow(1, 2, 3, 4, 5, 6, 7, 8, 9)