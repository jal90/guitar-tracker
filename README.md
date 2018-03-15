# GUITAR TRACKER v1.0

## Deployed sites:

https://jal90.github.io/guitar-tracker/
http://guitartracker.herokuapp.com/

#### Technologies used (client):
* javascript
* jquery
* html
* css
* handlebars
* json

#### This is a work in progress. Additions to be implemented:

* Improve design - espcially that of the catalog view

* Capitalize make, model, string brand inputs

* Search catalog by make, or any field at all, return results matching query

* Possibly add a gig tracker, which would completely expand the site, making it
a database for gigs as well. Guitars could be tied to gigs (example: used guitar1
for gig1, gig2, and gig3; used guitar2 for gig4)

* Increase validation, so that simply having an '@' in the email field isn't enough - a working domain name required as well.

* Normalize string guage input. Currently users can choose to enter whole numbers or decimals.
Since true string size is in decimals (ex: 0.011), but people refer to them as whole numbers (ex: '10s' or '11s')
I let the user choose how to enter. But maybe it should be normalized after a successful entry.

* Implement drop-down lists for makes, models, and string brands, while including an 'other' input Âfield to cover all the bases.
Makes wouldn't require too much work; neither would string brands. Models would be a longer process; though with the 'other' button there, I wouldn't have to sweat too much about including them all.


* TOAST instead of success modal

* update guitars in place so they don't move

#### Wireframes:

https://imgur.com/a/0diOM

#### Original user stories:

* As a user I want to see a list of all the guitars I own
* As a user I want to see when I changed the strings last
* As a user I want to see what brand and guage strings I used
* As a user I want to see the last time I set my guitar up
* As a user I want to write and see notes about the setup

#### Development:

Development started with the backend. Using Ruby/Rails, I set up a database with users and guitars in a one-to-many relationship. Guitars are owned by users, so no action can be completed without authentication. Rails allowed this setup to be a breeze, though ownership code came with some hiccups, as I wasn't well acquainted with it.

The client took a lot more work to set up. Getting forms styled and catching invalid inputs took some work. The biggest problems faced involved handlebars, another techinlogy I wasn't too familiar with. I put code for a modal in my handlebars file (since the button that activated the modal was also created by handlebars) but that led to a very strange bug where the modal would work correctly in many settings, but would break when an entry was deleted, and the rest of the entries moved over to take up the space left behind. Moving the modal to my index.html file fixed this.

Also, selecting data-ids (that could correspond to the ids in my guitars database) was easy enough with handlebars, but was much trickier was how to transfer that id into the modals that would pop up for edit and delete. Since I was working on edit and deleted before GET show, it didn't occur to me that doing a GET show request could store the current guitar in the store file, and it would update as the user clicked on different guitars.

There was much searching the web (mostly stack-overflow, but W3Schools provided nice code examples that I could demo in their website), and on several occasions I asked classmates for help, or looked at the code on their site for ideas for fixes or cool ways to display information. It still amazes me that the code for every site on the web is public information. I learned a lot by reading other people's code.
