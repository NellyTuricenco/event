element2.onclick = function (evt) {
  var phase = evt.eventPhase;
  myP.innerHTML = 'You clicked the second button';
  console.log('using DOM properties', phase);
};


element3.onclick = function handler(evt) {
  var phase = evt.eventPhase;
  myP.innerHTML = 'You clicked the third button';
  console.log('using addEventListener', phase);
};
element3.addEventListener('click', handler);

// function clickMe() {
//     this.first = function () {
//         alert('You clicked the first button');
//     };
// };
// this.second = function () {
//     alert('You clicked the second button');
// };
// this.third = function () {
//     alert('You clicked the third button');
// };

// var self = this;

// elem.onclick = function (e) {
//     var target = e.target;
//     var action = target.getAttribute('data-action');
//     if (action) {
//         self[action]();
//     }
// };

// new clickMe(clickMe);
