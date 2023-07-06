module.exports = {
    // Inputs
    nameField: '#new-garment-name',
   
    
    
    // Buttons
    // Functions
    fillName: async function(name) {
        const fromField = await $(this.nameField);
        await fromField.setValue(name);

        return {
            name
        }
    }
}