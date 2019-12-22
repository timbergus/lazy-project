export const delay = (time: number, data: any) => new Promise(resolve => {
  setTimeout(() => {
    resolve(data);
  }, time);
});

export const routeMinDelay = (page:string, time: number): Promise<any> => Promise
  .all([
    import(`../routes/secure_routes/${page}`),
    new Promise(resolve => setTimeout(resolve, time)),
  ])
  .then(([moduleExports]) => moduleExports);
