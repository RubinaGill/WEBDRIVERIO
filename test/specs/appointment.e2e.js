import AppointmentPage from '../pages/appointment.page'
describe('Ask For a Call', ()=>{
    before(async () => {
        await AppointmentPage.open();
    });
    it('should open the Lets talk url and verify the title', async () => {
        await expect(browser).toHaveTitle('Contact us | The Family Office');
    });

    it('should enter details name details', async () => {
        await AppointmentPage.firstNameTextBox.addValue('first test');
        await AppointmentPage.lastNameTextBox.addValue('last test');

        await expect(AppointmentPage.firstNameTextBox).toHaveValue('first test');
    });

    it('should select nationality', async () => {
        const nationality = await $('#nationality option:nth-child(3)');
        await nationality.click();
        await expect(nationality).not.toHaveAttribute('selected');
    });
});