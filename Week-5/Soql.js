//similar to SQL, but slightly different
//dont need to worry about capitalizing
//query names, id, etc. 
//can subquery directly in query

//example of query with subquery
select name, (select name from rimas_objects__r) from account
//everything inside parenthesis is subquery ^^
//in english: select name from account, sub: select name from rimas_objects_r

//can be used directly in apex class for lightning apps
//example
List <Account> listOfAccounts = [select name from Account limit 10]
//list of accounts, getting names from each account, limit to 10 per search