<aura:component implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes,force:lightningQuickAction"
                controller="RimaTodoCTRL"
                access="global" >
    <aura:attribute name="newTodo" type="Todo__c" default="{sobjectType: 'Todo__c'}"> </aura:attribute>
    <div class="slds-scope"> 
        <div class="slds-text-heading_medium">Rima's Todo List</div>
        <div class="create-todo">
        	<lightning:input label="Enter New Todo" name="myname" value="{!v.newTodo.Name}" />
            <lightning:button variant="brand" label="Submit" onclick="{!c.saveTodo}" />
        </div>
        <div class="todo-list">
            <ul>
                <div class="todo-list-item">
                    Placeholder
                </div>
                <div class="todo-list-item">
                    Placeholder
                </div>
                <div class="todo-list-item">
                    Placeholder
                </div>
                <div class="todo-list-item">
                    Placeholder
                </div>
            </ul>
        </div>
        
    </div>
</aura:component>