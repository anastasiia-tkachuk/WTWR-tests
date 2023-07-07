module.exports = {
    // Inputs
    nameField: '#new-garment-name',
   
    
    
    // Buttons
    addClothesButton: '.navigation__button=+ Add clothes',
    // Functions
    fillName: async function(name) {
        const addClothesButton = await $(this.addClothesButton);
        await addClothesButton.waitForDisplayed();
        await addClothesButton.click();
        const fromField = await $(this.nameField);
        await fromField.setValue(name);

        return {
            name
        }
    }
}