({
	saveTodo : function(component, event, helper) {
		let newTodo = component.get("v.newTodo");
        var action = component.get('c.addTodo');
        action.setParams({newTodo : newTodo});
        action.setCallback(this, function(response){
           
        })
        $A.enqueueAction(action);
	}
})