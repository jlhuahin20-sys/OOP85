export{};
interface Taxable {
  applyTax(amount: number): number;
}
abstract class Worker {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  abstract calculatePay(): number;
  getDetails(): string {
    return `Name: ${this.name}`;
  }
}
class HourlyWorker extends Worker {
  private hourlyRate: number;
  private hoursWorked: number;

  constructor(name: string, hourlyRate: number, hoursWorked: number) {
    super(name); 
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }
  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}
class SalariedWorker extends Worker implements Taxable {
  private monthlySalary: number;

  constructor(name: string, monthlySalary: number) {
    super(name); 
    this.monthlySalary = monthlySalary;
  }
  calculatePay(): number {
    return this.monthlySalary;
  }
  applyTax(amount: number): number {
    return amount * 0.90; 
  }
}

const worker1 = new HourlyWorker("สมชาย", 150, 160); 
const worker2 = new SalariedWorker("สมหญิง", 30000); 

console.log(worker1.getDetails());
console.log(`เงินเดือนก่อนหักภาษี: ${worker1.calculatePay()} บาท`);


console.log("---");

console.log(worker2.getDetails());
const grossPay = worker2.calculatePay();
console.log(`เงินเดือนก่อนหักภาษี: ${grossPay} บาท`);
const netPay = worker2.applyTax(grossPay);
console.log(`เงินเดือนหลังหักภาษี: ${netPay} บาท`);