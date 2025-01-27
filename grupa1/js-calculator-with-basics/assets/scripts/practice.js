// 'use strict';

// ! 1. cas

console.log('-------------------- 1. cas --------------------')

// ! VARIJABLE (promenljive)

// alert('Hello World!');

// var 

// let varijable

let firstString = 'My First String';

let mySecondVariable;

mySecondVariable = 'Marko';

firstString = 25;

console.log(firstString);

// const varijable

const myAge = 27;

// const myName;

// myName = 'Petar';

// myAge = 57;

console.log(myAge);

// * Potencijalno pitanje na intervju -> LET vs CONST

// ? Dobra praksa u pisanju JS-a

// 1. imenovanje varijabli u camelCase formatu
let myFirstCamelCaseVariable = 5;

// 2. mozete u imenovanju koristiti i brojeve
let top11 = 11;

// 3. mozete imenovati varijable sa $ ili _ prefiksom
let $specialVar;
let _internalValue;

// ! Losa praksa u pisanju JS-a

// 1. imenovanje varijabli uz odvajanje reci u snake_case formatu
// let not_good_idea;
// let notGoodIdea;

// 2. imenovanje varijabli uz cifru na pocetku naziva
// let 7continents;

// 3. imenovnaje varijabli u kebab-case formatu
// let my-variable;

// 4. imenovanje varijable uz koriscene kljucnih (rezervisanih) reci
// let const;
// const let;

// ! OPERATORI

// + - * / % **

let someNumber = 20;

someNumber = someNumber + 50;

console.log(someNumber);

let square = 2**2;

console.log(square);

someNumber = (someNumber + 50) * 3 + 13;

console.log(someNumber);

// ! ZADACI ZA VEZBU
// 1. 
/*
    kreirati varijable proizvoljnog naziva u dozvoljenom camelCase formatu
    kreirati ih uz kombinaciju let i const
    ispisite vrednost varijabli uz console.log() funkciju
    pokusajte da redefinisete CONST tip varijable
*/

let firstVar = 55;
const personName = 'Petar';
let secondVar = firstVar + 20;

// personName = 'Nikola'; ! NE MOZE

console.log(firstVar);
console.log(secondVar);
console.log(personName);

// 2.
/*
    Napraviti 2 varijable uz let ili const (sami smislite koju cete iskoristiti)
    Prva varijabla neka sacuva rezultat neke matematicke operacije (slozenije)
    Druga varijabla neka sacuva opis matematicke operacije koju ste napisali
        -> '20 + 30 - 20 / 4' primer
*/

let a = 20;
let operation;

const myOperation = a + 25 - 40 - a / 2 + 5 * 3;
operationStr = 'a + 25 - 40 - a / 2 + 5 * 3';

console.log(myOperation);
console.log(operationStr);


// ! 2. cas (29.11.2021.)

console.log('----------------------- 2. cas ------------------------');

let myMathOperation = (a / 10) + (a * 5) - 10;

let myMathOperationString = '(' + a + ' / 10) + (' + a + ' * 5) - 10';

console.log(myMathOperation);

console.log(myMathOperationString);

// ! 1. zadatak za vezbu
// Iskoristiti res varijablu (njenu vrednost) kako bi se prikazao string format sa tom vrednoscu

let res = 10;

let firstTaskOperation = 'res + (res*3) - (10+res)';

let firstTaskOperationString = res + ' + (' + res + '*3) - (10+' + res + ')';

console.log(firstTaskOperationString);

let copyOfFirstTaskOperation = firstTaskOperation;

console.log(firstTaskOperation);

console.log(copyOfFirstTaskOperation);

firstTaskOperation = 555;

console.log(firstTaskOperation);

console.log(copyOfFirstTaskOperation);

firstTaskOperation = 'res + (res*3) - (10+res)';

firstTaskOperationString = "'('" + res + ' + (' + res + '*3) - (10+' + res + ')';

let templateLiteralsVariable = `${res} + (${res}*3) - (10+${res})`;

console.log(templateLiteralsVariable);

// ! 2. zadatak
// Zapisati u Template Literals formatu varijablu:

let secondTaskOperation = 'res * (15*res) - (res/2) + res';

let secondTaskOperationString = `${res} * (15 * ${res}) - (${res}/ 2) + ${res}`;

console.log(secondTaskOperationString);

let goToNewLineString = `My string can go \nto the next line.`;

