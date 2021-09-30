import { default as Page } from "./page";

class AppointmentPage extends Page {
    get firstNameTextBox() {
        return $('#firstname');
    }

    get lastNameTextBox() {
        return $('#lastname');
    }

    async open() {
        await super.open("https://www.tfoco.com/en/scheduler?hsCtaTracking=d3ff18c5-6130-4552-85d2-52b52523f971%7Cc4e58f33-bcb0-4cc6-bf10-2729c95eafd2");
    }
}

export default new AppointmentPage();