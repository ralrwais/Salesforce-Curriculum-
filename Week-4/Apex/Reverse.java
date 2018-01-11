

public class Reverse {
    public static void main(String[] args){
        String str = args[0];
        String newStr = "";

        for(int i = str.length() - 1; i >= 0; i--){
            newStr = newStr + str.charAt(i);
        }  System.out.println(newStr);
    }  
}