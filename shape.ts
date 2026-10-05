class shape{
    draw(): void {
        console.log ("วาดรูปร่าง");
    }
}
class circle extends shape {
    constructor(public radius :number ){
        super();
    }
    draw(): void {
        console.log("วาดรูปทรงวงกลม");
    }
    area():void{
        const area =Math.PI * Math.pow(this.radius,2);
        console.log(`พื้นที่ของวงกลมมีรัศมี${this.radius}คือ${area}`)
    }
}
class square extends shape{
    constructor(public side: number){
        super();
    }
    draw():void{
    }
    area():void{
        const area =Math.pow(this.side,2);
        console.log(`สี่เหลี่ยมจตุรัสที่มีด้าน${this.side}มีพื้นที่${area}`)
    }
}
class triangle extends shape {
        constructor(public base :number ,public height : number ){
            super();
        }
        draw(): void {
        console.log("วาดรูปสามเหลี่ยม");
    }
    area():void{
        const area =this.base * this.height / 2;
        console.log(`สามเหลี่ยมที่มีฐาน${this.base}สูง${this.height}`)
    }
    } 
const shapes: shape[]=[new shape(),new circle(4),new square(5),new triangle(5,9)];
shapes.forEach(shape=> {
    shape.draw();
    shape.area();
});