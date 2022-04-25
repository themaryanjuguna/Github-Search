package com.maryanne;

import static com.maryanne.encoding.CaesarCipher.alphabet;

public class decoding {

    public static String decoding(String cipherText, int Key) {
        cipherText = cipherText.toLowerCase();
        String plainText = "";
        //looping process generating indexes
        for (int i =0 ; i<cipherText.length(); i++) {
            int charIndex = alphabet.indexOf(cipherText.charAt(i));
            //generate new index in the plain text
            int newIndex = (charIndex - Key) % 26;
            if (newIndex <0){
                newIndex = alphabet.length() + newIndex;
            }
            char plainChar = alphabet.charAt(newIndex);
            plainText += plainChar;

        }
        return plainText;
    }


}
