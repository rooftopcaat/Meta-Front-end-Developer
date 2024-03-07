// ES6의 기능을 사용하면 방어적 코딩 접근 방식으로 적은 노력을 들여 구현할 수 있다.

// 기본 매개변수가 설정되지 않은 함수 선언

// function noDefaultParams(number) {
//     console.log('Result:', number * number);
// }
//
// noDefaultParams(5); // Result: 25
// noDefaultParams(); // NaN

// JS의 동적 특성 때문에 에러를 발생시키진 않지만, 함수를 호출할 때 매개변수를 전달하지 않으면 결과가 NaN이 된다.

// 이제 기본 매개 변수를 사용한 개선된 함수를 만들어보자.

function withDefaultParams(number = 10) {
    console.log('Result:', number * number);
}

// 인수를 전달하지 않아도 기본 인수 값으로 실행되는 함수를 만들 수 있으며, 사용자 지정 인수 값을 전달하고 유연하게 처리할 수 있다.

class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;

        }// console.log로 출력
        return "The value of bool1 is incorrect";
    }
}

var fail = new NoDefaultParams(1,2,3,"Sum :", false);// The value of bool1 is incorrect
console.log(fail.calculate()); // The value of bool1 is incorrect

var success = new NoDefaultParams(1,2,3,"Sum :", true);
console.log(success.calculate());


// 클래스를 사용해 상속 계층을 구축할 때 기본 매개 변수를 사용해 매우 유연한 코드를 작성할 수 있다.