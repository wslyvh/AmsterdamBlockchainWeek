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
title: 'Unpopular opinion: DeFi is full of risks and has privacy issues'

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: 
  Let’s talk about the nitty gritty issues…. DeFi is not perfect, and it’s about time we delve into the security risk issues, and what we can do better. We can’t wait to welcome you in Paris for an evening of DeFi, networking, and tasty French-style cuisine.

#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: 'Unpopular opinion: DeFi is full of risks and has privacy issues'

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    'In its current state, Decentralized Finance (DEFI) is great, but — due to its overcollateralized nature — cannot serve all credit use cases and everyone in need of financing.'
  -
    'Solving this conundrum will need to involve trust, identity and potentially novel forms of financial protocols.'
  -
    'There is no silver bullet, but we will have talks and discussions around concepts and potential solutions that bring us closer to undercollateralized DEFI.'

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2020-03-03
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2020-03-03

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '18:00'
# Time when the event ends. Can be left empty.
endTime: 

# The URL where to akquire the tickets. Can be left empty.
tickets: https://www.eventbrite.co.uk/e/unpopular-opinion-defi-is-full-of-risks-and-has-privacy-issues-tickets-97345999505

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue:  Liberte Living-Lab

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: 9 Rue d'Alexandrie 75002 Paris France

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
    name: Stani Kulechov
    title: CEO
    company: Aave
    #companyURL: mailto:mareen@gnosis.io
    #twitter: ETHBerlin
    #website: https://jdetychey.com
    bio: Stani is the Founder and CEO of Aave, an open source and non-custodial protocol to earn interest on deposits and borrow assets. Stani was studying law at the University of Helsinki when he first got into Ethereum and he started exploring how it could impact the traditional financial system. In 2017, Stani released ETHLend, one of the first DeFi dapps ever. Since then, he has made it his mission to create tools for an open, transparent, and equitable financial ecosystem through Aave Protocol.
  -
   name: Gonçalo Sá
   title: Co-Founder
   company: ConsenSys Diligence
   #companyURL: https://www.stake.capital/
   Bio: Gonçalo Sá has been a passionate hacker since he can remember. Disassembling stuff was always his business, either online or at home. He founded 3 different startups (AdTech, BioTech, Mobile App) but when he realized his real love was decentralization, he turned to Ethereum and never looked back. Since then he has become an unapologetic technocrat that really believes in humanity with a little help from smart contracts. Whenever he’s able, you’ll find him writing or exploiting solidity code, climbing or playing paddle.
  -
   name: Jordan Lyall
   title: Product Lead
   company: ConsenSys Codefi
   Bio: Jordan leads the team building the DeFi Score, a community-driven standard for assessing and communicating DeFi risk. Prior to joining ConsenSys, Jordan ran the product team at Totle, a DEX liquidity network. He is passionate about bringing design and usability to web3.
  -
   name: Min Teo
   title: Partner
   company: ConsenSys Labs Investments
   Bio: Min leads venture investments on behalf of ConsenSys. She is based in London.

  -
   name: Hugh Karp
   title: Founder
   company: Nexus Mutual
   Bio: Nexus Mutual is an automated discretionary mutual running on Ethereum. Hugh is an insurance professional and actuary with over 15 years of experience in the insurance industry. He has held a variety of roles in both primary and reinsurance companies including as CFO for a global reinsurers’ Life operations in the UK.

  -
    name: Julien Thevenard
    title: Investment Associate
    company: Fabric Ventures
    Bio: Fabric Ventures is a VC fund adapting the early, technical, and patient approach of venture capital to investing in Web 3.0 and decentralised data networks. Prior to joining Fabric, Julien was an Engineer at Shell and Airbus, and he holds a Master of Engineering from Imperial College London. Fabric is proud to have backed Orchid, Polkadot, Ramp, Centrifuge, Tagomi, Messari, Staked, and many other talented teams.
  -
   name: Zac Williamson
   title: Creator
   company: AZTEC Protocol
   bio: Zac holds a Doctorate in neutrino physics from Oxford. Former physicist at CERN and T2K Japan. Creator of the AZTEC Protocol and author of the Barretenberg Library. Co-creator of the PLONK Universal SNARK.

### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
