package Model;

import java.io.Serializable;

public class UserScore implements Serializable {
    private String name;
    private int guess;

    public UserScore(String name, int guess) {
        this.name = name;
        this.guess = guess;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }

    public int getGuess() {
        return guess;
    }

    public void setGuess(int guess) {
        this.guess = guess;
    }
}
