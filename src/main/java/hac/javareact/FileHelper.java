package hac.javareact;

import Model.UserScore;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

/**
 * simple file helper for Serialize data
 */
public class FileHelper {
    private final String fileName;

    /**
     * reset the file name
     * @param fileName file name for helper
     */
    public FileHelper(String fileName) {
        this.fileName = fileName;
    }

    /**
     * like its sound...
     * @throws IOException if was error
     */
    public void createIfNotExist() throws IOException {
        File scoresFile = new File(fileName);
        if (!scoresFile.exists()) {
            scoresFile.createNewFile();
        }
    }

    /**
     * write list - not in append mode!!!
     * @param score the list of UserScore
     * @throws IOException ...
     */
    public void writeUserScore(List<UserScore> score) throws  IOException{
        this.createIfNotExist();

        try(ObjectOutputStream oos = new ObjectOutputStream(Files.newOutputStream(Paths.get(this.fileName)))){
            oos.writeObject(score);
            oos.flush();
        }
    }


    /**
     * get list of UserScore from a file
     * @return the list
     * @throws IOException ...
     */
    public List<UserScore> readUserScore() throws IOException {
        this.createIfNotExist();

        try(ObjectInputStream ois = new ObjectInputStream(Files.newInputStream(Paths.get(fileName)))){
            return (List<UserScore>)ois.readObject();//I know! generic no need.......
        }catch (EOFException | ClassNotFoundException e){
            return new ArrayList<>();
        }
    }

    public List<UserScore> updateUserScore(UserScore newScore) throws IOException {
        List<UserScore> scoreList = this.readUserScore();

        if (scoreList == null || scoreList.isEmpty()) {
            List<UserScore> newList = new ArrayList<>();
            newList.add(newScore);
            return newList;
        }

        scoreList.removeIf(score -> score.getName().equals(newScore.getName()) && newScore.getGuess() < score.getGuess());
        scoreList.add(newScore);
        return scoreList;
    }
}
