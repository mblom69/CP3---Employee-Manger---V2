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
    'edit employee': browser => {
        manager
            .clickEmployee('Harry Potter')
            .editEmployee({ name: 'Marcel Blom', phone: '6179591212', email: 'mblom@dvmnt.com', title: 'Pro-Sailer' })
            .click('@saveButton')
            .pause(2000)
            .expect.element('@cardTitle').text.to.equal('Marcel Blom')
        manager
            .clickEmployee('Walt Disney')
            .pause(1000)
            .expect.element('@cardTitle').text.to.equal('Walt Disney')
        manager
            .clickEmployee('Marcel Blom')
            .expect.element('@cardTitle').text.to.equal('Marcel Blom')
    },
}

// email: 'mblom@dvmnt.com',