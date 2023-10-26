Cypress.Commands.add('logProductData', () => {
    cy.get('#shop-promotions-container [data-e2e="product-card"]').each(($element) => {
      const productId = $element.attr('id');
      cy.log(productId);
    });
  });
  
  describe("Product Pagination Test", () => {
    it("Assert that products on the first page are different from the second page", () => {
      cy.visit("https://giftly.klickly-dev.com/marketplace");
  
      cy.logProductData();
  
      cy.get('#shop-promotions-container').scrollTo('bottom', { ensureScrollable: false });
      cy.wait(5000); 
  
      cy.logProductData();
  
      cy.get('#shop-promotions-container [data-e2e="product-card"]').then(($productCards) => {
        const productDataPage1 = $productCards
          .slice(0, 24) // Select the first 24 products
          .map((index, element) => Cypress.$(element).attr('id'))
          .get();
  
        const productDataPage2 = $productCards
          .slice(24) // Select products from 25th element to the end
          .map((index, element) => Cypress.$(element).attr('id'))
          .get();
  
        const isDifferent = productDataPage1.some((data1) => {
          return !productDataPage2.includes(data1);
        });
  
        expect(isDifferent).to.be.true;
      });
    });
  });
  