console.log(goToNewLineString);

// ! FUNKCIJE

function helloWorld(planetName) {
    alert(`Hello planet ${planetName}`); // 1. nacin
    // alert('Hello planet ' + planetName); // 2. nacin
}

// helloWorld('Jupiter');

// helloWorld('Earth');

// helloWorld('Mars');

const result = 'Hello JS!';

function add(number1, number2) {
    const result = number1 + number2;
    console.log(`Testing result variable: ${result}`);
    return `Result of add function is ${result}`;
    // return `Result of add function ${number1+number2}`;
}

console.log(result);

console.log(add(50,100));

console.log(add(3, 10));

let anotherX;
anotherX = 55;

function printVariable() {
    console.log(`testing anotherX variable: ${anotherX}`);
}

printVariable();

// TODO   ->    DOMACI zadaci sa drugog casa

// 1. zadatak
/**
 *  Kreirati dve varijable. Jedna neka bude tipa number i neka se zove userInput (na koju god vrednost je postavite) i druga neka se naziva         currentResult i nemojte je postaviti ni na kakvu vrednost.
    Postavite currentResult varijablu na vrednost userInput plus neki broj (npr 20).
    U naredne 3 linije koda, varijablu currentResult promenite u svakoj narednoj liniji koda operacijama oduzimanja, mnozenja i deljenja nad tom currentResult varijablom i svaki put ispisati vrednost varijable na konzoli u formatu koji zelite s tim da pre toga stoji prefiks `Current result is: `
    Na kraju varijablu currentResult ispisati u okviru alert prozora, a userInput varijablu ispisati samo na konzoli.
 * 
*/

let userInput = 120;
let currentResult;

currentResult = userInput + 20;

currentResult = currentResult - 10;

console.log(`Current result is: ${currentResult}`);

currentResult = currentResult * 5;

console.log(`Current result is: ${currentResult}`);

currentResult = currentResult / 2;

console.log(`Current result is: ${currentResult}`);

// alert(`Current result is: ${currentResult}`);

console.log(`User input value is: ${userInput}`);

// 2. zadatak
/** 
 * Kreirati funkciju square() koja ce broj prosledjen kao parametar podici na kvadrat.
   Rezultat vratiti u formatu ‘Result is: broj’.
   Funkciji kao argument proslediti odredjeni broj (npr 5).
*/

function squareFunc(number) {
    const result = number**2;
    return `Result is: ${result}`;
}

console.log(squareFunc(5));


// ! 3. cas (01.12.2021.)

console.log('----------------- 3. cas -------------------');

// Konvertovanje tipova podataka

let myRes = 22 + parseInt('545');

console.log(myRes); // 567

let myResFloat = 22 + parseFloat('44.5');

console.log(myResFloat); // 66.5

myRes = myRes + +'55';

console.log(myRes); // 622 u number formatu

let myResStr = myRes.toString() + ' is this working?';

console.log(myResStr); // 622 is this working?

myRes = 3 * '20';

console.log(myRes); // 60

myRes = '40' - 10;

console.log(myRes); // 30

myRes = 50 / '2';

console.log(myRes); // 25

// Kraci zapis operatora

myRes = myRes + 10; // 35 // ! 1. nacin

myRes += 55;

console.log(myRes); // 90

myRes *= 2;

console.log(myRes); // 180

myRes -= 40;

console.log(myRes); // 140

myRes /= 70;

console.log(myRes); // 2

    // * increment i decrement operatori

let counter = 0;

counter++; // increment operator

console.log(counter); // 1

counter--; // decrement operator

console.log(counter); // 0

// alert(counter++); // 0

// alert(++counter); // 1

// Ostali tipovi podataka

// string, number
/*
    1. string
    2. number
    3. boolean (true ili false)
    4. objects 
    5. arrays (nizovi)
    6. undefined
    7. null
*/

// Arrays

let myArray = [];

myArray = [1,2,3,4,5];

myArray.push(6);

myArray.push(44);

myArray.push(888);

console.log(myArray);

console.log(`First item in myArray is: ${myArray[0]}`);

console.log(`Last item in myArray is: ${myArray[myArray.length-1]}`);


// Objects
// podaci se beleze u key: value paru

const person = {
    firstName: 'Petar',
    lastName: 'Petrovic',
    age: 25,
    gender: 'male',
    isStudent: true
};

