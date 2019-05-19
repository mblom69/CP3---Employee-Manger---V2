var employeeManagerCommands = {
    clickEmployee: function(employeeName) {
        this.api.useXpath()
        this.click(`//li[text()="${employeeName}"]`)
        this.api.useCss()
        return this
    }, 
    editEmployee: function(employeeInfo){
        if(employeeInfo.name){
            this
                .clearValue('@nameField')
                .setValue('@nameField', employeeInfo.name)
        }
        if(employeeInfo.phone){
            this
                .clearValue('@phoneField')
                .setValue('@phoneField', employeeInfo.phone)
        }
        if(employeeInfo.email){
            this
                .clearValue('@emailField')
                .setValue('@emailField', employeeInfo.email)
        }
        if(employeeInfo.title){
            this
                .clearValue('@titleField')
                .setValue('@titleField', employeeInfo.title)
        }
        return this
    },

    editTest: function (oldEmployee, newEmployee, otherEmployee){
    this
    .clickEmployee(oldEmployee)
    .editEmployee(newEmployee)
    .click('@saveButton')
    .clickEmployee(otherEmployee)
  .expect.element('@cardTitle').text.to.equal(otherEmployee).before(500)
this
    this.clickEmployee(newEmployee.name)
    this.expect.element('@cardTitle').text.to.equal(newEmployee.name).before(500)
this.expect.element('@nameField').value.to.equal(newEmployee.name)
this.expect.element('@phoneField').value.to.equal(newEmployee.phone)
this.expect.element('@emailField').value.to.equal(newEmployee.email)
this.expect.element('@titleField').value.to.equal(newEmployee.title)  
    return this
}
}

module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeManagerCommands],
    elements: {
        headerText: '.titleBar',
        addButton: 'li[name="addEmployee"]',
        newEmployee: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath',
        },
        cardTitle: '#employeeTitle',
        nameField: 'input[name="nameEntry"]',
        phoneField: 'input[name="phoneEntry"]',
        emailField: 'input[name="emailEntry"]',
        titleField: 'input[name="titleEntry"]',
        saveButton: '#saveBtn',
        cancelButton: '[name="cancel"]',
        deleteButton: '[name="delete"]'
      
        
    }
}