describe("Main screen", () => {
    const backendUrl = Cypress.config("backendUrl");

    beforeEach(() => {
        cy.visit("/");
    });

    it("Hydrogen data rendered properly", () => {
        cy.server();

        cy.route("GET", `${backendUrl}/api/hydrogen`).as("getCars");

        cy.wait("@getCars").then(xhr => {
            const hydroList = cy.get("[data-testid=hydro-list]");

            hydroList.find("[data-testid=hydro]").then(hydro => {
                expect(hydro).length.GreatThan(1);
            })
        })
    })
})