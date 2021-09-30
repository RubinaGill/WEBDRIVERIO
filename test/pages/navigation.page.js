import { default as Page } from "./page";

class NavigationPage extends Page {
    get navigationLinks() {
        return $$('#hs_cos_wrapper_navigation-primary >nav>ul>li > a');
    }

    async getNavigationLinksText() {
        const navigations = [];
        await this.navigationLinks.map(async (element) => {
            const text = await element.getText();
            if(text.length>0){
            navigations.push(text);
            }
        });
        return navigations;
    }


    async open() {
        await super.open("https://www.tfoco.com/en/");
    }
}

export default new NavigationPage;