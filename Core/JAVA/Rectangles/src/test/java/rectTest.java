import junit.framework.TestCase;
import org.junit.Test;
import org.junit.*;
import static org.junit.Assert.*;

public class rectTest {
    @Test
    public void newRectangle_instantiatesCorrectly() {
        Rectangle testRectangle = new Rectangle(2, 4);
        Assert.assertEquals(true, testRectangle instanceof Rectangle);
    }

}