// person['nationality'] = 'Serbian';

console.log(person.firstName);

console.log(`Person's name is ${person.firstName} ${person.lastName}`);

console.log(`Person's name is ${person.firstName} and is ${person.age} years old.`);

console.log(`Is student: ${person.isStudent}`);

// undefined vs null

let testVariable;

console.log(testVariable); // undefined

let testVariable2 = null;

console.log(testVariable2); // null

// NaN  ==> not a number

console.log(100 - 'hello world'); // NaN

// typeOf operator --> sluzi za proveru tipa vrednosti

console.log(typeof(counter)); // number

console.log(typeof(5 - 'hello')); // number

console.log(typeof(40.23)); // number

console.log(typeof('My random string')); // string

console.log(typeof(true)); // boolean

console.log(typeof(person)); // object

console.log(typeof(myArray)); // object

console.log(typeof(null)); // object

console.log(typeof(undefined)); // undefined

// 2. nacin za typeof

console.log(typeof 'my random string'); // string

// TODO   -->   Domaci 3. casa

/*
    1. Kreirati varijablu proizvoljnog naziva. U varijablu dodati vrednost koja se dobije tako sto saberu vrednosti 33 (tipa number) i ‘27’ (tipa string). Obezbediti konverziju (parsiranje) string-a u number kako bi se matematicka operacija uspesno izvrsila. Na kraju napraviti novu varijablu u koju cete dodati vrednost koja se dobija parsiranjem dobijenog number-a u string.
    2. Prvu varijablu (tipa number) uvecati za 10 koristeci skraceni tip operatora. Nakon toga istu varijablu dekrementovati za jedan i ispisati konacnu vrednost na konzoli uz ispis ‘Current value is vrednost_varijable’.
    3. Kreirati niz sa od sledecih elemenata: ‘hello’ , ‘planet’ , ‘Jupiter’. Na kraju izvrsiti konkatinaciju ovih stringova i rezultat ispisati na konzoli.
    4. Kreirati objekat course i u njega dodati property-je: courseName (tipa string) i proizvoljnu vrednost, courseTeacher (tipa string) i proizvoljnu vrednost, duration (tipa number) i proizvoljnu vrednost i languages (tipa array) i proizvoljan niz elemenata.
    5. Ispisati na konzoli kompletan niz elemenata (languages property) iz course objekta.
    6. Ispisati poslednji element istog tog niza na konzoli.
    7. Resetovati vrednost varijable iz prvog zadatka na praznu vrednost uz odgovarajuci tip podatka.
    8. Proveriti tip podatka varijable iz prvog zadatka.
 */

let randomVar = 33 + +'27';

let randomVarStr = randomVar.toString();

randomVar += 10;

randomVar--;

console.log(`Current value is ${randomVar}`); // 69

let testArray = ['Hello', 'planet', 'Jupiter'];

console.log(`${testArray[0]} ${testArray[1]} ${testArray[2]}!`); // Hello planet Jupiter

const course = {
    courseName: 'Frontend Programming',
    courseTeacher: 'Petar Petrovic',
    duration: 1.5,
    languages: ['JavaScript', 'HTML5', 'CSS3']
}

console.log(course.languages);

// course['languages'];

console.log(course.languages[course.languages.length-1]); // 'CSS3'

randomVar = null;

console.log(typeof randomVar);


// ! 5. Cas (08.12.2021.)

console.log(`------------------ 5. cas -----------------`);

let myBool;

// * Operatori poredjenja (== i ===)

// operator == operande poredi SAMO po vrednosti (double equality)

console.log(10 == 10); // true

console.log(`10 == 10 is: ${10 == 10}`); // true

console.log(`50 != 50 is ${50 != 50}`); // false

console.log(`Comparing equality of strings 'Hello' and 'Hello' : ${'Hello' == 'Hello'}`); // true

console.log(`Comparing equality of strings 'World' and 'Winter' : ${'World' == 'Winter'}`); // false

console.log(`Comparing equality of strings 'World' and 'world' : ${'World' == 'world'}`); // false

console.log(`Comparing not equality of strings 'World' and 'Winter' : ${'World' != 'Winter'}`); // true

console.log(`100 and '100' is equal? : ${100 == '100'}`); // true


// operator === operande poredi i po vrednosti i po tipu vrednosti (triple (strict) equality)

