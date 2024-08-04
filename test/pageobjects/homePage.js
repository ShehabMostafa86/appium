const searchField = '//android.widget.TextView[@text="Search for product"]'
const loggedName = '//android.widget.TextView[@index=1]'

 


class homePage{

    async getLoggedName(){        
        await expect($(loggedName)).toHaveText('Shehab');
    }

    async search(){
        await $(searchField).click();
    }
}

export default new homePage()
