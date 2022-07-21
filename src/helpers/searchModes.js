export const debounce = (callback, time, debounceTimer) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback, time);
};

export const throttle = (callback, time, throttlePause) => {
    if (throttlePause) return;
   
    throttlePause = true;
     
    setTimeout(() => {
      callback();
      throttlePause = false;
    }, time);
  };