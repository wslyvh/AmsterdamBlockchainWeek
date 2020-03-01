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
title: 'Lancement de l'ADAN : explorer ensemble l’avenir des actifs numériques'

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: 
  'L`Association pour le Développement des Actifs Numériques vous invite à célébrer son tout récent lancement autour de son équipe de permanents, ses membres, et ses futurs adhérents !'

#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: 'Lancement de l`ADAN : explorer ensemble l’avenir des actifs numériques'

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    'L`Association pour le Développement des Actifs Numériques vous invite à célébrer son tout récent lancement autour de son équipe de permanents, ses membres, et ses futurs adhérents !'
  -
    'A l`occasion de cet événement, un panorama de l’industrie des actifs numériques et de ses enjeux pour la France et l’Europe vous sera présenté par Simon Polrot, Président de l’Association. Un panel d’experts viendra ensuite exposer, et confronter, leur vision des transformations à venir du marché des actifs numériques et du système bancaire et financier traditionnel. Vous serez ensuite chaleureusement invité à rester pour échanger avec l’équipe et l’ensemble des invités au cours du cocktail clôturant les festivités.'
  -
    'Nous vous donnons ainsi rendez-vous le vendredi 6 mars à partir de 15h, dans les locaux de Bpifrance.'

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2020-03-06
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2020-03-06

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '15:00'
# Time when the event ends. Can be left empty.
endTime: 

# The URL where to akquire the tickets. Can be left empty.
tickets: https://www.eventbrite.fr/e/billets-lancement-de-ladan-explorons-ensemble-lavenir-des-actifs-numeriques-94195018837

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue: Bpifrance

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: 8 Boulevard Haussmann, 75009 Paris

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
    name: Simon Polrot
    title: President
    company: ADAN
    companyURL: adan.eu
    twitter: simonpolrot
    #website: https://jdetychey.com
    #bio: Jerome De Tychey is Jerome,
    #  known as Jerome, he co-founded Asseth and leads Asseth with other asseths.

### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
