abstract class Employee {
    constructor(public name:String,public exp:number){}
    abstract getBaseSalary():number;
    showProfile(){
        console.log(`Name : ${this.name}`)
    }
}
class Programmer extends Employee{
    getBaseSalary(): number {
        return 25000;
    }
}
class Manager extends Employee{
    getBaseSalary(): number {
        return 50000 ;
    }
}
class CEO extends Employee{
    getBaseSalary(): number {
        return 5000000 ;
    }
}
const employees :Employee[] =[new Programmer("Tu",5), new Manager ("Devil Rat",2), new Programmer("Toy",1),new CEO ("Terl",20)];
employees.forEach(emp=>{
    emp.showProfile();
    console.log(`มีตำแหน่งงาน${emp.constructor.name}เงินเดือนเริ่มต้น${emp.getBaseSalary()}`);
    const plus: number = emp.getBaseSalary()*0.1*emp.exp;
    console.log(`ค่าประสบการณ์${plus}บาท รวม${plus + emp.getBaseSalary()}`);
})