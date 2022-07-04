'use strict';

const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const day = document.getElementById('day-week');
const todayDay = new Date();

const days = function () {
  week.forEach(function(item, i) {
    let newdiv = document.createElement('div');
    if (i === +todayDay.getDay()-1) { 
      newdiv.classList.add('today'); 
      newdiv.textContent = week[i];
    }
    if (item == 'сб' || item == 'вс') { 
      newdiv.classList.add('italic'); 
      newdiv.textContent = week[i];
    } else {
        newdiv.textContent = week[i]; 
    }
    day.appendChild(newdiv);
  });
};
days();