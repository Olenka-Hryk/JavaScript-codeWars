// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function showObjectKeys(obj){
    for (var key in obj){
      console.log(key);
    }
  }
  function showObjectValues(obj){
    for (var key in obj){
      console.log(obj[key]);
    }
  }
  var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
  console.log("keys of ob:")
  showObjectKeys(ob);
  console.log("values of ob:")
  showObjectValues(ob);




  function showObjectKeys(obj){
    for (var key in obj){
      console.log(key);
    }
  }
  function showObjectValues(obj){
    for (var key in obj){
      console.log(obj[key]);
    }
  }
  var arr=["one","two","three"];
  console.log("keys of arr:")
  showObjectKeys(arr);
  console.log("values of arr:")
  showObjectValues(arr);

  


  function showArrayValues(arr){
    for (var value of arr){
      console.log(value);
    }
  }