import { expect as _expect, assert as _assert } from 'chai';
import 'chai/register-should';
var expectChai = _expect;
var assertChai = _assert;

describe('About us', () => {
    it('should navigate user to About us page', async () => {
        var aboutUsLink = await $('#hs_cos_wrapper_navigation-primary > nav > ul > li:nth-child(1) > a');
        await aboutUsLink.moveTo();

        aboutUsLink = await $('=Board Members');
        await aboutUsLink.click();
        var url = await browser.getUrl();
        expectChai(url).to.include('https://www.tfoco.com/en/about-us/board-of-directors?hsLang=en');
    });
    it('should validate text of accept cookie buttons', async () => {
        var acceptCookieButton = await $('#hs-eu-confirmation-button');
        var text = await acceptCookieButton.getText();
        expectChai(text).to.be.not.empty;
        text.should.be.equal('Accept');
        assertChai.equal(text, 'Accept', "value is not equal");
    });
    it('should contain div tag', async () => {
        const tag = await $('#hs_cos_wrapper_hd_logo');
        const tagName = await tag.getTagName();

        expectChai(tagName).to.equal('div');
    });
});