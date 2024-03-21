let top3 = ['Colosseum', 'Trevi Fountain', 'Vatican City'];

function showItinerary(place1, place2, place3) {
    console.log(`Visit ${place1}`);
    console.log(`Then visit ${place2}`);
    console.log(`Then visit ${place3}`);
}

//스프레드 연산자 없는 함수 실행

showItinerary(top3[0], top3[1], top3[2]);

// 상위 7개 여행지로 확장

let top7 = ['Pantheon', 'Roman Forum', 'Palatine Hill', 'Piazza Navona', 'Colosseum', 'Trevi Fountain', 'Vatican City'];

// 스프레드 연산자를 사용한 함수 실행

showItinerary(...top7);

// 스프레드 연산자를 사용하면 배열의 모든 요소를 함수의 인자로 전달한다 [하나하나 전달하는 번거로움이 없음]

