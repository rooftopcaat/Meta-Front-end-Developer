class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}

// this는 미래 객체 인스턴스이다.

// 1. 이 코드를 통해 Train 클래스의새 인스턴스를 만들 수 있다.
// 2. 내가 빌드하는 Train 클래스의 각 객체 인스턴스는 color, lightsOn의 자체 사용자 정의 속성을 갖는다.

var myFirstTrain = new Train('red', false);
var mySecondTrain = new Train('blue', true);

console.log(myFirstTrain);
console.log(mySecondTrain);

// 클래스에 메서드를 추가할 수 있으며, 이런 메서드는 향후 Train 클래스의 모든 인스턴스 객체에서 공유된다

class Train2 {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var train4 = new Train2('green', false);

train4.toggleLights();
train4.lightsStatus();
train4.getSelf();
train4.getPrototype();

// 결론적으로 자바스크립트의 클래스 구문을 사용하면 객체 인스턴스 자체에 존재하는 개별 객체의 데이터와 프로토타입에 존재하고 모든 객체 인스턴스가 공유하는 공유 객체의 기능(메서드)을 명확하게 구분할 수 있다.

// 이것이 전부는 아니다. 베이스 클래스에서 상속한 후 다음 상속된 동작을 재정의하는 방식으로 다형성을 구현할 수 있다.

// class HighSpeedTrain extends Train2 {
//     constructor(passengers, highSpeedOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;
//     }
// }

// 자바스크립트에서 super는 하위 클래스의 슈퍼클래스로부터 어떤 속성을 상속받을지 지정하는 데 사용된다.
// HighSpeedTrain 크래스는 Train2 슈퍼클래스의 color, lightsOn 즉 모든 속성을 상속하도록 선택됬다.
// 다음으로, 생성자 안에 HighSpeedTrain 클래스의 고유한 속성인 passengers, highSpeedOn을 추가했다.
// 그런 다음 생성자 본문에서 super키워드를 사용해 Train2 클래스에서 상속된 속성을 전달한다.
// 이후 passengers, highSpeedOn 속성을 각각 this.에 할당한다.
// 상속된 속성 외에도, toggleLights, lightsStatus, getSelf, getPrototype 메서드는 자동으로 상속된다.

// 이제 HighSpeedTrain 클래스에 특정 메서드를 추가한다.

// class HighSpeedTrain extends Train2 {
//     constructor(passengers, highSpeedOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn; //고속 모드를 토글할 수 있는 고속 열차 메서드로 변했다.
//         console.log('High speed status:', this.highSpeedOn);
//     }
// }

// 이후 슈퍼클래스의 메서드 작동방식이 마음에 들지 않아 하위 클래스에서 다르게 구현하고 싶다면, 다음과 같이 메서드를 재정의할 수 있다.

class HighSpeedTrain extends Train2 {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

// 이제 기차 객체를 빌드해보자.

var train5 = new Train2('blue', false);
var highSpeedTrain1 = new HighSpeedTrain(200, true, 'red', true);

train5.toggleLights();
train5.lightsStatus();
highSpeedTrain1.toggleLights();

// toggleLights() 메서드가HighSpeedTrain 클래스에서Train 클래스에서와 어떻게 다르게 동작하는지 주목하자.
// 이것이 바로 다형성이다. 동일한 메서드가 서로 다른 클래스에서 다르게 동작한다. 갈래를 나누는 느낌.

// 클래스 인스턴스를 다른 클래스의 생성자로 사용하기

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //