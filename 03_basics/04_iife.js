// // Immediately Invoked Function Expressions (IIFE) -> Used for immediate execution of function
// Global scope ke variable ya waha pe declared anything ke scope ke wajah se many times problem hoti hai to euse remove krne ke liye
// we use iife.
// syntax -> (Function declartion) ( fun execution)
//Note- In case of multiple iife Function put Semoicolon(;) after first for termination


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Firoj')