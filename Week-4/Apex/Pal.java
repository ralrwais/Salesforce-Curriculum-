public class Palindrome {

  public static boolean isPal(String str) {      
    for (int i = 0; i < str.length() / 2; i++) {

      if (!(str.charAt(i) == str.charAt(str.length() - 1 - i))) {
        return false;
      }
    }
    return true;
  }
  public static void main(String[] args) {
    System.out.println("Is this a palindrome? " + isPal("racecar"));
  }

} 

public class Palindrome {
    public static void main(String[] args){
        String str = args[0];
        String newStr = "";

        for(int i = str.length() - 1; i >= 0; i--){
            newStr = newStr + str.charAt(i);
        }
        if(str.equals(newStr)){
           System.out.println("Palindrome");
        }
        else{
            System.out.println("Not a Pal");
        }
    } 
}