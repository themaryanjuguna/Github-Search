package com.maryanne;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class encodingTest {
    @Test
    void encodingUserInput(){

        encoding encode = new encoding();
        assertEquals("maryanne",  encode.encoding("maryanne", 2));

    }

}