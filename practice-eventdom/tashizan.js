function tashizan() {
    let l = document.querySelector('input#left');
    let left = Number(l.value);
    let r = document.querySelector('input#right');
    let right = Number(r.value);

    let sum = left + right;

    let ans = document.querySelector('span#answer');
    ans.textContent = sum;
}

let b = document.querySelector('button#calc');
b.addEventListener('click', tashizan);