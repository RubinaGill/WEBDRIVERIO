import NavigationPage from "../pages/navigation.page";
import { expect as _expect } from 'chai';
var chaiExpect = _expect;

describe('Navigation links', () => {
    before(async () => {
        await NavigationPage.open();
    });
    it('should get all navigation links available', async () => {
        const navigationLinksList = await NavigationPage.getNavigationLinksText();
        chaiExpect(navigationLinksList).to.deep.equal(['About Us',
            'What We Offer',
            'Insights',
            'Financial Tools']);
    });
});