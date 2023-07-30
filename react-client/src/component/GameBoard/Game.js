/**
 * game class for handle the game
 */
class Game{
    static #randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /**
     * create array of random different numbers
     * @param count the length of array
     * @returns {*[]}
     */
    static createRandom(count) {
        let arr = [];
        for (let i = 0; i < count; i++) {
            let val = this.#randomIntFromInterval(0, 9);
            while (arr.includes(val)) {
                val = this.#randomIntFromInterval(0, 9);
            }
            arr.push(val);
        }
        return arr;
    }

    /**
     * check for cows and bulls
     * @param solution the actual solution
     * @param user the user selection
     * @returns {(string|number|number)[]} array [user input, bulls, cows]
     */
    static play(solution, user) {
        let bulls = 0, cows = 0;
        solution.forEach((val, i) => bulls += (user[i] === val) ? 1 : 0);
        user.forEach((val) => cows += solution.includes(val) ? 1 : 0);
        return [`[${user.join(',')}]`, bulls, cows - bulls];
    }
}


export default Game;