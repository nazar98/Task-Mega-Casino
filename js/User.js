class User{   
    constructor(name, money){
        this.name = name;
        this.money = money;        
    }
    getMoney(){
        return this.money;
    }
    setMoney(money) {
        if(typeof money === "number" && money > 0){
            this.money += money;
        } else {
            throw "Incorect value when you set the money on your account";
        }
        return this;
    }

    play(machine, money)
    {
       machine.play(money);
    }
}
export default User;