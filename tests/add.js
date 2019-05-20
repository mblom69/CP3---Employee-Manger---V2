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

    'add test': browser => {
        manager
        .expect.element('@addButton').text.to.equal('+ Add Employee').before(20000)
        manager
        .click('@addButton')
        .expect.element('@newEmployee').text.to.equal('New Employee').before(500)
        manager
        .click('@newEmployee')
        .editTest('New Employee', {name: 'Young Chun', phone: '3445561234', email: 'young@yahoo.com', title: 'VP Design' }, 'Young Chun')

        

    }
}