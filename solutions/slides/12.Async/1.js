/* Callback */
function fetchWithCallback(value, cb) {
  setTimeout(function() {
    cb(value);
  }, 1000);
}

fetchWithCallback('finished', function(result) {
  console.log(result);
});

console.log('first')

/* Callback hell! */

// https://www.google.com/search?q=callback+hell&rlz=1C5CHFA_enBE817BE817&tbm=isch&source=iu&ictx=1&fir=Ln_HesL3zLbmRM%253A%252CYbZSMeOQX8iO3M%252C_&vet=1&usg=AI4_-kT2c88c_9Zc48fHyjvsxVktHoU1ng&sa=X&ved=2ahUKEwj4j5T4zefkAhVC46QKHb4eC6QQ9QEwAnoECAkQCQ#imgrc=B-jgUUChyuRs_M:&vet=1

fetchWithCallback('finished', function(result) {
  fetchWithCallback(result, function(result2) {
    console.log(result2);
  });
});

/* Promise - represent the completion or failure of an async operation */

/* Construction - Resolve - Reject */

function fetchAndResolve() {
  return new Promise(function(resolve, reject) {
    resolve('resolved');
  });
}

fetchAndResolve()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(result) {
    console.log(result);
  });

function fetchAndReject() {
  return new Promise(function(resolve, reject) {
    reject('rejected');
  });
}

fetchAndReject()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(result) {
    console.log(result);
  });

/* Chaining */

fetchAndResolve()
  .then(function(result) {
    return result.toUpperCase();
  })
  .then(function(result) {
    return result.charAt(0);
  })
  .then(function(result) {
    console.log(result);
  });

/* Chainin reject */

fetchAndReject()
  .then(function(result) {
    return result.toUpperCase();
  })
  .then(function(result) {
    return result.charAt(0);
  })
  .then(function(result) {
    console.log(result);
  })
  .catch(function(result) {
    console.log(result);
  });

/* We can put catch anywhere */

fetchAndReject()
  .then(function(result) {
    return result.toUpperCase();
  })
  .then(function(result) {
    return result.charAt(0);
  })
  .catch(function(result) {
    return 'fallback if error';
  })
  .then(function(result) {
    console.log(result);
  });

/* Finally */

fetchAndResolve()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(result) {
    console.log(result);
  })
  .finally(function() {
    console.log('finally');
  });

/* Promise.all */

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

Promise.all([resolveAfter(1000), resolveAfter(200)]).then(function(result) {
  console.log(result);
});

Promise.all([resolveAfter(1000), rejectAfter(200), rejectAfter(100)])
  .then(function(result) {
    console.log(result);
  })
  .catch(function(result) {
    console.log(result);
  });

/* Promise.race */

Promise.race([resolveAfter(1000), resolveAfter(200)]).then(function(result) {
  console.log(result);
});

Promise.race([resolveAfter(1000), rejectAfter(200), rejectAfter(100)])
  .then(function(result) {
    console.log(result);
  })
  .catch(function(result) {
    console.log(result);
  });
