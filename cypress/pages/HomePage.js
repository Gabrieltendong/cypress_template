import Page from "./Page";

class HomePage extends Page{

    static visit(){
        cy.visit('/');
    }

}

export default HomePage;