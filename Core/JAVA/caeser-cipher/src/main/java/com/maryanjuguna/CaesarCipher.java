package com.maryanjuguna;

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
            Char cipherChar = alphabet.charAt(newIndex);

        }


        return cipherText;

    }

    public static String encoding() {

    }



}
