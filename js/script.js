var min = 1;
var max = 10;

var randNumber1 = getRandomInt(min, max);
var randNumber2 = getRandomInt(min, max);

var sum = randNumber1 + randNumber2;

var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');

var operatorChange = document.getElementById('operatorChange');

var operator = document.getElementById('operator');

var result = document.getElementById('result');

var reload = document.getElementById('reload');

var answers = document.getElementsByClassName('answers');

var alert = document.getElementById('alert');

var length = answers.length;

number1.textContent = randNumber1;
number2.textContent = randNumber2;

var randNumbers = [];

var randOrder = getRandomInt(0, length);


changeOperator(operatorChange, operator, randNumber1, randNumber2, sum);


pushArray(randNumbers, min, max);


checkSameNumber(randNumbers, min, max, length);


putAnswer(randNumbers, sum, randOrder, length);


showNumbers(answers, randNumbers);


chooseAnswer(answers, alert, sum);


windowReload(reload);


function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function pushArray(randNumbers, min, max)
{
    for(var i=0; i<length; i++){
        randNumbers.push(getRandomInt(min, max));
    }
}

function checkSameNumber(randNumbers, min, max, length)
{
    for(var i=0; i<length; i++){
        for(var j=i+1; j<length; j++){
            if(randNumbers[i] == randNumbers[j]){
                randNumbers[j] = getRandomInt(min, max);
            }
        }
    }
}

function putAnswer(randNumbers, sum, randOrder, length)
{
    var check = 0;
    for(var i=0; i<length; i++){
        if(randNumbers[i] == sum){
            check = 1;
        }
    }

    if(!check){
        randNumbers[randOrder] = sum;
    }
}

function showNumbers(answers, randNumbers)
{
    for(var i=0; i<length; i++){
        answers[i].textContent = randNumbers[i];
    }
}

function changeOperator(operatorChange, operator, randNumber1, randNumber2, sum)
{
    operatorChange.addEventListener('change', function(){
        operator.textContent = this.value;
        
        if(this.value == '+'){
            sum = randNumber1 + randNumber2;
        } else if(this.value == '-'){
            sum = randNumber1 - randNumber2
        } else if(this.value == '*'){
            sum = randNumber1 * randNumber2
        } else if(this.value == '/'){
            sum = randNumber1 / randNumber2
        }

        console.log(this.value);
        console.log(sum);
    });
}

function chooseAnswer(answers, alert, sum)
{
    for (var i = 0; i < answers.length; i++) {
        answers[i].onclick = function() {
            if(this.textContent == sum){
                result.textContent = sum;
                alert.textContent = "Dogry";
                result.classList.remove("text-danger");
                result.classList.add("text-success");
                alert.classList.remove("fade");
                alert.classList.remove("alert-danger");
                alert.classList.add("alert-success");
                timeFunction(1000);
            } else {
                result.textContent = this.textContent;
                alert.textContent = "Ýalňyş";
                result.classList.add("text-danger");
                alert.classList.remove("fade");
                alert.classList.add("alert-danger");
                timeFunction(10000);
            }
        };
    }
}

function windowReload(reload)
{
    reload.addEventListener('click', function(){
        reloadFunc();
    });
}

function reloadFunc()
{
    window.location = window.location.href;
}

function timeFunction(delay)
{
    setTimeout(function(){ reloadFunc(); }, delay);
}