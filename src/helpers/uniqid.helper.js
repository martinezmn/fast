module.exports = class uniqidHelper {
    static generate() {
        return new Date().getTime() + '' + (Math.random(Math.random() * (1000000 - 100000)) + 100000);
    }
}
