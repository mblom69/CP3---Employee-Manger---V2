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

    'delete test': browser => {
        manager
        .expect.element('@addButton').text.to.equal('+ Add Employee').before(20000)
        manager
        .click('@addButton')
        .expect.element('@newEmployee').text.to.equal('New Employee').before(500)
        manager
        .click('@newEmployee')
        .editEmployee({ name: 'Lilian Lee', phone: '6456451212', email: 'lilian@dvmnt.com', title: 'VP Sales' })
        .click('@saveButton')
        .clickEmployee('Walt Disney')
        .expect.element('@cardTitle').text.to.equal('Walt Disney')
    manager
        .clickEmployee('Lilian Lee')
        .expect.element('@cardTitle').text.to.equal('Lilian Lee')
    manager
        .click('@deleteButton')
        .pause(1000)
        .acceptAlert('OK')
       

    }
}