console.log(`100 and '100' is equal? : ${100 === '100'}`); // false

// ali ovo vraca true
console.log(`100 and '100' is equal? : ${100 === parseInt('100')}`); // true

console.log(`100 and '100' is not equal? : ${100 !== parseInt('100')}`); // false


// * poredjenje vrednosti po > , < , >= , <=

console.log(`25 > 3 is : ${25 > 3}`); // true

console.log(`-17.7 < 0 is: ${-17.7 < 0}`); // true

console.log(`44 >= 44 is: ${44 >= 44}`); // true

console.log(`2 <= 2 is: ${2 <= 2}`); // true

console.log(`33 > '12' is: ${33 > '12'}`); // true

console.log(`33 < '11' is: ${33 < '11'}`); // false

// poredjenje stringova

// b > a

console.log(`'ab > 'aa' is : ${'ab' > 'aa'}`); // true

console.log(`'c' > 'C' is : ${'c' > 'C'}`); // true

console.log(`'a' > 'B' is: ${'a' > 'B'}`); // true


// ! STATEMENTI (blokove) (IF , ELSE IF , ELSE)

// 1. IF blok (IF statement)

if (5 === 555) {
   console.log(`5 is equal to 5.`); 
}

if (20 === '20') {
    console.log(`20 is equal to '20'.`);
}

if (20 !== '20') {
    console.log(`20 is not equal to '20' by triple equality.`);
}

// primer uz prompt prozor

console.log(`--------------- IF blok ------------------`);

const number = prompt('Enter your number: ');

console.log(typeof number); // string

if (number > 0) {
    console.log(`Your number ${number} is greater than 0`);
}

console.log(`--------------- IF - ELSE blokovi ------------------`);

if (number > 0) {
    console.log(`Your number ${number} is greater than 0`);
} else {
    console.log(`Your number ${number} is less than 0`);
}

console.log(`----------------- IF - ELSE IF - ELSE blokovi ------------------`);

if (number > 0) {
    console.log(`Your number ${number} is greater than 0`);
} else if (number < 0) {
    console.log(`Your number ${number} is less than 0`);
} else {
    console.log(`Your number ${number} is equal to 0`);
}


// ! Ugnjezdeni IF - ELSE blokovi

console.log(`----------------- UGNJEZDENI IF - ELSE blok ------------------`);

if (number >= 0) {
    if (number > 0) {
        console.log(`Your number ${number} is greater than 0`);
    } else {
        console.log(`Your number ${number} is equal to 0`);
    }
} else {
    console.log(`Your number ${number} is less than 0`);
}


// ! Poredjenje objekata i nizova

const firstCourse = {
    name: 'Java'
}

const secondCourse = {
    name: 'Java'
}

console.log(`Comparing objects: ${firstCourse === secondCourse}`); // false

const courses = ['Java', 'JavaScript', 'C#'];

const otherCourses = ['Java', 'JavaScript', 'C#'];

console.log(`Comparing arrays: ${courses === otherCourses}`); // false


// ! Poredjenje uz vise logickih uslova
// true i false => false
// false i false => false
// true i true => true

console.log(`---------------- Logicki operatori -> AND (&&) , OR , NOT (!) ----------------`);

// '33'
if (number > 0 && number === 33) {
    console.log(`Your number ${number} is exactly 33 which is greater than 0!`);
}

const parsedNumber = parseInt(number); // '33' -> 33

if (parsedNumber > 0 && parsedNumber === 33) {
    console.log(`Your number ${parsedNumber} is exactly 33 which is greater than 0!`);
}

// TODO 5. cas domaci
/**
 * 1. Kreirati dve varijable tipa number sa vrednostima 30 i 50
 * 2. Uporediti varijable koristeci == i === i rezultate poredjenja ispisati na konzoli
 * 3. Uporediti varijable koristeci != i !== i rezultate poredjenja ispisati na konzoli
 * 4. Rezultat poredjenja iz 2. zadatka invert-ovati uz NOT operator i ispisati na konzoli
 * 5. Kreirati 3. varijablu sa vrednoscu '30' (tipa string)
 * 6. Uporediti varijablu sa vrednoscu 30 (number) i '30' (string) pomocu oba tipa equality operatora (== i ===), uporediti razlike rezultata poredjenja
 * 7. Kreirati 4. varijablu (npr. promptAnswer) cija se vrednost dobija kroz prompt prozor browser-a
 * 8. Vrednost varijable proveriti kroz if - else if - else uslove i shodno tome ispisati status o varijabli u formatu `Value ${promptAnswer} is ________`
 */

