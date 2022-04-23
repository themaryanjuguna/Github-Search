package com.maryanjuguna;

import com.sun.org.apache.xpath.internal.objects.XString;

public class CaesarCipher {

    static String alphabet = "abcdefghijklmnopqrstuvwxyz";

    public static String encoding(String plainText, int Key) {
        plainText = plainText.toLowerCase();
        String cipherText = "";
        for (int i = 0; i<plainText.length(); i++) {
            //find out index of the alphabet
            int charIndex = alphabet.indexOf(plainText.charAt(i));
            //generate a new index. key shift value
            int newIndex = (charIndex + Key) % 26;
            // generate cipher characters
            Char cipherChar = alphabet.charAt(newIndex);
            cipherText = cipherText + cipherChar;
        }

        return cipherText;

    }

    public static String encoding(String cipherText, int Key) {
        cipherText = cipherText.toLowerCase();
        String plainText = "";
        //looping process generating indexes
        for (int i =0 ; i<cipherText.length(); i++) {
            int charIndex = alphabet.indexOf(cipherText.charAt(i));
            //generate new index in the plain text
            int newIndex = (charIndex - Key) % 26;
            if (newIndex <0){
                newIndex =alphabet.length() + newIndex;
            }

        }


        return plainText;
    }

}
