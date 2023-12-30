                //solution 1//

function receivesAFunction(callback) 
{
    console.log('calling the callback function');
    callback();
}



               //solution 2//

  function returnsANamedFunction() 
{
    return function namedFunction() {
      console.log('this functions named!');
    };
}


                //solution 3//
    function returnsAnAnonymousFunction() 
{
    return function() {
      console.log('this function is anonymous!');
    };
}               
   