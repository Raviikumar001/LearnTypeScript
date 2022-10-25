

class Vehicle{
    //   public  drive():void {
    //         console.log('chugga chugga');
    //     }
    
    color: string;
      constructor(color: string)
      {
        this.color = color;
      }
    
    
      protected  honk():void {
            console.log('beep');
        }
    }
    
    const vehicle = new Vehicle('redd');
    console.log(vehicle.color);
    
    
    
    class Carr extends Vehicle{
    
      
     private   drive():void {
            console.log('vroom');
        }
    
        startDrivingProcess():void {
            this.drive();
            this.honk();
        }
    
    }
    
    
    const carp = new Carr('red');
    carp.startDrivingProcess();
    
    
    