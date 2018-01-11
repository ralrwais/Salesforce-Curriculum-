//using constructor
public class DataManipulation {
    //class called Users for creating a constructor(users) for an array of Maps
    //contains a method 
    public class Users {
      List<Map<string, string>> users = new List<Map<string, string>>{};

      public void add(Map<string, string> newUser) {
        users.add(newUser);
      }
    }
        
    @AuraEnabled
    public static List<Map<string, string>> getAccounts() {
        Account[] accounts = [SELECT Name, Id FROM Account limit 20];
        
        //iterate over accounts and create a map of the following shape {id: name}, e.g., {1: 'Ryan', 2: 'Rima'}
        Map<string, string> accountIdToNameMap = new Map<string, string>{};
            for(Account a : accounts){
                accountIdToNameMap.put(a.id, a.name); 
            }
        //iterate over accounts and create a list of maps with the following shape [{id: 1, name: 'Ryan'}, {id: 2, name: 'Rima'},]
        Users accountsAndIds = new Users();
            for(Account a : accounts){
                Map<string, string> littleMap = new Map<string, string>{};
                    littleMap.put('id', a.id);
                    littleMap.put('name', a.name);
                    Users.add(littleMap);
            }
        //refactor the list of maps above to use a new class you define instead
        return accountsAndIds;
    }
    
}


////// other way
public class DataManipulation {
    
    @AuraEnabled
    public static List<Map<string, string>> getAccounts() {
        Account[] accounts = [SELECT Name, Id FROM Account limit 20];
        
        //iterate over accounts and create a map of the following shape {id: name}, e.g., {1: 'Ryan', 2: 'Rima'}
        Map<string, string> accountIdToNameMap = new Map<string, string>{};
            for(Account a : accounts){
                accountIdToNameMap.put(a.id, a.name); 
            }
        //iterate over accounts and create a list of maps with the following shape [{id: 1, name: 'Ryan'}, {id: 2, name: 'Rima'},]
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
    }
    
} 


