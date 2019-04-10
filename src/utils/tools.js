export const delay = (time, data) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, time);
});

export const routeMinDelay = (page, time) => Promise.all([
  import(`../routes/secure/${page}`),
  new Promise(resolve => setTimeout(resolve, time)),
]).then(([moduleExports]) => moduleExports);
