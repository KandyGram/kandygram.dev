var sitesObject = JSON.parse(localStorage.sites);

var siteNames = Object.keys(sitesObject);

if(siteNames.indexOf('https://facebook.com') !== -1){

	if (sitesObject["https://facebook.com"]>6){
		startCall();
	}
}

