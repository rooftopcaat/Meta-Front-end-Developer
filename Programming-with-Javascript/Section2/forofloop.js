// 객체는 iterable이 아니므로 for루프는 객체에서 직접 작동할 수 없다.

// const car = {
//     speed: 100,
//     color: 'blue'
// }
//
// for(prop of car) {
//     console.log(prop)
// }

// TypeError: car is not iterable

// 객체와 달리 배열은 iterable이다.

const colors = ['red', 'orange', 'yellow'];
for (var color of colors) {
    console.log(color);
}

// 배열에서 for루프가 실행될 수 있다는 것을 사용해 객체를 반복할 수 있다.

// 하지만 방법론에 대해 논하기 전에 먼저
// Object.keys(), Object.values(), Object.entries() 의 3가지 기본 제공 메서드를 검토해보자.

// Object.keys() 메서드는 객체의 키를 배열로 반환한다. (반복하려는 객체)

const car2 = {
    speed: 100,
    color: 'blue'
}

console.log(Object.keys(car2)); // ['speed', 'color']

// 반환되는 값은 문자열 배열이며, car2 객체의 프로퍼티 키를 나타낸다.

const car3 = {
    spped: 300,
    color: 'yellow'
}

console.log(Object.values(car3)); // [300, 'yellow']

// Object.values() 메서드는 객체의 값들을 배열로 반환한다.

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

// Object.entries() 메서드는 객체의 키와 값의 쌍을 배열로 반환한다.

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
        dynamicKey = "speed";
    }else{
        dynamicKey = "color";
    }

    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();