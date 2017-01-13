package demo;

import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class GreeterTest {

    @Test
    public void itShouldSayHelloWorld() throws Exception {

        Greeter greeter = new Greeter();

        String greeting = greeter.greet();
        
        assertThat(greeting, is("Hello World!"));

    }
}
