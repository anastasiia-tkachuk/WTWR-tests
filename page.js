module.exports = {
    // Inputs
    registerEmailField:'#register-email',
    registerPasswordField: '#register-password',
    registerConfirmPasswordField: '#confirm-password',
    garmentNameField: '#new-garment-name',
    registerNameField: '#register-name',
    registerAvatarField: '#register-avatar',
    
   // Modals
   registerForm:'form.form[name="register"]',
   confirmationModal: 'p.confirmation__text=Registration is complete, congrats!',
    
    
    
    // Buttons
    signUpButton: 'button=Sign Up',
    addClothesButton: 'button= + Add clothes',
    registerNextButton: 'button.form__submit-button[aria-label="Next page"]', //'form__submit-button false = Next',
    jeansButton: 'button.preferences__button = Jeans',
    registerButton: '.form__submit-button false = Register',
    confirmationButton: 'button.confirmation__button=Ok',


    // Functions

    openSingnUpForm: async function() {
        const signUpButton = await $(this.signUpButton);
        await signUpButton.click();
    },

    setRegisterEmail:async function(registerEmail) {
        const registerEmailField = await $(this.registerEmailField);
        await registerEmailField.setValue(registerEmail);
    },

    setRegisterPassword:async function(registerPassword) {
        const emailField = await $(this.registerPasswordField);
        await emailField.setValue(registerPassword);
    },

    confirmRegisterPassword:async function(registerConfirmPassword) {
        const registerConfirmPasswordField = await $(this.registerConfirmPasswordField);
        await registerConfirmPasswordField.setValue(registerConfirmPassword);
    },

    setRegisterName:async function(registerName) {
        this.registerNextButton.click();
        const registerNameField = await $(this.registerNameField);
        await registerNameField.setValue(registerName);
    },

    setRegisterAvatar:async function(registerAvatarUrl) {
        const registerAvatarField = await $(this.registerAvatarField);
        await registerAvatarField.setValue(registerAvatarUrl);
    },

    setClothingPreferences:async function() {
        this.registerNextButton.click();
        this.jeansButton.click();
    }
}
