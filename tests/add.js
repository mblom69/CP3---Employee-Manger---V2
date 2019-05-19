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
        .click('@addButton')
        .click('@newEmployee')
        .editTest('New Employee', {name: 'Young Chun', phone: '3445561234', email: 'young@yahoo.com', title: 'VP Design' }, 'Young Chun')

        

    }
}