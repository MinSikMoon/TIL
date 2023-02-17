//1. 부모 class : 직원
class Employee {
  #name;
  #department;
  #monthlyWorkTime;
  #payPerWork;
  constructor(name, department, monthlyWokTime, payPerWork) {
    this.#name = name;
    this.#department = department;
    this.#monthlyWorkTime = monthlyWokTime;
    this.#payPerWork = payPerWork;
  }
  getMonthlySalary = () => {
    return this.#monthlyWorkTime * this.#payPerWork;
  };
}

//2. 정직원
class RegularEmployee extends Employee {
  static PAY_PER_WORK = 10000;
  constructor(name, department, monthlyWokTime) {
    super(name, department, monthlyWokTime, RegularEmployee.PAY_PER_WORK);
  }
}

//3. 계약직원
class TemporaryEmployee extends Employee {
  static PAY_PER_WORK = 8000;
  constructor(name, department, monthlyWokTime) {
    super(name, department, monthlyWokTime, TemporaryEmployee.PAY_PER_WORK);
  }
}

reg1 = new RegularEmployee("hi", "aa", 30);
temp1 = new TemporaryEmployee("aa", "bb", 30);

console.log(reg1.getMonthlySalary(), temp1.getMonthlySalary());
