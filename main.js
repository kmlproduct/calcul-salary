var btn = document.getElementById('btn');
var btnn = document.getElementById('btnn');
var myInputArticle = document.getElementById('id-article');
var myInputPrice = document.getElementById('id-price');
var myStoraage = document.getElementById('storage');
var myInptSalary = document.getElementById('salary');
var mySpanSalary = document.getElementById('span-salary');
var myCumul = document.getElementById('cumul')

btnn.onclick = function () {
    // if the salary is > 1000 :input article and price iihas disabled false
    if (myInptSalary.value == "") {
        alert("add your salary")
        return;
    };

    if (mySpanSalary.innerText + parseInt(myInputPrice.value) > 1000) {
        myInputPrice.disabled = false;
        myInputArticle.disabled = false;

    }
    // 
    var toLocal = localStorage.setItem('salary', mySpanSalary.innerText);
    var getLocal = localStorage.getItem('salary');
    mySpanSalary.innerText = parseInt(getLocal) + parseInt(myInptSalary.value) + ".00";


    myInptSalary.value = ""
};

btn.addEventListener('click', function () {
    if (myInputArticle.value == "") {
        alert('Add your Article ?!');
        return;
    } else if (myInputPrice.value == "") {
        alert('Add your Price ?!');
        return;
    }


    var x = `${myInputArticle.value }: ${myInputPrice.value}.00 DH`;
    var y = parseInt(mySpanSalary.innerText) - parseInt(myInputPrice.value);
    var z = parseInt(myInputPrice.value) + parseInt(myCumul.innerText);

    if ((y <= 1000)) {
        alert('you can not buy anymore');
        myInputPrice.disabled = true;
        myInputArticle.disabled = true;
        return;
    }

    var myEl = document.createElement('div');
    var el = document.body.appendChild(myEl);
    myStoraage.appendChild(el).innerText = x;
    mySpanSalary.innerText = y + ".00";
    myCumul.innerText = z + '.00';
    myInputArticle.value = "";
    myInputPrice.value = "";

});
// show and hid placeholder
var AllInput = document.querySelectorAll('input');
for (var i = 0; i < AllInput.length; i++) {
    var getAttribute = AllInput[i].getAttribute('placholder')

    AllInput[i].onfocus = function () {
        this.placeholder = '';
    }
    AllInput[i].onblur = function () {
        this.placeholder = "write your value"
    }
}

// show and hid placeholder