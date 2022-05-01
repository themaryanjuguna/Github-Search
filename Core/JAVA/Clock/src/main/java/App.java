import java.text.SimpleDateFormat;
import java.util.Date;
//Example two
public class App {

    public static void main(String[] args) {
        Date secondDate = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("E. MMMM d 'at' hh:mm a");
        System.out.println("Current Date: " + sdf.format(secondDate)); //Apply Pattern to data
    }
}
