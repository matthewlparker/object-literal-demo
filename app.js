'use strict';


// var el = document.getElementById('info');

var storeHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];




// Cookie Shop Object Constructor
function CookieShop(title, minCustomer, maxCustomer, avgCookie){
  this.title = title;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.totalCookies = 0;
  this.cookiesPerHour = [];

}


CookieShop.prototype.getHourlyCookies = function(maxCust, minCust, avgCookie){
  return Math.round(Math.floor(Math.random()*(maxCust-minCust + 1) + minCust) * avgCookie);

};

CookieShop.prototype.getCookiesPerHour = function(){
  for (var i = 0; i < 15; i++){
    this.cookiesPerHour.push(this.getHourlyCookies(this.maxCustomer, this.minCustomer, this.avgCookie));
  }
};

CookieShop.prototype.printCookiesHours = function(){
  for (var i = 0; i < 15; i ++){


var firstAndPike = new CookieShop('1st and Pike', 23, 65, 6.3);
