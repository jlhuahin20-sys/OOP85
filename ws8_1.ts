class PaymentGateway {
    process(amount:number){
    }
}
class CreditCardpayment extends PaymentGateway {
    process(amount:number){
        console.log(`กำลังประมวลผลการชำระเงินด้วยบัตรเครดิต จำนวนเงิน${amount}บาท`)
    }
}
class Paypalment extends PaymentGateway {
    process(amount: number){
        console.log(`กำลังเปลี่ยนเส้นทางการชำระเงินด้วยPaypal จำนวนเง้น${amount}บาท`)
    }
}
function executePayment(p:PaymentGateway, amt:number){
    p.process(amt);
}
const payment : PaymentGateway[]=[
    new CreditCardpayment(),
    new Paypalment ()
];
payment.forEach(payment=> executePayment(payment,1000));
