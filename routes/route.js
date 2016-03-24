exports.home = function(req, res){
    res.render('home', {title: "Amazing Cities",
                        headline: "Cities To Visit"});
};

exports.city = function(req, res){
    var cityName=req.params.city;
    var title, heading;
    var bannerUrl = cityName + '-banner.jpg';

    if(cityName === 'london'){
        res.render('city', {title: "London",
                        headline: "Capital of Great Britain",
                        backgroundImage: bannerUrl});
    }
    if(cityName === 'paris'){
        res.render('city', {title: "Paris",
                        headline: "Fashion Capital of World",
                        backgroundImage: bannerUrl});
    }
    if(cityName === 'newyork'){
        res.render('city', {title: "NewYork",
                        headline: "Business Capital of World",
                        backgroundImage: bannerUrl});
    }
    if(cityName === 'madrid'){
        res.render('city', {title: "Madrid",
                        headline: "Football Capital of World",
                        backgroundImage: bannerUrl});
    }
};