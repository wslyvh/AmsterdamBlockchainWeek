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
title: Eth2 Staking

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: 
  Talks about Eth2 staking theorics, liquid staking, MEV, deploy and manage Eth2 validators.

#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: Eth2 Staking

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    Eth2 is one, if not the hypest, topic in crypto right now.

  -
    The transition from PoW to PoS comes with loads of challenges and innovation, making blockchains more efficient and secure.

  -
    In addition to our dedicated EthCC talk, Managing Eth2 validators at scale, we will be delighted to dive into the Ethereum 2.0 staking ocean.

    

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2021-07-20
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2021-07-20

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '19:00'
# Time when the event ends. Can be left empty.
endTime:

# The URL where to akquire the tickets. Can be left empty.
tickets: https://www.meetup.com/skillz/events/278720057/

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue: SkillZ office + online streaming

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: 14 Avenue Trudaine, Paris

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
    # Required.
    name: Vasiliy Shapovalov

    # Can be left empty.
    title:

    # Can be left empty.
    company: Lido

    # The full URL, including http(s)://. Can be left empty.
    companyURL: https://lido.fi/

    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    twitter: _vshapovalov

  -
    # Required.
    name: Tomasz Kaetan Stanczak

    # Can be left empty.
    title:

    # Can be left empty.
    company: Flashbots

    # The full URL, including http(s)://. Can be left empty.
    companyURL: https://explore.flashbots.net/

    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    twitter: tkstanczak

  -
    # Required.
    name: Iulian Rotaru

    # Can be left empty.
    title:

    # Can be left empty.
    company: SkillZ

    # The full URL, including http(s)://. Can be left empty.
    companyURL: https://skillz.io/

    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    twitter: m_rtimr



    # # The full URL, including http(s)://. Can be left empty.
    #website: https://blockchainweek.fr

    # # The bio is a single line.
    # # Linebreaks are ignored, but they _must_ start with two spaces.
    #bio: Hi.
    #   This is Nathan. 
    #name: See all speakers
    #title: President
    #company: HERE
    #companyURL: https://ethcc.io/speakers.html
    #twitter: Ethereum_France
    #website: https://jdetychey.com
    #bio: Jerome De Tychey is Jerome,
    #  known as Jerome, he co-founded Asseth and leads Asseth with other asseths.

### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
