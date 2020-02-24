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
title: 'The Ethereum momentum : On the road to Product-Market fit'

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: 
  Dispute Revolution is a conference on Decentralized Justice and the future of the Law and LegalTech, organised by the Cooperative Kleros alongside Paris Center for Law and Economics (CRED) Panthéon-Assas Paris 2 University.

#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: 'The Ethereum momentum : On the road to Product-Market fit'

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    'The Ethereum momentum : On the road to Product/Market fit. The First edition of the ConsenSys Product Roadshow'
  -
    'Join us for the first edition of the ConsenSys Product Roadshow with a special guest: Joe Lubin, co-founder of Ethereum and CEO of ConsenSys.'
  -
    'The Ethereum Community Conference (EthCC Paris) is around the corner and we wanted to leverage this fantastic opportunity to bring together some of the key technology influencers and the early and most active users in the blockchain space around a strong and insightful topic: Product Market/fit.'
  -
    'There are numerous reasons why this is the best time to tackle this huge question: the maturity and professionalization of the Ethereum ecosystem, the growing and impressive track record of Enterprise and financial institution adoption, and a tech stack that is gaining ground among thousands of developers.'
  -
    'This morning event will take place on March 2nd, at the ConsenSys office in Paris and will be a combination of a keynote, interactive client testimonial and working session to ensure speakers can share best practices and gather insight from the audience, while setting the scene for all the product representatives at ConsenSys to showcase the latest exciting features and foster user feedback during these sessions and the lunch party.'
  -
    'Check out the agenda and register today! Places are limited.'

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2020-03-02
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2020-03-02

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '09:30'
# Time when the event ends. Can be left empty.
endTime: 

# The URL where to akquire the tickets. Can be left empty.
tickets: https://consensysproductroadshow.splashthat.com/

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue:  ConsenSys Paris

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: 10 Rue Vauvilliers Paris, IDF

# The category of the event. Valid options:
# - conference
# - event
# - hackathon
# - workshop
# - drink
# Use _only_ one, and don't capitalize.
category: conference


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
    name: Joe Lubin
    title: CEO
    company: ConsenSys
    #companyURL: mailto:mareen@gnosis.io
    #twitter: ETHBerlin
    #website: https://jdetychey.com
    #bio: Jerome De Tychey is Jerome,
    #  known as Jerome, he co-founded Asseth and leads Asseth with other asseths.
  -
    name: Sean Brenann
    title: Developer Relations
    company: Infura
  -
    name: Analia Ramos 
    title: Tech Writer
    company: PegaSys Orchestrate
  -
    name: David Teruzzi
    title: CTO
    company: AURA, LVMH
  -
    name: Felipe Faraggi
    title: Developer Relations
    company: PegaSys
  -
    name: Mara Schmidt
    title: Product Lead
    company: CodeFi Activate
  -
    name: Gonçalo Sa
    company: ConsenSys Diligence
  -
    name: Julien Marchand
    title: Product Lead
    company: PegaSys Orchestrate

### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
