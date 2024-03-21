// object, map, array, set 의 데이터 구조 기초

// 배열로 작업하기

// forEach(), filter(), map()의 세가지 메서드를 살펴보자

// forEach() 메서드는 배열의 각 요소를 반복할 수 있다.

const fruits = ['apple', 'banana', 'orange', 'mango', 'melon'];
function appendIndex(fruit, index) {
    console.log(`${fruit} is at index ${index}`);
}

fruits.forEach(appendIndex);

// 각 배열 항목에서 작동하는 함수를 받아들인다.
// 첫번째 매개변수는 배열의 각 요소이고, 두번째 매개변수(선택적)는 배열의 각 요소의 인덱스이다.

// forEach() 메서드에 사용되는 함수는 다음과 같이 메서드 호출에 직접 전달되는 경우가 많다.

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

// filter() 메서드는 특정 테스트를 기반으로 배열을 필터링한다.

const nums = [0, 10, 20, 30, 40, 50];
nums.filter( function(num) {
    return num > 20;
})

// 반환값 : [30, 40, 50]

// map()메서드는  매핑에 매개변수로 전달된 함수 내부에서 수행되는 작업에 따라 각 배열 항목을 다른 배열의 항목에 매핑하는 데 사용된다.

    [0,10,20,30,40,50].map( function(num) {
    return num / 10
})


// 반환값 : [0, 1, 2, 3, 4, 5]

// 객체로 작업하기

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}

const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(drone[key]);
});
console.log(result);


let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

 // Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

bestBoxers.get(1);

new Set();

const repetitiveFruits = ['apple', 'pear','apple', 'pear','plum','apple' ];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// Set(3) {'apple', 'pear', 'plum'} // 중복된 값이 제거된다.

// JS 기본 데이터 구조 외에도 네이티브가 아닌 사용자 정의 구조를 구축할 수 있다.

// 여기서 다루지 않은 고급 데이터 구조는 다음과 같다 :
// 큐 , 연결된 목록(단일링크 및 이중링크), 트리, 그래프