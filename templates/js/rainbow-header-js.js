function toggleClass(classname) {
  let bingoh2 = document.querySelector('.bingoh2');

  setInterval(function () {
    // toggle element class.
    bingoh2.classList.toggle(classname);
  }, 1000);
}

toggleClass('bingo2');
