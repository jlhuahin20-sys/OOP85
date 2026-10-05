export{};
interface StorageService{
    save(data: string): void;
    load():string;
}
abstract class Storage{
    protected data : string = ("");
}
class CloudStorage extends Storage implements StorageService {
    save(data: string): void{
    this.data = data ;
    console.log(`Saving data in Cloud: ${this.data}`);
    }
    load():string{
    return this.data;
    }
}
class LocalStorage extends Storage implements StorageService{
    save(data: string): void{
    this.data = data ;
    console.log(`Saving data in Local: ${this.data}`);
    }
    load():string{
    return this.data;
    }
}    

const storage1 = new CloudStorage();
const storage2 = new LocalStorage();
storage1.save("ไอยัต ไอขี้โกง");
storage1.load();
storage2.save("โกงกะทั้งเพื่อน");
storage2.load();