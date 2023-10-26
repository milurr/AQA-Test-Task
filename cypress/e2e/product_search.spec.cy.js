describe("Product Search Test", () => {
    it("Search for a product and check if it's openable", () => {
      cy.visit("https://giftly.klickly-dev.com/marketplace");
  
      cy.get('input[class="sc-iIUQWv jpNogh"]').type("T-Shirt4"); // the type can be added as test data in a separate file 
      cy.get('button[class="ant-btn css-15rg2km ant-btn-primary ant-btn-sm sc-crHmcD eWRUbM sc-jtXEFf gaXnty"]').click();
      cy.wait(10000);

      // the ID can be added as test data in a separate file
      //cy.get('[id="649429144e16b585ba8de035"]').should("be.visible");
  
      cy.get('[id="649429144e16b585ba8de035"]').find('button[data-e2e="buy-button"]').click();
      cy.wait(10000);

      cy.url().should("include", "/649429144e16b585ba8de035"); 
  
      // Additional checks or assertions can be added here as needed
    });
  });
  