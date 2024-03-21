// rest연산자로 배열, 객체 조인 and 스프레드 연산자 사용

// push()메서드를 사용하지 않고 배열에 요소 추가
// 문자열 배열 반환
// 객체, 배열을 별도의 객체로 복사

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries]
console.log(fruitsAndBerries);

// 스프레드 연산자로 배열 2개를 간단히 연결했다.

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

//객체 조인도 간단하다.

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// push()메서드를 사용하지 않고 배열에 요소를 추가했다.

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// 문자열을 배열로 변환했다.

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

// 스프레드 연산자로 객체를 완전히 별도의 객체로 복사했다.

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

// ** 스프레드 연산자는 소스 배열 또는 객체의 얕은 복사만 수행한다는 점에 유의하자. **
