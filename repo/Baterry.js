let Baterry = function (energy) {
    this.energy =energy;

    this.getEnergy = function () {
        return this.energy;
    }

    this.setEnergy = function (newEnergy) {
        this.energy = newEnergy;
    }

    this.decreaseEnergy = function (energy) {
        if (this.energy>0)
            this.energy--;
    }
}