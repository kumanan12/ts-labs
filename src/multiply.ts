export function multiply(num1:number, num2:number){
    youCannotSeeMe();
    return num1 * num2;
}


function youCannotSeeMe() {
    console.log('you cannot see me');
}