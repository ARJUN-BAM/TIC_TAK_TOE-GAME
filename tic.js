const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});
var temp = 0;
function handleClick(event) {
    const cell = event.target;
    if (cell.textContent == '-' && temp != 1) {
        cell.textContent = 'X';
        temp = 1;
    }
    else if (cell.textContent == '-' && temp == 1) {
        cell.textContent = 'O';
        temp = 0;
    }
    checkwinner();
}
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
const scx = document.querySelector('.score-x');
const sco = document.querySelector('.score-o');
let x = 0;
let o = 0;
let result = 0;
const imp = document.querySelector('.win-loss');
function checkwinner() {
    for (let pattern of winpatterns) {
        let val1 = cells[pattern[0]].innerHTML;
        let val2 = cells[pattern[1]].innerHTML;
        let val3 = cells[pattern[2]].innerHTML;
        if (val1 != "-" && val2 != "-" && val3 != "-") {
            if (val1 == val2 && val2 == val3 && result == 0) {
                imp.textContent = `Result : ${val1} is the Winner`;
                result = 1;
                if (val1 == 'X') {
                    x += 1;
                }
                else if (val1 == 'O') {
                    o += 1;
                }
                scx.textContent = `X : ${x} |`;
                sco.textContent = `| ${o} : O`;
            }
        }
    }
}
const res = document.querySelector('.reset-game');
res.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.innerHTML = '-';
    })
    result = 0;
    setTimeout(() => {
        imp.textContent = `Result : Who'll be Winner`;
    }, 1000)
    temp = 0;
})
