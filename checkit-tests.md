============


### the key test page 
landing page/mailing list signup.. *our first test of user interest.*


- we're building google now, minus the "creepiness"
- we need some real method of substantiating this claim
- all the computation happens on the client initially?
- after the idea has been validated, use public-key cryptography and onion
  routing to keep user data anonymous?
- perhaps we can perform some computations on encrypted data?


### minimum viable set of data

- three main sources of data
  - emails
  - calendar entries
  - geotags/geofences

Our main problem: how do we get around the "creepy factor"? 

One proposal: add a "tag" option to emails, calendar entries, and GIS data.
In most cases, users know in advance what data is going to be useful.
Specific use cases:

- User gets an email with appointment data -> user tags it 
- User makes a calendar entry -> this will be our core product, because
  users almost always *must* act on calendar/time-sensitive data
- Users must globally opt in to allow computation to be performed on GIS data
    -> We can geofence particular locations using our inferences from cal/mail
    -> If users opt in, we can deliver data based on their location context
