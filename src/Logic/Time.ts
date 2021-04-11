export class Time{
    min : number=0;
    hour : number=0;
    day : number=0;
    constructor(hour : number=0, min:number=0 ,day:number=0){
        this.min = min;
        this.hour = hour;
        this.day = day;
    }
    checkValidity(){
    }
    static currentTime(date : Date){
        let t = new Time(date.getHours(),date.getMinutes());
        return t;
    }
    updateTime(){
        let date  = new Date();
        this.min = date.getMinutes();
        this.hour = date.getHours();
        this.day = 0;
    }
    static getCurrentTime() : Time{
        let d = new Date();
        return new Time(d.getHours(),d.getMinutes());
    }
    lessThanEqual(time:Time): boolean{
        // if(this.hour<=time.hour) {
        //     return true;
        // }
        //     else{
        //
        //     }
        //     if(this.min<=time.min){
        //         return true;
        //     }
        //     else{
        //         return false;
        //     }
        // }
        // return false;
        if (this.hour<time.hour) return true;
        else if (this.hour === time.hour){
            if (this.min <= time.min) return true;
            else return false;
        }
        else return false;
    }

    dif(time:Time){
        if(this.lessThanEqual(time)){
            return new Time();
        }
        else{
            let t=new Time();
            t.hour=this.hour-time.hour;
            t.min=this.min-time.min;
            if(t.min<0){
                t.min+=60;
                t.hour--;
            }
            return t;
        }
    }
    sum(time:Time){
        let t=new Time();
            t.hour=this.hour+time.hour;
            t.min=this.min+time.min;
            if(t.min>59){
                t.hour+=Math.floor(t.min/60);
                t.day+=Math.floor(t.hour/24);
                t.hour%=24;
                t.min%=60;
            }
            return t;
    }
}