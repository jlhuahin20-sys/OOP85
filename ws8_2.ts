export {};
class Notification{
    send(message:string){
        console.log(message);
    }
}
class EmailNotification extends Notification {
    send(message:string){
        console.log(`[Email Notification: ${message}]`)
    }
}
class SMSNotification extends Notification {
    send(message:string){
        console.log(`[SMS Notification: ${message}]`)
    }
}
class PushNotification extends Notification {
    send(message:string){
        console.log(`[Push Notification: ${message}]`)
    }
}
const notis : Notification[]=[
    new EmailNotification (),
    new SMSNotification (),
    new PushNotification ()
];
notis.forEach(noti=>noti.send("สวัสดีตอนเช้า สมาชิกทุกท่าน"))