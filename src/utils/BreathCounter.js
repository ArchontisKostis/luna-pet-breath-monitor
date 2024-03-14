// This class models a breath counter. It is used to count the number of breaths in a given time interval.

class BreathCounter {
    breaths = 0;
    breathsPerMinute = 0;
    countedTime = 0;

    constructor(breaths, countedTime) {
        this.breaths = breaths;
        this.countedTime = countedTime;
        this.breathsPerMinute = this.calculateBreathsPerMinute();
    }

    calculateBreathsPerMinute() {
        // Counted Time is the total time we measured the breaths in seconds
        // Breaths is the total number of breaths we counted in the counted time
        // To get breaths per minute, we divide the total breaths by the total time in minutes
        let value = this.breaths / (this.countedTime / 60);

        return Math.round(value);
    }

    getBreathsPerMinute() { return this.breathsPerMinute; }
    getBreaths() { return this.breaths; }
    getCountedTime() { return this.countedTime; }
    setBreaths(breaths) { this.breaths = breaths; }
    setCountedTime(countedTime) { this.countedTime = countedTime; }
}

export default BreathCounter;