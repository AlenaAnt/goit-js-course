import CountdownTimer from './CountdownTimer';

const novemberTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 30, 2020'),
});
console.log(novemberTimer.getDataCalc());
novemberTimer.startTimerData();
novemberTimer.startTimerData();
novemberTimer.startTimerData();
setTimeout(() => {
  novemberTimer.stopTimerData();
}, 5000);
setTimeout(() => {
  novemberTimer.startTimerData();
}, 8000);
