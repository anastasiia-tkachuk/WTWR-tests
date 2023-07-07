const page = require('../../page');
const helper = require('../../helper')

describe('User is signed out', () => {

    it('should be active', async()=>{
    await browser.url(`/`);
    expect(await browser.getTitle()).toContain('WTWR: What to Wear');
  });

  it('should be signed out and show the Sign Up Button', async()=>{
    await browser.url(`/`);
    const signUpButton = await $(page.signUpButton);
    await signUpButton.getText();
    expect(await signUpButton.isDisplayed()).toBe(true);
  });

//   it('should open Register form', async()=>{
//     await browser.url(`/`);
//     await page.openSingnUpForm();
//     const registerForm = await $(page.registerForm);
//     expect(registerForm.isDisplayed()).toBe(true);
//   });

//   it('should fill out email field', async()=>{
//     await browser.url(`/`);
//     await page.openSingnUpForm();
//     await page.setRegisterEmail('free@mail.com');
//     const registerEmailField = await $(page.registerEmailField);
//     expect(registerEmailField.toHaveText('free@mail.com'));
//   });

//   it('should fill out password field', async()=>{
//     await browser.url(`/`);
//     await page.openSingnUpForm();
//     await page.setRegisterEmail('free@mail.com');
//     await page.setRegisterPassword('12345678');
//     const registerPasswordField = await $(page.registerPasswordField);
//     expect(registerPasswordField.toHaveText('12345678'));
//   });

//   it('should fill out confirm password field', async()=>{
//     await browser.url(`/`);
//     await page.openSingnUpForm();
//     await page.setRegisterEmail('free@mail.com');
//     await page.setRegisterPassword('12345678');
//     await page.confirmRegisterPassword('12345678');
//     const registerConfirmPasswordField = await $(page.registerConfirmPasswordField);
//     expect(registerConfirmPasswordField.toHaveText('12345678'));
//   });

//   it( 'should detect if "Next" button is clickable', async()=>{
//     await browser.url(`/`);
//     await page.openSingnUpForm();
//     await page.setRegisterEmail('free@mail.com');
//     await page.setRegisterPassword('12345678');
//     await page.confirmRegisterPassword('12345678');
//     const registerNextButton = await $(page.registerNextButton);
//     expect(registerNextButton.isClickable()).toBe(true);;
//   });

//   it( 'should fill out Name field', async()=>{
//     await browser.url(`/`);
//     await page.openSingnUpForm();
//     await page.setRegisterEmail('free@mail.com');
//     await page.setRegisterPassword('12345678');
//     await page.confirmRegisterPassword('12345678');
//     await page.setRegisterName('Lucky')
//     const registerNameField = await $(page.registerNameField);
//     expect(registerNameField.toHaveText('Lucky'));
//   });

//   it( 'should fill out Avatar field', async()=>{
//     await browser.url(`/`);
//     await page.openSingnUpForm();
//     await page.setRegisterEmail('free@mail.com');
//     await page.setRegisterPassword('12345678');
//     await page.confirmRegisterPassword('12345678');
//     await page.setRegisterName('Lucky')
//     await page.setRegisterAvatar('https://m.media-amazon.com/images/I/91XXks9tlfL._RI_.jpg');
//     const registerAvatarField = await $(page.registerAvatarField);
//     expect(registerAvatarField.toHaveText('https://m.media-amazon.com/images/I/91XXks9tlfL._RI_.jpg'));
//   });

//   it( 'should detect if "Next" button is clickable', async()=>{
//     await browser.url(`/`);
//     await page.openSingnUpForm();
//     await page.setRegisterEmail('free@mail.com');
//     await page.setRegisterPassword('12345678');
//     await page.confirmRegisterPassword('12345678');
//     await page.setRegisterName('Lucky')
//     await page.setRegisterAvatar('https://m.media-amazon.com/images/I/91XXks9tlfL._RI_.jpg');
//     const registerNextButton = await $(page.registerNextButton);
//     expect(registerNextButton.isClickable()).toBe(true);
//   });

//   it( 'should select clothing preferences', async()=>{
//     await browser.url(`/`);
//     await page.openSingnUpForm();
//     await page.setRegisterEmail('free@mail.com');
//     await page.setRegisterPassword('12345678');
//     await page.confirmRegisterPassword('12345678');
//     await page.setRegisterName('Lucky')
//     await page.setRegisterAvatar('https://m.media-amazon.com/images/I/91XXks9tlfL._RI_.jpg');
//     await page.setClothingPreferences();
//    const jeansButton = await $(page.jeansButton);
//    expect(jeansButton.isSelected()).toBe(true);
//   });

//    it( 'should detect if "Register" button is clickable', async()=>{
//     await browser.url(`/`);
//     await page.openSingnUpForm();
//     await page.setRegisterEmail('free@mail.com');
//     await page.setRegisterPassword('12345678');
//     await page.confirmRegisterPassword('12345678');
//     await page.setRegisterName('Lucky')
//     await page.setRegisterAvatar('https://m.media-amazon.com/images/I/91XXks9tlfL._RI_.jpg');
//     await page.setClothingPreferences();
//     const registerButton = await $(page.registerButton);
//     expect(registerButton.isClickable()).toBe(true);
//   });

//   it( 'should register a new user', async()=>{
//     await browser.url(`/`);
//     await page.openSingnUpForm();
//     await page.setRegisterEmail('free@mail.com');
//     await page.setRegisterPassword('12345678');
//     await page.confirmRegisterPassword('12345678');
//     await page.setRegisterName('Lucky')
//     await page.setRegisterAvatar('https://m.media-amazon.com/images/I/91XXks9tlfL._RI_.jpg');
//     await page.setClothingPreferences();
//     registerButton = await $(page.registerButton);
//     page.registerButton.click();
//     page.confirmationButton.click();
//     expect(page.confirmationButton.isDisplayed()).toBe(true);
//   });

})