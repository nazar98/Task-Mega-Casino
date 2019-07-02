class Casino{
    constructor(name){
        this.name = name;    
        this.gameMachines = [];
        this.gameMachines.sort((a,b)=> { (a.getMoney < b.getMoney) ? 1 : -1 });
    }

    getInfoAboutMoney(){
        var allMoney = 0; 
        for(var machine of this.gameMachines)
        {
            allMoney += machine.getMoney();
        }
        return allMoney;
    }

    getMachineCount()
    {
        return this.gameMachines.length;
    }
    
    addMachine(serialNumber, startmoney)
    {
        this.gameMachines.push(new GameMachine(serialNumber, startmoney));
        this.gameMachines.sort((a,b)=> { (a.getMoney < b.getMoney) ? 1 : -1 });
    }   
    
    deleteMachine(serialNumber)
    {
        let availableMoney = 0;
        let isMachin = false;
        for(let i = 0; i < this.gameMachines.length; i++){ 
            if (this.gameMachines[i] === serialNumber) {
                availableMoney =  this.gameMachines[i].getMoney();
                this.gameMachines.splice(i, 1); 
                isMachin = true;
            }
        }
        if(!isMachin)
        {
            throw "No machine with this serial number";
        }
        return availableMoney;
    } 
    
    withdrawMoney(number)
    {        
        if(numder <= this.getInfoAboutMoney())
        {
            var amount = number;
            var total = 0, i = 0;
            while(total != number){
                total += this.gameMachines[i].WithdrawMoney(amount);
                amount = number - total;
                i++;
            }
            return total;
        }else 
        {
            throw "There is no such amount of money in the casino. The maximum amount available is " + this.getInfoAboutMoney().toString();
        }
    }
}