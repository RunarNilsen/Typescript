//----------- Typescript basics and basic types -------------------------------
/*
number --> means all number type, string, boolean
*/
//--------------------------------------------------------------------
// function add(n1: number, n2: number, showResult:boolean):number {
//     if(showResult){
//         console.log(n1+n2);
//     }else{
//         return n1 + n2;
//     }
  
//   }
  
//   let number1:number; // better to write like that
//   number1 = 5;
//   const number2 = 2.8;
//   const printResult = true;
  
//   const result = add(number1, number2, printResult);
//   console.log(result);
  //--------------------------------------------------------------------
  

//   const person: {
//       name:string;
//       age:number;
//   } = {
//     name: 'Maximillian',
//     age: 30

//   }
//   console.log(person.name)
//--------------------------------------------------------------------
// //-----  ARRAY TYPES  ------------------------------------------------
//   const person = {
//     name: 'Maximillian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking']
//   }
//   //let favoriteActivities: any[];
//   let favoriteActivities: string[];
//   favoriteActivities = ['Sports'];
//   console.log(person.name)

//   for (const hobby of person.hobbies) {
//      console.log(hobby.toUpperCase()) 
//   }

//--------------------------------------------------------------------
// //-----  TUPPLE TYPES  ------------------------------------------------

//   const person = {
//     name: 'Maximillian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
//   }

//   person.role.push('admin');
//   person.role[1]=10
//   //let favoriteActivities: any[];
//   let favoriteActivities: string[];
//   favoriteActivities = ['Sports'];
//   console.log(person.name)

//   for (const hobby of person.hobbies) {
//      console.log(hobby.toUpperCase()) 
//   }
//--------------------------------------------------------------------
// // //-----  ENUM TYPES  ------------------------------------------------
// enum Role {ADMIN='Admin', READ_ONLY=3, AUTHOR=5}
//   const person = {
//     name: 'Maximillian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN,
//     role2: Role.READ_ONLY
//   }

//   //let favoriteActivities: any[];
//   let favoriteActivities: string[];
//   favoriteActivities = ['Sports'];
//   console.log(person.role)
//   console.log(person.role2)

//--------------------------------------------------------------------
// // //-----  ANY TYPES  ------------------------------------------------

// let variable:any; //takes any type
// variable=5;
// let variable2:any[]; // takes any type inside the array
// variable2 = [1, 'hahaha', true, 0.5]

//--------------------------------------------------------------------
// // //-----  UNION TYPES  ------------------------------------------------






