function receivesAFunction(callback){
  // call the callback function
  callback();
}
function returnsANamedFunction() {
  // define a named function
  function namedFunction() {
    // function body
  }
  // return the named function
  return namedFunction;
}
function returnsAnAnonymousFunction() {
  // define an anonymous function
  const anonymousFunction = function() {
    // function body
  };
  // return the anonymous function
  return () =>anonymousFunction ;('')
  
}
