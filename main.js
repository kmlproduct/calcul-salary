var btn = document.getElementById('btn');
var btnn = document.getElementById('btnn');
var myInputArticle = document.getElementById('id-article');
var myInputPrice = document.getElementById('id-price');
var myStoraage = document.getElementById('storage');
var myInptSalary = document.getElementById('salary');
var mySpanSalary = document.getElementById('span-salary');
var myCumul = document.getElementById('cumul')

btnn.onclick = function () {
    var toLocal = localStorage.setItem('salary', mySpanSalary.innerText);
    var getLocal = localStorage.getItem('salary');
    mySpanSalary.innerText = parseInt(getLocal) + parseInt(myInptSalary.value)


};
// btn.onclick = function () {
//     myStoraage.innerText = `${myInputArticle.value }:   ${myInputPrice.value}.00 DH`
//     mySpanSalary.innerText = parseInt(mySpanSalary.innerText) - parseInt(myInputPrice.value)
//     var myEl = document.createElement('div');
//     var el = document.body.appendChild(myEl);
//     myStoraage.appendChild(el).innerHTML = 'ggdgd'
// }


btn.addEventListener('click', function () {

    var x = `${myInputArticle.value }:   ${myInputPrice.value}.00 DH`;
    var y = parseInt(mySpanSalary.innerText) - parseInt(myInputPrice.value);
    var z = parseInt(myInputPrice.value) + parseInt(myCumul.innerText);


    var myEl = document.createElement('div');
    var el = document.body.appendChild(myEl);
    myStoraage.appendChild(el).innerText = x;
    mySpanSalary.innerText = y;
    myCumul.innerText = z + '.00';

})