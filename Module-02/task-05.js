const checkForSpam = function (message) {
  const STRING = ["spam", "sale"];
  const messageLowerCase = message.toLowerCase();
  //вход

  let resault;

  for (let i = 0; i < STRING.length; i++) {
    resault = messageLowerCase.includes(STRING[i]);
    if (resault === true) {
      break;
    }
  }

  //выход
  return resault;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// while(условие){

// }

// do{

// }while(условие)

// let rr=[1,5,7];
// rr[0]=rr[0]+10
// rr[1]=rr[1]+10
// rr[2]=rr[2]+10
// //[11,15,17]
// //i=i+1//i++
// for(let i=0;i=<2;i=i+1){
//   rr[i]=rr[i]+10

// }

// for ( el of rr ){//1 rr[0]
//   //rr[1]
//   //rr[2]

//   el=el+10

// }
