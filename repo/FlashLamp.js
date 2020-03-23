let FlashLam = function (baterry) {
    this.baterry = baterry;

    this.setBaterry = function (baterry) {
        this.baterry =baterry;
    }

    this.getBeterry = function () {
        return this.baterry.getEnergy();
    }

    this.light = function () {
        if (this.status){
            alert("Light");
        }else {
            alert("Not Light");
        }
    }

    this.turnOn = function () {
        this.status =true;
    }
    this.turnOff= function () {
        this.status =false;
    }
}