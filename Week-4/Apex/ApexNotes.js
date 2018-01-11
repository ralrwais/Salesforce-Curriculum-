//What is Apex?

//Apex is an OOP language that supports classes, interfaces and inheritance
//it is integrated with the Database and accessing data is straightforward
//allow operation rollbacks if necessary
//based on Java & easy to use


//Apex Data Types:
//Primitive: Integer, Double, Long, Date, Datetime, String, ID, Boolean
//sObject: can be generic or specific
//Collection: list, array, primitives, sObjects, objects, map, etc.
//Enum: a typed list of values
//User-Defined Apex Class
//System-Supplied Apex Class

//List: (an Apex Collection)
//hold ordered collection of objects
//synonymous with arrays

//following two do the same thing
List<String> colors = new List<String>();
//and
String[] colors = new List<String>();

//**lists are generally easier than arrays because you dont need to know the length ahead of time
add()
//using add() you can add elements to a list when creating or after creating the list
get()
//using get() and the index position you can read a list element

//Apex Classes:
//
//

//Anonymous Apex 
//allows you to run lines of code on the fly 
//handy way to invoke Apex, especially to test out functionality.

//Inspecting Debug Logs
//click the Logs tab and double-click the most recent log in the list
//Debug Only will filter the log so only debug log lines are shown

 public class createListOfMaps {
 		public static List<string> createMap(id, name) {
 			 List<Map<string, string>> accountsAndIds = new Map<string, string>{};
                for(Account a : accounts){
                    Map<string, string> littleMap = new Map<string, string>{};
                        littleMap.put('id', a.id);
                        littleMap.put('name', a.name);
               }
 			}
          return accountsAndIds;
 		}
        


public class StringArrayTest {
    public static List<string> generateStringArray(Integer n) {
        List<String> arr = new List<String>();
        for(Integer i=0; i<n; i++){
        	arr.add('Test' + i);
        }
    } return arr;
}

terms to recognize
//class
//dot notation - accessing var inside class
//inheritence - parent class --> inherited by other classes
//constructors - blueprint for making new classes - instances of classes
//class var vs. instance var 
//class var - associated with entire class
//instance var - associated with specific instance of class
//static methods - 
//instance methods - methods that are called on instance of class
//strongly typed - cant easily change vars, errors less