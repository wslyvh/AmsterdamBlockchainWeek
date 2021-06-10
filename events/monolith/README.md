---
####################
### INSTRUCTIONS ###
####################
# This file is a template to create new events. In order to use it, duplicate
# the whole folder (/template) as a new folder (I.E. /my-event-name) inside of
# the /events folder, using for the folder name _only_:
# - lowercase letters
# - hyphens/dashes (-) instead of spaces
# - alphanumeric characters ('a' to 'z', '0' to '9')
# and edit the README.md file inside that new folder just created.
#
# The name of the folder will be used on the URL. Example:
# https://blockchainweek.fr/my-event-name
#
# _Don't_ rename the new file (README.md), only edit its content.
# _Don't_ remove any text before the colons at the beginning of each line,
# only edit what is after the colon. Example:
# Don't remove the word nor colon on 'description:'
#
# Every line starting with a hash symbol (#) is a comment. It will be ignored
# and can be safely removed, including these instructions.
###############


###########
### SEO ###
###########
# The title of the page, displayed by the browser on the title of the window.
# Ideally this is the same as the name of the event.
title: Monolith Meetup Paris - DeFi Tea & Pastries

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: 
  'New to Paris and EthCC giving you sore feet?
  
  Come and relax over tea and pastries in the famous tea rooms of the Great Mosque of Paris, right next to EthCC.
  
  We’re providing free mint tea and pastries.'

#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: Monolith Meetup Paris - DeFi Tea & Pastries

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    'New to Paris and EthCC giving you sore feet? Come and relax over tea and pastries in the famous tea rooms of the Great Mosque of Paris, right next to EthCC. We’re providing free mint tea and pastries.'
  -
    'WHEN? 
    Wednesday, March 4th
    Starting at 7:30 PM'
  -
    'WHERE?
    The Tea Room of the Great Mosque of Paris
    2bis Place du Puits de l Ermite, 75005 Paris, France'
  -
    'Please RSVP as soon as possible so we can make sure that there is food for everyone.'

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2020-03-04
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2020-03-04

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '19:00'
# Time when the event ends. Can be left empty.
endTime: 

# The URL where to akquire the tickets. Can be left empty.
tickets: https://www.meetup.com/monolith/events/268981007/

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue: 

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: 2bis Place du Puits de l Ermite, 75005 Paris, France

# The category of the event. Valid options:
# - conference
# - event
# - hackathon
# - workshop
# - drink
# Use _only_ one, and don't capitalize.
category: drink


#################
### SPEAKERS ####
#################
# There _needs_ to be one hyphen before each entry.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove speakers as needed, but remember the hyphen before each entry.
speakers:
  -
    # # Required.
    #name: Nathan Sexer

    # # Can be left empty.
    #title: Title?

    # # Can be left empty.
    #company: Blockchainweek.fr

    # # The full URL, including http(s)://. Can be left empty.
    #companyURL: https://ethcc.io/

    # # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # # Can be left empty.
    #twitter: nathansexer

    # # The full URL, including http(s)://. Can be left empty.
    #website: https://blockchainweek.fr

    # # The bio is a single line.
    # # Linebreaks are ignored, but they _must_ start with two spaces.
    #bio: Hi.
    #   This is Nathan. 
    name: Mel Gelderman
    title: CEO
    company: Monolith
    companyURL: https://monolith.xyz
    twitter: https://twitter.com/MelGelderman
    #website: https://jdetychey.com
    #bio: Jerome De Tychey is Jerome,
    #  known as Jerome, he co-founded Asseth and leads Asseth with other asseths.
  -
   name: Mischa Tuffield
   title: CTO
   company: Monolith
   companyURL: https://monolith.xyz
   twitter: https://twitter.com/mischat
  -
   name: Brice Berdah "TokenBrice"
   title: Community Lead
   company: Monolith
   companyURL: https://monolith.xyz
   twitter: https://twitter.com/TokenBrice


### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
