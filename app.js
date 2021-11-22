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
// //-----  ENUM TYPES  ------------------------------------------------
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["READ_ONLY"] = 3] = "READ_ONLY";
    Role[Role["AUTHOR"] = 5] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Maximillian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    role2: Role.READ_ONLY
};
//let favoriteActivities: any[];
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.role);
console.log(person.role2);
