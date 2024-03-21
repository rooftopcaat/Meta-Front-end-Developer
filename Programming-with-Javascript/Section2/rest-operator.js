const top7 = ['Colosseum', 'Roman Forum', 'Vatican', 'Trevi Fountain', 'Pantheon', 'Piazza Venezia', 'Palatine Hill'];

// 나머지 연산자와 구조 분해 할당(디스트럭쳐링) 기법을 사용해 상위 3곳을 따로 뽑아내고, 나머지는 다음 방문을 위해 저장.

const [first, second, third, ...secondVisit] = top7;

// ...secondVisit은 나머지 요소를 모두 포함하는 배열이다.

// rest 연산자는 함수에서도 유용하다. 예로, 여러 가격에 세금을 더하는 함수를 만들 때 나머지 매개변수를 사용할 수 있다.

function addTaxToPrices(taxRate, ...prices) {
    return prices.map(price => price + price * taxRate);
}

// 1. prices로 전달된 모든 가격 인자들을 배열로 만듦.
// 2. map() 메서드를 사용해 각 가격에 세금을 더함.
// 3. 새로운 배열을 반환함.