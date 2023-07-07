const page = require('../../page');
const helper = require('../../helper')

describe('Add new garment', () => {

    it('should set the name', async()=>{
        await browser.url(`/`)
        const name = await page.fillName('Dress'); 
        //await expect(name.nameField).toHaveValue('Dress');
    })
})