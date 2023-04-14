// ------------- Task 1 -----------
let time = {
    hours: 23,
    minutes: 59,
    seconds: 59,

    show () {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },

    changeTime (seconds) {
        if (this.seconds < 59) {
            console.log(`${this.hours}:${this.minutes}:${this.seconds + 1}`);
        }
        else {
            if (this.minutes < 59) {
                console.log(`${this.hours}:${this.minutes + 1}:${this.seconds - 59}0`);
            }
            else {
                if (this.hours < 23) {
                    console.log(`${this.hours + 1}:${this.minutes - 59}0:${this.seconds - 59}0`);
                }
                else {
                    console.log(`${this.hours - 23}0:${this.minutes - 59}0:${this.seconds - 59}0`);
                }
            }
        }
    },

    changesTime (seconds) {
        if (this.seconds > 0) {
            console.log(`${this.hours}:${this.minutes}:${this.seconds - 1}`);
        }
        else {
            if (this.minutes > 0) {
                console.log(`${this.hours}:${this.minutes - 1}:${this.seconds + 59}`);
            }
            else {
                if (this.hours > 0) {
                    console.log(`${this.hours - 1}:${this.minutes + 59}:${this.seconds + 59}`);
                }
                else {
                    console.log(`${this.hours + 23}:${this.minutes + 59}:${this.seconds + 59}`);
                }
            }
        }
    }
};

time.show();
time.changeTime("");
time.changesTime("");

// ------------- Task 2 -----------
let car = {
    manufacturer: "Stellantis",
    model: "Peugeot 308",
    year_of_manufacture: "2018",
    average_speed: 188,

    show: function () {
        console.log(`Manufacturer - ${this.manufacturer}`);
        console.log(`Model - ${this.model}`);
        console.log(`Year of manufacture - ${this.year_of_manufacture}`);
        console.log(`Average speed - ${this.average_speed}`);
    },

    CalculateTime: function (distance){
        let travelTime = distance / this.average_speed;
        let breakTime = Math.floor(travelTime / 4);
        let totalTime = travelTime + breakTime;
        let hours = Math.floor(totalTime);
        let minutes = Math.round((totalTime - hours) * 60);
        console.log(`Time to travel ${distance} km: ${hours} hours and ${minutes} minutes`);
    }
};

car.show();
car.CalculateTime(1000);