const variable1 = 30;
const variable2 = 50;

console.log(`variable1 is equal to variable 2: ${variable1 == variable2}`); // false
console.log(`variable1 is equal to variable 2: ${variable1 === variable2}`); // false

console.log(`variable1 is not equal to variable 2: ${variable1 != variable2}`); // true
console.log(`variable1 is not equal to variable 2: ${variable1 !== variable2}`); // true

const compareOfVars = variable1 === variable2;

console.log(compareOfVars); // false
console.log(!compareOfVars); // true  // ! Revert-ovan false u true pomocu ! znaka (NOT operatora)

const variable3 = '30';
console.log(`variable3 is equal to 30: ${variable3 === 30}`); // false
console.log(`variable3 is equal to 30: ${variable3 == 30}`); // true

const promptAnswer = prompt('Enter your value:');

if (promptAnswer > 0) {
    console.log(`Value ${promptAnswer} is positive.`);
} else if (promptAnswer < 0) {
    console.log(`Value ${promptAnswer} is negative.`);
} else {
    console.log(`Value is zero.`);
}

console.log('------------------------ 6. cas -------------------------')

// ! 6. cas (13.12.2021.)

// * OR logicki operator (||)

if (parsedNumber > 0 || parsedNumber < 0) {
    console.log(`1st log -> Number ${parsedNumber} is either positive or negative.`);
}


// * kombinovanje logickih operatora
// && > ||

if (parsedNumber > 0 && parsedNumber === 5 || parsedNumber < 0) {
    console.log(`2nd log -> Number ${parsedNumber} is either positive or negative.`);
}

if ((parsedNumber > 0 && parsedNumber === 5) || parsedNumber < 0) {
    console.log(`2nd log -> Number ${parsedNumber} is either positive or negative.`);
}



// * TERNARNI operator (kondicioni operator)

let answer = (parsedNumber < 0) ? `${parsedNumber} is negative number` : `${parsedNumber} is equal or greater than 0`;

console.log(answer);


// kombinovanje IF-ELSE blokova i ternarnog operatora

if (parsedNumber === 0) {
    console.log(`${parsedNumber} is equal to zero`);
} else {
    let answer = (parsedNumber < 0) ? `${parsedNumber} is negative number` : `${parsedNumber} is equal or greater than 0`;
    console.log(answer);
}


// * TRUTHY i FALSY vrednosti

// * FALSY vrednosti : false, '', ``, "", 0, -0, 0n, NaN, null, undefined
// * TRUTHY vrednosti : sve sto nije gore navedeno ('Hello World', true, 22, -41.14, itd.)

// const falsyValue = '';
// const truthyValue = 'JS cas 13.12.2021.';
const falsyValue = 0;
const truthyValue = 111;

if(falsyValue) {
    console.log(`Entered FALSY block`);
}

if(truthyValue) {
    console.log(`Entered TRUTHY block`);
}


// primer

const answerOfOperation = parsedNumber > 0 && parsedNumber < 50;

console.log(`Answer of operation variable value: ${answerOfOperation}`);


if(answerOfOperation) {
    console.log(`Your number is ${parsedNumber}`);
}

// primer

let userInput1;

if(userInput1) {
    console.log(`A User has entered ${userInput1}`);
} else if (userInput1 === null) {
    console.log(`User Input value is null.`);
} else {
    console.log(`None of above.`);
}


// * moguce je konvertovati falsy ili truthy u false ili true

let answerOfOperationConverted = !!answerOfOperation;

console.log(answerOfOperationConverted);

// * moguce je definisati vrednost varijable na osnovu || (OR operatora)

let userInputName = prompt('Enter your user name:');
let userName = userInputName || 'Default User Name';

// ! duzi nacin ovoga od gore
// if(userInputName) {
//     userName = userInputName;
// } else {
//     userName = 'Default Name';
// }

console.log(`A name that User has provided is: ${userName}`);

// * moguce je definisati vrednost varijable i na osnovu && (AND operatora)

let registeredUser = false;

let userName1 = registeredUser && 'marko123';

console.log(`User Name 1 value : ${userName1}`);


// * SWITCH case-ovi

const mathGrade = 2;

