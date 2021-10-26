import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../Pages/HomePage";


Given('go to the home page', () => {
    HomePage.visit();
})