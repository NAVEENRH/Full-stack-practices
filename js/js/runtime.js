console.log("app started");

// async
setTimeout(function () {
  console.log("TASK 1");
}, 1000);

setTimeout(function () {
  console.log("some task here 2");
}, 0);

setTimeout(function () {
  console.log("some task here 3");
}, 0);

console.log("app finished");
// ui block

// sync => async
