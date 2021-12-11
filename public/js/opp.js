// let person = {
//   name: "Ali",
//   age: 45,
// };

// console.log(person);

// function person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.cnic;
// }

// class Person {
//   constructor(name, age, cnic) {
//     this.name = name;
//     this.age = age;
//     this.cnic = cnic;
//     this.dob = new Date();
//   }

//   SayName() {
//     return this.name;
//   }

//   getAge() {
//     return this.dob.getFullYear();
//   }
// }

// // let person1 = new Person();
// // person1.name = "Ali";
// // person1.age = 20;
// // person1.cnic = 12456;
// let person2 = new Person("umer", 45, 46546465);

// // console.log(person1);
// console.log(person2.SayName());

// class Doctor extends Person {
//   constructor(name, age, cnic, hospital) {
//     super(name, age, cnic);
//     this.hospital = hospital;
//   }
// }

// let doc = new Doctor("Shoiab", 45, 12345, "Meyo");
// let doc1 = new Doctor("ali", 45, 12345, "Meyo");
// console.log(doc.SayName());
// console.log(doc1.SayName());
// console.log(doc1.getAge());



class babar{
  constructor(ID,RollNo,FatherName){
       this.ID = ID;
       this.RollNo = RollNo;
       this.FatherName=FatherName;
  }
}


// var bab= new babar(123,15,"Abdul Waheed");
// console.log(bab);

var bab=new babar();
bab.FatherName="abdul Waheed"
bab.ID=1223;
bab.RollNo=15;
console.log(bab.ID);
console.log(bab.FatherName);
console.log(bab.RollNo);



class haroon extends babar{
  constructor(ID,RollNo,FatherName,clg,address,course){
    super(ID,RollNo,FatherName);
    this.clg=clg;
    this.address=address;
    this.course=course;
  }
  
}


var har= new haroon(123,16,"Abdul Waheed","EVS","ABC","javascript");
console.log(har);

console.log(har.ID);