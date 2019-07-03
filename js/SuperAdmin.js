import User from './User';
class SuperAdmin extends User{
   
    constructor(name, money){
        super(name, money);
        this.listCasinos = [new Casino("My first casino")];       
    }

    addCasino(name)
    {
        this.listCasinos.push(new Casino(name));
    }  
    
    addMachine(nameCasino, serialNumber, startMoney)
    {
        if(this.money >= startMoney)
        {
            for(var i = 0; i< this.listCasinos.length; i++)
            {
                if(this.listCasinos[i].name == nameCasino)
                {
                    this.money -= startMoney;
                    this.listCasinos[i].addMachine(serialNumber,startMoney);
                }
            }
        }
        else{
            throw "You don't have enought money";
        }
    }

    getMoneyFromCasino(nameCasino, number) {
        for(var casino of this.listCasinos)
        {
            if(casino.name == nameCasino)
            {
                if(casino.getInfoAboutMoney() < number)
                {
                    throw "There is no such amount of money in the casino. The maximum amount available is " + casino.getInfoAboutMoney().toString();
                }
                for(var i = 0; i < casino.getMachineCount; i++)
                {
                    this.money += casino.withdrawMoney(number);
                }
            }
        }
    }

    addMoneyToGameMachine(casinoName, machinSerial, number) {
        if(number <= this.money)
        {
            var casino = getCasinoByName(casinoName);
            for (const machin of casino.gameMachines) {
                if(machin.serialNumber === machinSerial)
                {
                    machin.setMoney(number);
                    this.money -= number;
                    return machin.getMoney();
                }else{
                    throw "there is no such machine";
                } 
            }
        }else{
            throw "You don't have enough money";
        } 
    }

    addMoneyToCasino(casinoName, number) {
        if(number <= this.money)
        {
            var casino = getCasinoByName(casinoName);
            var moneyToMachine = number / casino.getMachineCount();
            for (const machin of casino.gameMachines) {
                machin.setMoney(moneyToMachine);
                this.money -= moneyToMachine;              
            }
            return this.money;
        }else{
            throw "You don't have enough money";
        } 
    }

    deleteMachinBySerialNumber(casinoName, serialNumber)
    {
        let casino = getCasinoByName(casinoName);
        let accountBalance = casino.deleteMachinBySerialNumber(serialNumber);
        let moneyToMachine = accountBalance / casino.getMachineCount;
        for (let machine of casino.gameMachines) {
            machine.setMoney(moneyToMachine)
        }
    }
    
    getCasinoByName(name)
    {
        for (const casino of this.listCasinos) {
            if(casino.name == name)
            {
                return casino;
            }
        }
        throw "There is no such casino";
    }
}