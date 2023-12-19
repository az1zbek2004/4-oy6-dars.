// let n=+prompt("Sonni kiriting");
// let counter=0;
// let sum=0;
// let i=2;

// while (counter<n) {
//     counter1=0;
//     let j=1;
//     while (j<=i) {
//         if (i%j==0) {
//             counter1++;
//         }
//         j++;
//     }

//     if (counter1==2) {
//         counter++;
//         console.log(i);
//         sum+=i;
//     }

//     i++;
// }

// console.log(sum);


        // FIRST NUMBER 
// let max;
// function maxThreeNumbers(a,b,c) {

//     if (a>b) {
//         max=a
//     }else{
//         max=b;
//     }

//     if (max<c) {
//         max=c;
//     }

//     return max;
// }


// console.log(maxThreeNumbers(4,20,5));



// SECOND NUMBER 

// function raqamdanSozga(raqam) {
//     let birliklar = {
//         0: 'nol', 1: 'bir', 2: 'ikki', 3: 'uch', 4: 'to\'rt',
//         5: 'besh', 6: 'olti', 7: 'yeti', 8: 'sakkiz', 9: 'to\'qqiz'
//     };

//     let onliklar = {
//         0: '', 1: 'o\'n', 2: 'yigirma', 3: 'o\'ttiz', 4: 'qirq',
//         5: 'ellik', 6: 'oltmish', 7: 'yetmish', 8: 'sakson', 9: 'to\'qson'
//     };

//     let birlik = raqam % 10;
//     let onlik = Math.trunc(raqam / 10);

//     let birlikSoz = birliklar[birlik];
//     let onlikSoz = onliklar[onlik];

//     switch (onlik) {
//         case 0:
//             return birlikSoz;
//         case 1:
//             if (birlik === 0) {
//                 return 'o\'n';
//             } else {
//                 return onlikSoz + ' ' + birlikSoz;
//             }
//         default:
//             if (birlik === 0) {
//                 return onlikSoz;
//             } else {
//                 return onlikSoz + ' ' + birlikSoz;
//             }
//     }
// }

// // Misol uchun funksiyani tekshirish:
// let son = 10; // O'zgartiring: istalgan 2 xonali son
// let soz = raqamdanSozga(son);
// console.log(son + ' -> ' + soz);



// THIRD NUMBERS 

// function toq(n) {
//     let i=1;
//     let counter=0;     
//     do {
//             counter++;
//             i+=2;
//             } while (n>=i);
    
//             return counter;
//     }
    
//     let n=+prompt("Sonni kiriting ")
//     console.log(toq(n));
    
    
    
    // FOURTH NUMBERS
    
    // function count(n) {
    // let i=1;
    // let counter=0;
    
    // do {
    
    // if (n%i==0) {
    //         counter++;
    //         console.log(i);
    // }
    
    // i++;
    // } while (n>=i);
    
    // return counter;
    
    // }
    
    // let n=+prompt("Sonni kiriting")
    // console.log(count(n));
    

    // FIFTH NUMBERS 

// function kvadratKub(n) {
//     let result;
//     if (n%3==0&&n%5==0) {
//         result=n**2;
//     } else {
//         result=n**3;
//     }

//     return result;
// }
//     let n=+prompt("Sonni kiriting")
//     console.log(kvadratKub(n));


    // SIXTH NUMBERS 

// function maxNumber(num1, num2) {
//     on1=Math.trunc(num1/10);
//     bir1=num1%10;
//     res1=on1*bir1;

//     on2=Math.trunc(num2/10);
//     bir2=num2%10;
//     res2=on2*bir2;

//     if (res1>res2) {
//         max=res1;
//     } else {
//         max=res2;
//     }

//     return max;
// }

// console.log(maxNumber(32, 52));


    // SEVENTH NUMBERS 

function tub(n) {
    counter=0;
    for (let i = 1; i <= n; i++) {
       if (n%i==0) {
        counter++;
       }        
    }

    if (counter==2) {
        result="Tub son";
    } else {
        result="Tub son emas"
    }

    return result;
}

console.log(tub(11));