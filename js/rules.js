const rulesBtn = document.querySelector('.rules');
const rulesPop = document.querySelector('.rulesPop');
const rulesClose = document.querySelector('.letsGo')

function popUp() {
    rulesPop.style.display = "initial";
    setTimeout(() => {
    rulesPop.style.opacity = "1";
}, 100)
    document.querySelector('#content').style.opacity = "0";
}
rulesBtn.addEventListener('click', popUp);

function close() {
    rulesPop.style.opacity = "0";
    setTimeout(() => {
        rulesPop.style.display = "none";
    }, 1000)
    document.querySelector('#content').style.opacity = "1";
}
rulesClose.addEventListener('click', close);