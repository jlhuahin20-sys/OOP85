class Monster{
    name : string ;
    health : number  ;
    damage : number ;

    constructor( n : string , h : number , d : number ){
        this.name = n ,
        this.health = h ,
        this.damage  = d 
    }

    attack(): void {
    console.log(`${this.name} โจมตีธรรมดา สร้างความเสียหาย ${this.damage} หน่วย`);
  }
}
class frieMonster extends Monster {
    constructor( n : string , h : number , d : number ){
        super(n,h,d);
    }
     attack(): void {
    console.log(`${this.name} พ่นไฟใส่ศัตรู`);
}
}
class waterMonster extends Monster {
    constructor( n : string , h : number , d : number ){
        super(n,h,d);
    }
     attack(): void {
    console.log(`${this.name} พ่นน้ำศัตรู`);
}
}
class grassMonster extends Monster {
    constructor( n : string , h : number , d : number ){
        super(n,h,d);
    }
     attack(): void {
    console.log(`${this.name} พ่นก๊าซใส่ศัตรู`);
}
}
function battleArena(monsters: Monster[]): void {
  monsters.forEach((monster, index) => {
    monster.attack();
  });
}
const fireDragon = new frieMonster("มังกรไฟ", 120, 25);
const waterTurtle = new waterMonster("เต่ายักษ์สายน้ำ", 150, 15);
const grassWolf = new grassMonster("หมาป่าเถาวัลย์", 100, 20);
const basicSlime = new Monster("สไลม์ทั่วไป", 50, 5);

const monsterTeam: Monster[] = [fireDragon, waterTurtle, grassWolf, basicSlime];

console.log(fireDragon);
console.log(waterTurtle);
console.log(grassWolf);
console.log(basicSlime);