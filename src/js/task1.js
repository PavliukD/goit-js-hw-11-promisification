 export const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true){
        resolve (ms)
      }
    }, ms)
  })
};


export const logger = time => console.log(`Resolved after ${time}ms`);

