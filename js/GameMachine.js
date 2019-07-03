class GameMachine{   
    constructor(serialNumber, startmoney){
        var serialNumber = serialNumber; 
        this.money = startmoney; 
        this.randomNumder = "";
    }

    getSerialNumber()
    {
        return this.serialNumber;
    }

    getMoney() {
        return this.money;
    }
    
    WithdrawMoney(number){
        if(this.money < number)
        {
            this.money = 0;
            return this.money;
            // throw number + " UAH is not in the machine, please contact the nearest employee of our casino";
        }else 
        {   
            this.money = this.money - number;
            return number;
        }
    }

    setMoney(setmoney) {
        if (typeof setmoney === "number" && setmoney >= 0) {
            this.money += setmoney;
        }
        else {
            throw "Incorect value when you set the money in GameMachine";
        }
        return this;
    }
    
    play(money)
    {
        try {
            this.setMoney(money);
            var randomNum = Math.floor(Math.random() * 900 + 100).toString();
            this.randomNumder = randomNum;
            var count = 0;
            for(var i = 0; i < 2; i++)
            {
                for(var j = 1; j < 3; j++)
                {
                    if(randomNum[i] == randomNum[j] && i != j)
                    {
                        count++;
                    }
                }
            }
            switch (count)
            {            
                case 1:
                return "you have lost";
                case 2:
                return WithdrawMoney(2 * money);
                case 3:
                return WithdrawMoney(3 * money);                
            }
        } catch (error) {
              throw error;          
        }
    }    
}