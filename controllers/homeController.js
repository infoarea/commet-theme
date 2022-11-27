
const path = require('path');
const { readFileSync, writeFileSync } = require('fs');



const homeController = (req, res)=> {

    const slider = JSON.parse(readFileSync(path.join(__dirname, '../db/slider.json')));

    res.render('home/index', {
        slider
    });

  

}

//Admin Panel 
const adminPanelController = (req, res) => {

    res.render('home/admin');
}
//Slider Route
const sliderController = (req, res) => {

    //get form data
    const { title, subtitle, photo} = req.body;

    const slider = JSON.parse(readFileSync(path.join(__dirname, '../db/slider.json')));

    //last Id
    //last id
    let last_id = 1;
    if (slider.length  > 0) {
        
      last_id = slider[slider.length - 1].id + 1;
    }

    
    slider.push(
        {
            id : last_id,
            title : title,
            subtitle : subtitle,
            photo: req.file ? req.file.filename : '1.jpg'
        }
    );

    //Data write to json db
    writeFileSync(path.join(__dirname, '../db/slider.json'), JSON.stringify(slider));

    //Redirect
    res.redirect('/comet/admin');
}

module.exports = {
    homeController,
    adminPanelController,
    sliderController
}