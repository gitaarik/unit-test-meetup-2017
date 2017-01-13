package demo;

import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;


public class FailingByDefaultTest {

    @Test
    public void itWillFailByDefault() throws Exception {

        Integer product = 2 * 5;
        assertThat(product, is(11)); // Change the expected value to fix this test.

    }

}
