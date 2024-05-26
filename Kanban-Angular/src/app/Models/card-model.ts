import { UserModel } from "./user-model";

export class CardModel {
    public id : number | undefined;
    public name : string;
    public startTime : Date | undefined;
    public endTime : Date ;
    public description : string;
    public user : UserModel[];
    constructor(name : string,endTime : Date,description : string) {
        this.name = name;
        this.endTime = endTime;
        this.description = description;
        this.user = []
        
    }
}
