export{};
abstract class PaymentGateway {
    protected tid : string ;
    constructor(protected amount : number){
        this.tid= "TXN-"+Math.floor(1000+Math.random()*9000);
    }
    abstract processPayment():boolean;
    printReceipt(sucess: boolean): void{
        if(sucess) console.log(`ใบเสร็จรับเงิน ${this.tid} | จำนวนเงิน ${this.amount}บาท`);
            else console.log(`ใบเสร็จรับเงิน ${this.tid} | ชำระเงินไม่สำเร็จ`);
    }
}
class CreditCardpayment extends PaymentGateway {
    constructor(protected amount: number , private cardNumber : string ){
        super(amount);
    }
    processPayment(): boolean {
        if(this.cardNumber.length===16){
            console.log(`ชาร์จเงิน${this.amount}จากบัตรเครดิตเรียบร้อยแล้ว`);
            return true ;
        }else{
            console.log(`ชาร์จไม่สำเร็จเงิน หมายเลขบัตรไม่ถูกต้อง`);
            return false ;
        }
    }
}
class PromptPayPayment extends PaymentGateway {
    constructor(protected amount: number , private phoneNumber : string ){
        super(amount);
    }
    processPayment(): boolean {
        if(this.phoneNumber.length===10){
            console.log(`สร้างQR code จำนวนเงิน${this.amount}จากเบอร์ได้สำเร็จ`);
            return true ;
        }else{
            console.log(`หมายเลขโทรศัพท์ไม่ถูกต้อง ไม่สามรถชำระเงินได้`);
            return false ;
        }
    }
}
const payments : PaymentGateway[]= [
    new CreditCardpayment(1000,"123123123424"),
    new CreditCardpayment(500,"1234"),
    new PromptPayPayment(500,"1234567890"),
    new PromptPayPayment(1000,"1234")
];
payments.forEach(payments =>{
    payments.printReceipt(payment.processPayment())
})