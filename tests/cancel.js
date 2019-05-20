let manager = {}

module.exports = {
    beforeEach: browser => {
        manager = browser.page.assetsPage()
        manager.navigate()
        .expect.element('@headerText').text.to.equal('Employee Manager')
    },
    after: browser => {
        browser.end()
    },
    
    'It can edit and cancel employee': browser => {
        manager
        .expect.element('@addButton').text.to.equal('+ Add Employee').before(20000)
        manager
            .clickEmployee('Larry Fine')
            .editEmployee({ name: 'Denis Hub', phone: '5086793434', email: 'dhub@gmail.com',  title: 'Manager' })
            .verify.valueContains('@nameField', 'Denis Hub')
            .verify.valueContains('@phoneField', '5086793434')
            .verify.valueContains('@emailField', 'dhub@gmail.com')
            .verify.valueContains('@titleField', 'Manager')
            .click ('@cancelButton')
            .clickEmployee('Walt Disney')
            .expect.element('@cardTitle').text.to.equal('Walt Disney').before(500)
        manager
            .clickEmployee('Larry Fine')
            .expect.element('@cardTitle').text.to.equal('Larry Fine')

       
    }

 
}