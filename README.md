============

## PRODUCT
### the key test page: selling a better Google Now 
landing page/mailing list signup.. *our first test of user interest.*


- we're building google now, minus the "creepiness"
- You know what data is going to be useful in the future, even better than
  google does. 
- So you can just *tag that data* on the client-side, instead of relying on 
  Google to snoop on all your data on the server-side until they figure out 
  what's important to you.

### minimum viable set of data

- three main sources of data
  - emails
  - calendar entries
  - geotags/geofences

add a "tag" option to emails, calendar entries, and GIS data.
In most cases, users know in advance what data is going to be useful.
Specific use cases:

- User gets an email with appointment data -> user tags it 
- User makes a calendar entry -> users almost always *must* act on calendar data
    - calendar data is time-sensitive by nature, and does not require
      additional computation or inference in most cases
- Users can globally opt in to allow computation to be performed on GIS data
    -> We can geofence particular locations using our inferences from cal/mail
    -> If users opt in, we can deliver data based on their _location context_, 
    as well as their _time context_

## TECH
### tech stack
We learned this the hard way: _magic is expensive_. 
However: _magic can be extremely useful_.
Also: you play the hand you're dealt. 
We'll optimize for the team we have.
We're going to write our app in **meteor.js**, using javascript on both the
front-end and the back-end.
We get several extremely important things for free here.
- realtime update from all servers to all clients
- server/client data-binding
- asynchronicity (with _no callbacks or evented code_)
- HTML templating
These, incidentally, are **EXACTLY** the four critical components we need to
build a performant web application in 2013.

Again, though, we can't escape it: _magic is expensive_. 
But: Not all magic is created alike. 
First, though: go [watch the magic](http://www.meteor.com/screencast).

Incredible, right? But shit, that is a _lot_ of magic.

### why some magic (this magic) is okay
Meteor is extremely straightforward, and _simple_, but not _easy_ (remember
simplicity matters?). It doesn't make any restrictions on how
you write your HTML or how you lay out your application's architecture.
For example: data binding in meteor (the real "wow factor" in that screencast
from earlier) is only 74 lines of javascript.
You can go [read it right now](https://github.com/meteor/meteor/blob/master/packages/deps/deps.js).


Meteor consists of two components: the Meteor server and meteor.js, the meteor
client-side library. I'll use "meteor" to refer to them both interchangeably
and as a whole.
Instead of sending HTML over the wire by default, like Ruby on Rails, Meteor
sends JSON by default, and allows you to assemble your HTML client-side for
maximum flexibility.
That JSON can be turned into HTML by any client-side templating library. In our
case, we'll use Handlebars, as that's the default in the Meteor ecosystem.

Because Meteor is composed of two separate parts, we'll have the freedom to
move to whatever other backend service we find most expedient in the future,
while keeping so much of what made Meteor great in the first place.

Hopefully, I've made a convincing case for Meteor.js.

Please check out the [seven principles of Meteor](docs.meteor.com) and **read
the docs** while you're at it. 

That just about sums it up. If you're not convinced, please comment on this
commit, and we can work forward from there. 

And I think what I'm really saying is: look forward to writing a whole lot of 
kick-ass JS this summer.

