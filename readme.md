# !AFK ( Not Away From Keyboard )

This bookmarklet will auto scroll the current webpage you are on every `var period = ` minutes. Currently every 30 seconds. Simply update to the required
period, [generate the bookmarklet code](http://mrcoles.com/bookmarklet/) and add it as a bookmark to your browser.

```javascript:(function()%7B( function () %7Bvar minute %3D 60 * 1000 %09%09%09%09%09%2Cperiod %3D parseFloat ( 0.5 ) %09%09%2Cheight %3D document.body.clientHeight %3Bwindow.setInterval ( function () %7Bvar random %3D Math.floor ( Math.random () * height )%3Bwindow.scrollTo ( 0 %2C random )%3B%7D %2C ( minute * period ))%3B%7D ())%7D)()```