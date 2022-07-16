# JEST

- command test runner
- doesn't start a browser

npm i --save-dev

.bin : binary - it means executable

# cypress has Chai, Sinon, jQuery built in.

sinon : mocking external libraries (cy.stub(), cy.spy())
stub: fake version of axios.

(we don't have to import it)
notDeepEqual

# Chainable getters

# all commands are async. every cy.\_\_\_ returns a promise

# 4000ms is a default timeout until it throws an error.

should('be.checked')

# .contains(): doing a fuzzy search (not exact match)

# we are not going to clean up for cypress (after)

# cypress app > settings >

- defaultCommandTimeout
- baseUrl

  .type('write this' , {delay: 200})

# as: stroing in a memory.

cy.as('inputField') <- aliasing it.

later when you get it: cy.get('@inputField')

# put all the hardcoded data inside fixtures.

^ so cypress can find it.

# cy.intercept

don't call api but use our hardcoded data.
cy.intercept('GET', '\*\*/search', { fixture: itunes }) <- no need to type itunes.js, it already knows.

# getbem.com/nameing/

- double under score
