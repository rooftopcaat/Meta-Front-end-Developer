// html 양식을 이용한 텍스트 표시

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')
// 입력 필드의 속성 설정

document.body.innerText = '';
// body의 내용을 지우고 다시 채움
document.body.appendChild(h1);
document.body.appendChild(input);

