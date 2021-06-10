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
title: Exploring Web 3's uncharted territories

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: 
  What is really web 3.0 ? And why is it important? - meetup by Atka

#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: Exploring Web 3's uncharted territories

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    'What is really web 3.0 ? And why is it important? - meetup by Atka'
  -
    'Atka is delighted to welcome you in their offices on Monday 2nd of March 2020, alongside EthCC Paris, for an evening meetup exploring the depth of the Web 3 thesis.'
  -
    'If we assume that the WWW has revolutionized information and the Web2 revolutionizes interactions, the Web3 has the potential to revolutionize agreements and value exchange. It changes the data structures in the backend of the Internet, introducing a universal state layer, governed by incentivizing network actors with tokens.'
  -
    'What does it really mean? And why is it important?'
  -
    'To explore these uncharted territories, we gathered a group of exceptional people to present their views and projects about what Web 3.0 is to them, how they are contributing to its development, what their expectations are.'

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2020-03-02
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2020-03-02

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '18:30'
# Time when the event ends. Can be left empty.
endTime: 

# The URL where to akquire the tickets. Can be left empty.
tickets: https://www.eventbrite.com/manage/events/95461208043/details

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue:  

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: 14 avenue Trudaine, 75009, Paris

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
    name: Ben Livshits
    title: President
    company: Brave Software
    companyURL: https://brave.com/
    twitter: convoluted_code
    website: https://twitter.com/brave
    bio: Ben has built and lead the company's research division from scratch. He is leading a multi-disciplinary team of researchers and engineers both in London and worldwide, who are responsible for a multitude of complex projects in ML, privacy, security, performance, reliability, cryptography, as applied to web technology, advertising, etc.
  -
   name: Thibault Sahaghian
   title: CEO
   company: Multis
   companyURL: https://multis.co/
   twitter: fujisaha
   bio: Multis offers crypto-first business banking. They're building a next-gen banking solution to help companies make the most of their fiat & cryptocurrency funds. Backed by leading US and European investors like Y Combinator, Coinbase Ventures and eFounders, and we're hiring now in Tech, Product & Marketing to build our core team!
  -
    name: Victore Bonhomme
    title: Asset Manager
    company: iExec
    companyURL: https://iex.ec/
    twitter: iEx_ec
    bio: iExec provides scalable and secure access to cloud computing resources. The decentralized future of the cloud computing industry. They’re committed to creating the next generation of IT infrastructure by building a new Cloud computing paradigm.
  -
   name: Matthieu Courtin
   title: Partnerships Director
   company: Ultra
   companyURL: https://ultra.io/
   twitter: mattcourtin
   bio: Ultra is bringing the blockchain revolution to the gaming industry and creating a fair ecosystem for the future of games distribution. With cutting-edge technology, Ultra aims to shake up the gaming industry by putting the power back into the hands of developers and players, paving the way for a first-class game publishing platform.
  -
    name: Pierre Laurent
    title: Co-founder
    company: Atka
    companyURL: https://atka.io/
    twitter: AtkaBlockchain
    bio: Atka is poised to become the go-to advisory firm for blockchain projects by weighing all organizational, regulatory, and technological challenges while operating with full transparency and integrity


### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
