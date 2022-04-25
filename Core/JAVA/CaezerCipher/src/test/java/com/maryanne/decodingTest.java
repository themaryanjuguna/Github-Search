package com.maryanne;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class decodingTest {

    @Test
    void decodingUserInput() {

        decoding decode = new decoding();
        assertEquals("maryanne", decode.decoding("kypwyllc", 0));
    }
}