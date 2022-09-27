
const formField = document.querySelector(".form");
const buttonSubmit = document.querySelector(".form button");


formField.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    elements: { strike, step, amount }
  } = event.target;

  let delay = Number(strike.value);

  for (let position = 1; position <= Number(amount.value); position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay = delay + Number(step.value);
  };
});
  
function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
        
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay }); // Fulfill
      } else {
        reject({ position, delay }); // Reject
      }
    }, delay);
  });
};





