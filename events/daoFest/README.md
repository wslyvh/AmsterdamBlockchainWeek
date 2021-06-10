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
title: DAOfest — France Blockchain Week

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: 
  DAOFest is excited to organize yet another grassroot community led event. After EthDenver, now EthCC! This is a side event happening at The Garage, 30min walk from EthCC.

#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: DAOfest — France Blockchain Week

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    'DAOFest is excited to organize yet another grassroot community led event. After EthDenver, now EthCC! This is a side event happening at The Garage, 30min walk from EthCC.'
  -
    'The is event is participatory, it encourages interactions between all attendees. Each activity is facilitated in order to foster quality debates and inspirational thoughts. It will be punctuated by very short interventions.'
  -
    'Note: check this page again soon, this program will be updated.'
  -
    '9:00 — Fishbowl Discussion initiated by Christoph Jentzsch
    19:00 — Decidology Workshop (group decision, leave your big ego behind!) by Duc Ha Duong of Officience
    20:30 — CadCAD Workshop (bring your laptop!) by Griff Green of Commons Stack and Giveth
    20:30 — DAOcanvas Workshop (hold on to your seat!) by Adrien/Felipe/Luuk of DAOFest/FestDAO'
  -
    'Recommended reads:
    https://www.daofest.io
    http://daocanvas.io
    https://cadcad.org
    https://www.reinventingorganizations.com
    https://officience.com/en/story
    https://commonsstack.org
    https://giveth.io'

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2020-03-05
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2020-03-05

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '19:00'
# Time when the event ends. Can be left empty.
endTime: 

# The URL where to akquire the tickets. Can be left empty.
tickets: https://www.meetup.com/fr-FR/ASSETH/events/268856523/

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue:  The Garage

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: 5 rue du Vertbois, 75003 Paris

# The category of the event. Valid options:
# - conference
# - event
# - hackathon
# - workshop
# - drink
# Use _only_ one, and don't capitalize.
category: event


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
    name: Christoph Jentzsch
    #title: President
    #company: Soon™
    #companyURL: mailto:adrien.berthou@gmail.com
    #twitter: ETHBerlin
    #website: https://jdetychey.com
    bio: Fishbowl Discussion
    #  known as Jerome, he co-founded Asseth and leads Asseth with other asseths.
  -
    name: Duc Ha Duong
    #title: President
    company: Officience
    bio: Decidology Workshop (group decision, leave your big ego behind!)
  -
    name: Griff Green
    #title: President
    company: Commons Stack & Giveth
    bio: CadCAD Workshop (bring your laptop!) 
  -
    name: Adrien/Felipe/Luuk
    #title: President
    company: DAOFest/FestDAO
    bio: DAOcanvas Workshop (hold on to your seat!)
### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
