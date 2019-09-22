# Flipcoin

## Description

The goal is an application allowing users to create a room with full chat capabilities, as well as setting on some rules to produce a random result. Then, after the acceptance coming from all the participants, this random result is produced for them to use.

## Motivation

Project came to life as I wanted to settle a dispute with my friend online using a coin toss. Unfortunately the physical one was out of option, and, to my surprise, coin flip apps on the internet were either not multiplayer, required login or had some other annoying flaw and we both denied using them, as well as we wouldn't do it through a TeamViewer or a webcam - we're not animals. TL;DR: I've started it because I was angry due to minor and unimportant inconvenience.

## Implementation

Techstack used is pretty classic, React+Redux and SASS styling on the front with Express.js on backend. Instead of normal API I've decided to try out socket.io for a live communication, as it seems to fit pretty well for a live room & chat management.

The optional feature I think hard of is some kind of tinfoil security measurements, so even if the server and 99 clients are malicious bad party trying to make me lose my bet with a coin toss - I still could tell that this toss was a hoax. Maybe some kind of common-generated seed exchanged by all the parties(initially encrypted parts of the seed)?

### Legend

:heavy_check_mark: Done  
:x: Not done  
:wavy_dash: `Comment`

### Requirements

- App should consist of the **welcome page** and the **room**
- **Welcome page**:
  - :x: Contains information about the project
  - :heavy_check_mark: Allows creation of a new room
  - :heavy_check_mark: Redirects to the room when it's created
  - :heavy_check_mark: Join room with name feature
  - :x: Responsive and nicely styled
- **Room**:
  - :heavy_check_mark: Consists of **chat**, **user list** and **settings** areas
  - :heavy_check_mark: Gets the room info from API
  - :heavy_check_mark: Save token, when getting one from the server
  - :heavy_check_mark: Save last username
  - :x: Displays error when failed to join room for some reason(like it's not existing)
  - :x: :wavy_dash: `To be thought about` Tinfoil rolls
    - **Chat**:
      - :heavy_check_mark: Displays messages and updates with new ones
      - :heavy_check_mark: Allows to send a new message to the room
      - :x: Make it more readable(maybe a color for each user?)
    - **User list**:
      - :heavy_check_mark: Displays users currently joined to the socket
      - :heavy_check_mark: Shows whether or not the user marked himself as ready
      - :heavy_check_mark: Make it clear who is the host
    - **Settings**:
      - :heavy_check_mark: Display available settings
      - :heavy_check_mark: Allow user to change his confirmation status
      - :x: Allow changing settings for host only
      - :x: Update users about changes to settings
      - :x: Automatically make everyone not ready on settings change
      - :x: When everyone is ready host can start the roll
