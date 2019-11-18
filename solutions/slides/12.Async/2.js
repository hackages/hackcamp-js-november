/* Async - Await */

function resolveAfter(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(`resolved after ${ms} ms`);
    }, ms);
  });
}
function rejectAfter(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(`rejected after ${ms} ms`);
    }, ms);
  });
}

async function asyncResolve() {
  let result = await resolveAfter(1000);
  console.log(result);
}

asyncResolve();
console.log('first');

(async function() {
  async function asyncResolve() {
    let result = await resolveAfter(1000);
    return `${result} from async`;
  }

  let newResult = await asyncResolve();
  console.log(newResult);
})();

/* Reject ? */

(async function() {
  async function asyncReject() {
    let result = await rejectAfter(1000);
    return `${result} from async`;
  }

  asyncReject();
})();

(async function() {
  async function asyncReject() {
    try {
      let result = await rejectAfter(1000);
      return `${result} from async`;
    } catch (error) {
      console.log('error :(');
    }
  }
  asyncReject();
})();
