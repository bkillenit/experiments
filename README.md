============


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