switch(mathGrade) {
    case 1:
        console.log(`Math grade is 1 😪`);
        break;
    case 2:
        console.log(`Math grade is 2 🤔`);
        break;
    case 3:
        console.log(`Math grade is 3 😑`);
        break;
    case 4:
        console.log(`Math grade is 4 🙂`);
        break;
    case 5:
        console.log(`Math grade is 5 😊`);
        break;
}



// * PETLJE (LOOP-ovi)
// 1. for -> koristi se za pozivanje nekog koda nekoliko puta
// 2. for-of -> sluzi za pozivanje nad svakim elementom nekog niza
// 3. for-in -> sluzi za vracanje svih KEY-eva nekog objekta (mogu i se vratiti i vrednosti)
// 4. while -> izvrsava se dok je neki logicki uslov zadovoljen
// 5. do while


// * 1. FOR petlja

for(let counter = 1; counter <= 5; counter++) {
    console.log(`Counter is ${counter}`);
}

// primer -> program koji racuna zbir prvih 100 prirodnih brojeva

let sum = 0;

for(let i = 1; i<=100; i++) {
    sum += i;
}

console.log(`Sum of first 100 natural numbers: ${sum}`);

// ! 6. i 7. cas domaci

// 1. Uporediti vrednost kreirane varijable (const someNum = prompt('Please enter your number')) pomocu ternarnog operatora tako da se ispise da li je broj pozitivan ili negativan
// 2. Dodati OR (||) logicki operator kako bi se proverilo da li je someNum vrednost nula ili veca od nule i rezultat ispisati na konzoli zajedno
// 3. Dodati breakpoint u prethodnom izvrsavanju if bloka i utvrditi potencijalnu gresku na osnovu iscitavanja vrednosti

// 4. za svaku liniju koda u nastavku ispisati sta vraca:
// /**
//  *  const userEmail = 'marko@gmail.com';
//     const backupEmail = '';
//     console.log(userEmail === 'marko@gmail.com');
//     console.log(userEmail);
    
//     console.log(userEmail || null);
//     console.log(backupEmail || 'milan@gmail.com');
//     console.log(backupEmail || '');
//     console.log(backupEmail || null || 'petar@gmail.com');
    
//     console.log(userEmail && 'petar@gmail.com');
//     console.log(backupEmail && 'petar@gmail.com');
//     console.log(userEmail && ''); 
//  * 
//  */

// 5. Kreirati varijablu "dayOfTheWeek" i postaviti na danasnji dan (hardkodovati, npr: 'tuesday'). Promeniti case-ove switch opcijom i u skladu sa tim ispisati vrednost na konzoli.

// 6. Ispisati proizvod svih brojeva od 1 do 10

const someNum = prompt('Please enter your number:');

let answerSomeNum = someNum > 0 ? `${someNum} is positive` : `${someNum} is negative`;

console.log(answerSomeNum);

if(someNum === 0 || someNum > 0) {
    console.log(`${someNum} is either equal to 0 or positive value!`);
}

// /**
//  *  const userEmail = 'marko@gmail.com';
//     const backupEmail = '';
//     console.log(userEmail === 'marko@gmail.com'); // ! vraca -> true
//     console.log(userEmail); // ! vraca -> 'marko@gmail.com'
    
//     console.log(userEmail || null); // ! vraca -> 'marko@gmail.com'
//     console.log(backupEmail || 'milan@gmail.com'); // ! vraca -> 'milan@gmail.com'
//     console.log(backupEmail || ''); // ! vraca -> ''
//     console.log(backupEmail || null || 'petar@gmail.com'); // ! vraca -> 'petar@gmail.com'
    
//     console.log(userEmail && 'petar@gmail.com'); // ! vraca -> 'petar@gmail.com'
//     console.log(backupEmail && 'petar@gmail.com'); // ! vraca -> ''
//     console.log(userEmail && ''); // ! vraca -> ''
//  * 
//  */

const dayOfTheWeek = 'tuesday';

switch(dayOfTheWeek) {
    case 'monday':
        console.log(`Today is Monday!`);
        break;
    case 'tuesday':
        console.log(`Today is Tuesday!`);
        break;
    case 'wednesday':
        console.log(`Today is Wednesday!`);
        break;
    case 'thursday':
        console.log(`Today is Thursday!`);
        break;
    case 'friday':
        console.log(`Today is Friday!`);
        break;
    case 'saturday':
        console.log(`Today is Saturday!`);
        break;
    case 'sunday':
        console.log(`Today is Sunday!`);
        break;
}

