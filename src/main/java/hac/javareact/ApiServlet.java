package hac.javareact;

import Model.UserScore;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.io.*;
import java.util.*;
import java.util.stream.Collectors;
import javax.servlet.AsyncContext;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "ServletApi", value = "/api/highscores", asyncSupported = true)
public class ApiServlet extends HttpServlet {

    private static final String SCORES = "scores.dat";
    FileHelper file;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        getScore(request, response);
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final AsyncContext asyncContext = request.startAsync(request, response);

        new Thread(()-> {
            try {
                saveScore(asyncContext, response);
            } catch (IOException ignore) {

            }
        }).start();
    }

    private void getScore(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String json = new Gson().toJson(file.readUserScore());

        response.setHeader("Content-Type", "application/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.getWriter().println(json);
    }

    private void saveScore(AsyncContext asyncContext, HttpServletResponse response) throws IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Content-Type", "text/plain");

        String requestBody = asyncContext.getRequest().getReader().lines().collect(Collectors.joining(System.lineSeparator()));
        JsonObject json = JsonParser.parseString(requestBody).getAsJsonObject();

        List<UserScore> scores = file.updateUserScore(new UserScore(json.get("userName").getAsString(), json.get("guess").getAsInt()));
        file.writeUserScore(scores);

        response.setStatus(HttpServletResponse.SC_OK);
    }



    @Override
    public void init() {
        String path = getServletContext().getRealPath(".") + File.separator + SCORES;
        file = new FileHelper(path);
    }

    @Override
    public void destroy() {

    }
}
