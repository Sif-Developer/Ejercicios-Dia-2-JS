// // let age = 18;

// // if (age != 18) {
// //   console.log("Eres mayor de edad");
// // } else {
// //   console.log("Eres menor de edad");
// // }
// // // console.log(age >= 18);
// // // // switch (true) {
// // // //   case age >= 18:
// // // //     console.log("Eres mayor de edad");
// // // //     break;
// // // //   default:
// // // //     console.log("Eres menor de edad");
// // // //     break;
// // // // }

// // let person = {
// //   age: 10,
// //   sonOfBoss: false,
// //   height: 145,
// //   beauty: true,
// //   dressCode: true,
// // };
// // // person.sonOfBoss == true
// // if ('10' === 10) {
// //   console.log("si lo es");
// // } else {
// //   console.log("no lo es");
// // }
// // if (person.age >= 18) {
// //   console.log("Eres mayor de edad");
// // } else if (person.sonOfBoss !== false) {
// //   console.log("No eres mayor de edad pero eres el hijo del jefe");
// // } else {
// //   console.log("Eres menor de edad");
// // }

// // // switch (true) {
// // //   case age >= 18:
// // //     console.log("Eres mayor de edad");
// // //     break;
// // //   case person.sonOfBoss == true:
// // //     console.log("No eres mayor de edad pero eres el hijo del jefe");
// // //     break;
// // //   default:
// // //     console.log("Eres menor de edad");
// // //     break;
// // // }

// // if ((person.age == 11 || person.age >= 18) || person.dressCode ==true) {
// //   console.log("Eres mayor de edad y tienes "+ person.age + " años");
// // } else if (person.sonOfBoss == true) {
// //   console.log("No eres mayor de edad pero eres el hijo del jefe");
// // } else if(person.height >= 150 && person.dressCode ==true) {
// //     console.log('no pasas por bajit@ y por no saber vestir')
// // } else if(person.height >= 145 && person.beauty){
// //     console.log('puedes pasar por guapo')
// // } else {
// //   console.log("No pasas");
// // }

// // // let diaActual = new Date();
// // // const dia_de_la_semana = diaActual.getDay();
// // // console.log("dia de la semana", dia_de_la_semana);
// // // switch (2) {
// // //   case 1:
// // //     console.log("Es Lunes");
// // //     break;
// // //   case 2:
// // //     console.log("Es Martes");
// // //     break;
// // //   case 3:
// // //     console.log("Es Miércoles");
// // //     break;
// // //   case 4:
// // //     console.log("Es Jueves");
// // //     break;
// // //   case 5:
// // //     console.log("Es viernes");
// // //     break;
// // //   case 6:
// // //   case 7:
// // //     console.log("Es fin de semana");
// // //     break;
// // //   default:
// // //     console.log("Ese día no existe");
// // // }

// // // let a = 1;

// // // let b = 2;

// // // let suma = 1 + 1

// // // let resta = b - a;
// // //  let x = 2**a
// // // console.log(x)

// // let x = 10;

// // //  x = x + 5;

// // x += 5;

// // console.log(++x);
// // console.log(x);

// // if(true || false){
// //     console.log('entras')
// // }else{
// //     console.log('no entras')
// // }

// // const age = '17'

// // const firstName = 'Iván'

// // // if (age <= 17 || firstName === "Iván") console.log('Eres menor de edad o te llamas '+ firstName)

// // if (age === 17 && firstName == "Iván") console.log('Eres menor de edad y te llamas '+ firstName)

// // if (!firstName) console.log( firstName + ' no está definido')

// // const age = 18;

// // const eresMayorDeEdad = age >= 18  ? "Eres mayor de edad" : "No eres mayor de edad";

// // console.log(eresMayorDeEdad)

// const vueltas = [1,2,3,4,5,6,7,8,9,10];

// //  for (let i = 0; i < vueltas.length; i++) {
// //         console.log('Vuelta nº ' + vueltas[i]);
// //  }

// //  let i = 0;

// //  while (i < vueltas.length) {
// //         console.log("Vuelta nº " + vueltas[i]);
// //         i++;
// //  }

// for (const vuelta of vueltas) {
//     console.log(vuelta)
// }

// for (const vuelta in vueltas) {
//     // if(vuelta <= 3){
//         console.log(vueltas[vuelta])
//     // }
// }

// const person = { fname: "John", lname: "Doe", age: 25 };

// for (let propiedad in person) {
//        console.log(person[propiedad])
//     //    person.fname
//     //    person.lname
//     //    person.age
// }

//  for (let pedro of vueltas) {
//     console.log("Vuelta nº " + pedro);
// }

// PRÁCTICA

//Ej 1

let obj = {
    a: {
      b: true,
      c: ["hola", 1, 2],
    },
    d: 5,
    f: "fras",
  };
  
  console.log(typeof obj);
  if (typeof obj === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  
  if (typeof obj.a.b === "boolean") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  
  if (typeof obj.a.c[1] === "number") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  
  if (typeof obj.d === "number") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  if (obj.d > 4 && obj.d < 8) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  if (typeof obj.f === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  
  if (obj.f.length === 4) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  
  let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];
  
  const mayores25 = []
  const menores25 =[]
  for (const persona of gente) {
    if (persona.edad > 25) {
      mayores25.push(persona)
    }else{
      menores25.push(persona)
    }
  }
  
  console.log(menores25)
  
  // Crea un array con la gente que empieza por J. Utiliza el bucle for of y muéstralo por consola.
  const empiezaJ = []
  
  for (const persona of gente) {
      if(persona.nombre.startsWith('J')){
          empiezaJ.push(persona)
      }
  }
  console.log(empiezaJ)