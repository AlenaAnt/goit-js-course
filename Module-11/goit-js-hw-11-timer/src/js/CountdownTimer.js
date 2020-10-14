export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this._selector = selector;
    this._targetDate = targetDate;
    this._timerId = null;
    this._IsNoActivFlag = true;
  }
  getDataCalc() {
    let time = this._targetDate - Date.now();
    return {
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      secs: Math.floor((time % (1000 * 60)) / 1000),
    };
  }
  addZero(val) {
    let str = val + '';
    return str.padStart(2, '0');
  }
  startTimerData() {
    if (this._IsNoActivFlag) {
      this._IsNoActivFlag = false;
      this._timerId = setInterval(() => {
        const dataObj = this.getDataCalc();
        const timerRef = document.querySelector(this._selector);
        timerRef.querySelector('[data-value="days"]').textContent =
          dataObj.days;
        timerRef.querySelector(
          '[data-value="hours"]',
        ).textContent = this.addZero(dataObj.hours);
        timerRef.querySelector(
          '[data-value="mins"]',
        ).textContent = this.addZero(dataObj.mins);
        timerRef.querySelector(
          '[data-value="secs"]',
        ).textContent = this.addZero(dataObj.secs);
      }, 1000);
    }
  }
  stopTimerData() {
    clearInterval(this._timerId);
    this._IsNoActivFlag = true;
  }
}