let multiplyResult = 1;

for(let j = 1; j <= 10; j++) {
    multiplyResult *= j;
}

console.log(`Result of multiplying first 10 numbers ${multiplyResult}`); // Result of multiplying first 10 numbers 3628800


// ! 7. cas (15.12.2021.)

console.log('------------------------ 7. cas (15.12.2021.) -------------------------');

// * FOR OF loop

const programmingLanguages = ['JavaScript', 'C#', 'Python', 'Solidity', 'Java'];

console.log('------ izvlacenje elemenata iz niza prvo FOR loop-om')

for(let i=0; i<programmingLanguages.length; i++) {
    console.log(`I want to learn: ${programmingLanguages[i]}`);
}

console.log('--------- FOR OF --------');
// pristup uz for of loop

for(let language of programmingLanguages) {
    console.log(`I want to learn: ${language}`);
}

const greetings = 'Welcome';

for(let letter of greetings) {
    console.log(letter);
}


// * FOR IN loop

const someUser = {
    name: 'Marko Markovic',
    email: 'marko@gmail.com',
    age: 22,
    student: true
}


for(let key in someUser) {
    console.log(`${key}`); // vraca naziv key-a, tj property-a objekta
}

// console.log(`Age of student is ${someUser.age}`);

// ! uz . pristup property-u objekta ovo ne moze u for in loop-u
// for(let key in someUser) {
//     console.log(`${key} : ${someUser.key}`);
// }

for(let key in someUser) {
    console.log(`${key} : ${someUser[key]}`);
}


// KOMBINACIJA FOR OF i FOR IN PETLJE

const bankAccount = {
    owner: 'Marko Markovic',
    pin: 1234,
    phone: '063333111',
    transactions: ['+300', '-250', '+700', '-25', '+800']
}

console.log('------- kombinovanje loop-ova -------');

for(let key in bankAccount) {
    console.log(`${key} : ${bankAccount[key]}`);
    if(key === 'transactions') { // 'transactions' === 'transactions'
        for(let transaction of bankAccount.transactions) {
            console.log(transaction);
        }
    }
}


// * WHILE petlja

let userLoggedIn = true;
let i = 0;

// ! ovo vraca endless loop (beskonacnu petlju)
// while(userLoggedIn) {
//     console.log(i);
//     i++;
// }


while(i<5) {
    console.log(`While counter i value: ${i}`);
    i++;
}

console.log(i);

// * DO WHILE petlja

i = 0;

do {
    console.log(i);
    i++;
}
while(i<=5);


// * BREAK i CONTINUE

// * break => se koristi kada hocemo da prekinemo neku petlju u odredjenoj iteraciji (u odredjenom momentu)

// primer

for(let i = 0; i < 5; i++) {
    if(i===4) {
        break;
    }
    console.log(`Number is: ${i}`);
}

// * continue => se koristi ako hocemo da preskocimo odredjenu iteraciju ako je neki uslov zadovoljen

// primer

for(let i = 0; i < 5; i++) {
    if(i===3) {
        continue;
    }
    console.log(`Broj: ${i}`);
}


// ! TRY, CATCH, FINALLY blokovi

// u try blok ide kod koji moze da baci neki error
// u catch blok ide kod koji je hendlovanje greske uhvacene u try bloku
// finally blok se uvek izvrsava, bez obzira da li je try blok prosao ili je uhvacena neka greska
// najcesce se koristi za hendlovanje nekih network greski


try {
    console.log(`Testing try block`);
    // console.log(someRandomVariable);
} catch(error) {
    console.log(error.name + ' ' + error.message);
} finally {
    console.log(`Finally block is always happening`);
}

// 7. Kreirati niz "foreignLanguages" i 3 jezika dodati u njega. Svaki jezik treba da ima svoj naziv i recenicu na tom jeziku. 

// 8. Nakon toga, proci kroz niz jezika i ispisati svaki element u formatu:
//    'Here is a sentence on LANGUAGE_NAME : LANGUAGE_SENTENCE'

// 9. Za PRVI jezik iz foreignLanguages dodati (nalepiti) jos jedan property -> teachers niz nastavnika koji predaju jezik (3). 
// Za svakog od nastavnika napraviti property firstName i lastName i dodeliti neke vrednosti.

