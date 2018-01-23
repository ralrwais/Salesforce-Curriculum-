public class RimaTodoCTRL {
@AuraEnabled
   public static void addTodo(Todo__c newTodo) {
       insert newTodo;
   }
}