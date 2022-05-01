import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
//Example two
public class App {

    public static void main(String args[]) {
        String earlierDateString = "07/7/2015";
        DateFormat nextdf = new SimpleDateFormat("MM/dd/yyyy");
        Date earlierDate = new Date();

        try {
            earlierDate = nextdf.parse(earlierDateString); //overwrite date we had to initialize above
        } catch (ParseException e) {
            e.printStackTrace();
        }
        Date currentDate = new Date();
        boolean isTodayAfterEarlierDate = earlierDate.after(currentDate);
        System.out.println("Earlier date is after current date = " + isTodayAfterEarlierDate);
    }
}