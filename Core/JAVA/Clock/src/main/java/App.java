import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
//Example two
public class App {

    public static void main(String args[]) {
        String startDateString = "07/7/2017";
        DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
        Date startDate;
        {
            try {
                startDate = df.parse(startDateString);
                SimpleDateFormat ft = new SimpleDateFormat("E,MMMM d"); // formatter pattern
                System.out.println("Date that was formerly a String, formatted: " + ft.format(startDate));
            } catch (ParseException e) {
                e.printStackTrace();
            }

        }

    }
}

