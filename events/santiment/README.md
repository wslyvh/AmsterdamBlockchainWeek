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
title: 'Crypto Conversations: Let the Data speak'


# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: 
  Following Day 1 of Ethereum Community Conference (EthCC), Kaiko & Santiment are hosting an evening on Crypto data, markets and investing!

#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: 'Crypto Conversations: Let the Data speak'

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    'Following Day 1 of Ethereum Community Conference (EthCC), Kaiko & Santiment are hosting an evening on Crypto data, markets and investing!'
  -
    'Join Ambre Soubiran (CEO, Kaiko) and Maksim Balashevich (Founder, Santiment) along with Tomasz Kajetan Stańczak (Founder, Nethermind) and Fredrik Haga (Co-founder and CEO, Dune Analytics) in their data-driven discussion on the current state of crypto. Expect to meet the investors of Digital Assets, Crypto community of Paris and newcomers to Blockchain.'
  -
    'All are welcome. Light refreshments will be served. This event will take place in English.'
  -
    'Code of Conduct: All attendees, speakers, sponsors, organizers and volunteers at this meetup are required to agree with the following code of conduct. This event is dedicated to providing a harassment-free meetup experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices.'
  -
    'We do not tolerate harassment of participants in any form. Sexual language and imagery is not appropriate for any event venue, including talks, workshops, parties, Twitter and other online media. Event participants violating these rules may be sanctioned or expelled from the event without a refund at the discretion of the conference organisers. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the event staff immediately. Inspired by; https://confcodeofconduct.com/'

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2020-03-03
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2020-03-03

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '19:00'
# Time when the event ends. Can be left empty.
endTime: 

# The URL where to akquire the tickets. Can be left empty.
tickets: https://cryptodataparis.eventbrite.com/

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue:  TBA

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: 

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
    name: Ambre Soubiran
    title: CEO
    company: Kaiko
    companyURL: https://www.kaiko.com/
    twitter: https://twitter.com/ambresoub
    #website: https://jdetychey.com
    #bio: Jerome De Tychey is Jerome,
    #  known as Jerome, he co-founded Asseth and leads Asseth with other asseths.
  -
   name: Maksim Balashevich
   title: Founder
   company: Santiment
   companyURL: https://santiment.net/
   twitter: https://twitter.com/balance_ra
  -
    name: Tomasz Kajetan Stańczak
    title: Founder
    company: Nethermind
    companyURL: https://nethermind.io/
    twitter: https://twitter.com/nethermindeth
  -
    name: Fredrik Haga
    title: Co-founder and CEO
    company: Dune Analytics
    companyURL: https://www.duneanalytics.com/
    twitter: twitter.com/hagaetc

### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