// 10. Ispisati redni broj nastavnika te njegovo ime i prezime i taj jezik koji predaje u formatu:
// Teacher number BROJ : IME PREZIME is teaching JEZIK


const foreignLanguages = [
    {name: 'English', sentence: 'This is some sentence on English.'},
    {name: 'German', sentence: 'JS ist sehr gut.'},
    {name: 'Latin', sentence: 'Lorem ipsum dolor sit amet.'}
];

for(let language of foreignLanguages) {
    console.log(`Here is a sentence on ${language.name} : ${language.sentence}`);
}

foreignLanguages[0].teachers = [
    {firstName: 'Marko', lastName: 'Markovic'},
    {firstName: 'Petar', lastName: 'Petrovic'},
    {firstName: 'Sara', lastName: 'Saric'}
]

for(let i=0; i < foreignLanguages[0].teachers.length; i++) {
    console.log(`Teacher number ${i+1}: ${foreignLanguages[0].teachers[i].firstName} ${foreignLanguages[0].teachers[i].lastName} is teaching ${foreignLanguages[0].name}`);
}



// ! 8. cas (22.12.2021)

console.log('---------------------- 8. cas (22.12.2021.) ------------------------');

// ! Razlika izmedju ES5 i ES6

// * VAR vs LET vs CONST

// ! 1. razlika --> VAR dozvoljava re-deklarisanje varijabli, dok LET i CONST ne dozvoljavaju

let city = 'Novi Sad';
const city1 = 'Beograd';

// const city1 = 'Nis';  // ! nevalidan kod
// let city = 'New York';

city = 'Pozarevac';

// * vs

var country = 'Serbia'; // ! losa praksa
var country = 'Austria';

console.log(`Country is ${country}`);


// ! 2. razlika --> VAR se kreira ili GLOBALNO ili na nivou funkcije (VAR varijable su ili GLOBAL ili FUNCTION scope varijable)

var check = true;

if(check) {
    var zipCode = 21000;
}

console.log(`Zip Code: ${zipCode}`);

// ! 3. razlika --> Hoisting

console.log(myNumb);
var myNumb = 55;

/**
 * var myNumb;
 * console.log(myNumb); // undefined
 * myNumb=55;
 * console.log(myNumb); // 55
 */

function nekaFunkcija() {
    console.log(nekiBr);
    var nekiBr=30;
}


// ! STRICT mode

// 1. slucaj
var variable6 = 'bla';
var variable6 = 'nesto';

// 2. slucaj
variable8 = 'Jupiter'; // ! losa praksa

console.log(variable8); // Jupiter



// ! Stuktura JavaScript Engine-a (HEAP i STACK memorija)

// HEAP memorija (dugotrajna) --> memorija kojom upravlja (u nasem slucaju browser) i u njoj se cuvaju razliciti podaci
// STACK memorija (kratkotrajna) --> memorija koja prati korake izvrsavanja naseg programa pa samim tim i funkcije koje se izvrsavaju.


function getPlanetName(planetName) {
    return planetName;
}

function printPlanetName() {
    const planet = getPlanetName('Earth');
    console.log(`We are travelling to planet ${planet}`);
}

printPlanetName();



// ! PRIMITIVNI vs REFERENTNI tipovi podataka

// PRIMITIVNI tipovi --> null, undefined, numbers (23), strings ('hello'), boolean (true/false)

let primitive1 = null;
let primitive2 = undefined;
let primitive3 = 22;
let primitive4 = 'Good Morning!';
let primitive5 = true;

// REFERENTNI tipovi --> objekti i nizovi

let referenceObj = {
    name: 'Marko',
    lastName: 'Markovic'
}

let referenceArr = [1,2,3,4];

// referenceArr.push(5);

// kopiranje primitivnih tipova podataka

let primitive4Copy = primitive4;

console.log(primitive4Copy);

primitive4Copy = 'Good Night!';

console.log(primitive4Copy);
console.log(primitive4);


// kopiranje referentnih tipova podataka

let referenceObjCopy = referenceObj;

console.log(referenceObjCopy);

referenceObjCopy.name = 'Petar';

console.log(referenceObjCopy);
console.log(referenceObj);

let referenceArrCopy = referenceArr;

referenceArrCopy[0] = 81;

console.log(referenceArrCopy);
console.log(referenceArr);

