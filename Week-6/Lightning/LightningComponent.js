// Lightning Component
//      name the apex controller that will be fetching the data from the DB in the component header
//     	declare the types of pages the component can appear in
//      declare the variables that will be used or assigned in the JavaScript controller
//      build the page with html or html-like markup
//      this is the View layer

//example:
<aura:component controller="getAccounts" implements="forceCommunity:availableForAllPageTypes"
    access="global">
    <aura:handler name="myAction" value="{!this}" action="{!c.myAction}"/>
    <aura:attribute name="ListOfAccounts" type="Account[]" description="iterate over accounts and display list"/>
    <ul>
    	<aura:iteration items="{!v.ListOfAccounts}" var="acc">
            <li> AccountName : {!acc.Name}</li>
        </aura:iteration>
    </ul>
</aura:component>

