describe("Product Search Test", () => {
    it("Search for 'STAR WARS' and check for 2 products containing 'STAR WARS' in the end and beginning", () => {
      cy.visit("https://giftly.klickly-dev.com/marketplace");
  
      cy.get('input[class="sc-iIUQWv jpNogh"]').type("STAR WARS");
      cy.get('button[class="ant-btn css-15rg2km ant-btn-primary ant-btn-sm sc-crHmcD eWRUbM sc-jtXEFf gaXnty"]').click();
      cy.wait(10000);

    // Verify that at least 2 products contain "STAR WARS" in their names
    cy.get('[class="sc-egiyK fEmaya sc-gjNHFA hxywGA"]').should(($productCards) => {
        // Filter product cards with "STAR WARS" in the beginning or end of their names
        const matchingProducts = $productCards.toArray().filter((card) => {
          // Retrieve the text content for each product card
          const productName = Cypress.$(card).find('h3.ant-typography').text();
          return productName.includes("STAR WARS") || productName.endsWith("STAR WARS");
        });
  
    // Ensure there are at least 2 matching products
    if (matchingProducts.length < 2) {
      throw new Error(`Expected at least 2 products containing "STAR WARS," but found ${
        matchingProducts.length
      } products. Found Products: [${matchingProducts.map((el) => el.querySelector('.product-title').textContent).join(', ')}]`);
    }
  });
});
});
  