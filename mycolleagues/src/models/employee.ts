export class Employee {
  id: string;
  firstname: string;
  lastname: string;
  specialization: string;
  age: number;
  src: string;
  level: string;
  unittype: string;
  unitmanager: string;
  manager: string;
  constructor(
    id: string,
    firstname: string,
    lastname: string,
    specialization: string,
    age: number,
    src: string,
    level: string,
    unittype: string,
    unitmanager: string,
    manager: string
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.specialization = specialization;
    this.age = age;
    this.src = src;
    this.level = level;
    this.unittype = unittype;
    this.unitmanager = unitmanager;
    this.manager = manager;
  }
}
