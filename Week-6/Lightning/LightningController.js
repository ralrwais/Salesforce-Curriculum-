//  JavaScript Controller
//    what to do with the data once you've got it

//example:
({
	myAction : function(component, event, helper) {
		var action = component.get('c.fetchAccount');
        action.setCallback(this, function(response){
            component.set('v.ListOfAccounts', response);
        })
        $A.enqueueAction(action);
	}
})
