// Add squares

// const squares = document.querySelector('.squares');
// for (var i = 1; i < 365; i++) {
//   const level = Math.floor(Math.random() * 3);
//   squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
// }

var optionsV = document.getElementsByClassName("options-v")[0];

// var active = optionsV.getElementsByClassName("active")[0];
optionsV.querySelector('[to="left"]').addEventListener('click', next(), false)


function next(params) {
    console.log('yeah Done!'); 
}

// previous.setAttribute("class", "option-item fade");
// next.setAttribute("class", "option-item fade");
