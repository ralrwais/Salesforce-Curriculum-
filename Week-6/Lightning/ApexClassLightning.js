//Apex Controller
    //what data to pull from the DB

//example:

public class getAccounts {
    public static list <Account> fetchAccount(){
        List <Account> listOfAccounts = [select name from Account limit 10];
        return listOfAccounts;
    }
}