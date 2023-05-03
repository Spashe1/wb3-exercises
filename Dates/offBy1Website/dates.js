"use strict"
//window.onload=init;
//function init(){
    const convertBtnEl = document.getElementById('convertBtn');
    convertBtnEl.onClick = onConvertBtnClicked;
//}
function onConvertBtnClicked(){
    const inputEl = document.getElementById('dateInput');
   const userDate = new Date ('2023-03-02');

    const messageEl = document.getElementById("p1");
    messageEl.innerHTML = userDate.toString();
}