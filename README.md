mobiletalk website
==============

[![Build Status](https://travis-ci.org/insanity54/mtw.svg?branch=master)](https://travis-ci.org/insanity54/mtw)

Setup
---

* run `npm install` to get all dependency packages
* run `docpad run` to test and develop the site
* run `docpad generate --env static` to render all files into production site
* serve files in `/out` using nginx or similar


Notes
---

* Use `docpad run`, or `npm run start`.
* color scheme: http://colorschemedesigner.com/csd-3.5/#3s61T--umw0w0
* Blue background images
 * Made in GIMP
 * 1824x760px
 * Picture colorized with H: 200, S: 100, L: 0  (pretty much #006699)
 * solid #006699 overlay layer at 50% opacity
 * export jpg at 50% quality
* Create coverage maps using http://blog.sallarp.com/geojson-google-maps-editor.html
 * the editor uses "MultiPolygon", google maps use "Polygon"
 * you can copy the GM polygon coordinaes to the multipolygon coordinates. you may have to mess with the object level though.
 * make sure to keep a backup (a link in the changelog to a public gist is fine) of each map change
 * If your map updates doesn't display when testing, check the browser console for clues.
* kenwood images http://kenwoodusa.dealerarena.com/shop/index.php?dispatch=pages.view&page_id=5


Todos
---

* DONE get some icons that match badges better
* front section mobile optimizations
* move google map css to stylesheet instead of inline
* fix google maps for mobile so users can actually scroll past the map
* DONE make the badges go to col-sm-6
* DONE remove instances of Zello (we'll be using esChat)
* DONE add section telling about compliance with distracted driving laws
* DONE modify future coverage map to show up to sandpoint & a little beyond
* DONE "contact info" section. with deets visible ALWAYS phone, email, address
* DONE place a kenwood mobile and portable radio instead of zello static image on front
* DONE remove last three cellphone badges on "one button press section"
* DONE link badge - change to "instant push-to-talk access" with two radios as icon
* DONE cell bars badge - change to "unlimited voice" with appropriate icon
* DONE wifi bars badge - change to "wide area coverage"
* DONE asterisk badge - change to "Complies with new DOT hands-free driving laws" with appropriate icon
* DONE first section text, "with the app" to a description
* DONE change tesla badge to "Inland northwest coverage"
* DONE add map legend in top left corner "blue: current coverage, red: planned summer 2015 coverage"
* DONE cost effective section - remove PTT over cellular and make 3 columns
* DONE make the woman picture unique for every section.
* DONE remove video preview image
* DONE inbetween "cost effective" and "all about you" put pricing plans
* DONE 3 plans


Todos before launch
---

* find all instances of '@todo' and correct whatever is noted
* change mailchimp owner to scott or kathy or steve so when mail is sent out, it references "scott@twoway.net" not "chris@grimtech.net"



## Changelog

* Jan 26 2017
  * updated coverage map
    * https://gist.github.com/anonymous/6a500860cd3e8fab629b18d4a39e5518
  * added pipedrive form
* Jan 30 2017
  * updated coverage map
    * added Elensburg to prime coverage area
    * https://gist.github.com/anonymous/0434f7d8d55078ee62dc82ddd6900056
  * removed space in npm package name
  * made npm package private
  * changed npm start script to point to `docpad run` instead of `docpad-server`
