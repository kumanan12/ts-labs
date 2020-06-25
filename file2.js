// @ts-nocheck


(function () {
    console.log('hello iffe')
    var n$= {};
    var name = 'Nikhil';
    
    function getName() {
        return name;
    }

    function setName(val) {
        name= val;
    }
    n$.getName = getName;
    n$.setName = setName;



    window.n$ = n$;
  
})();