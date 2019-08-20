# Flipcoin

## Description

The goal is an application allowing users to create a room with full chat capabilities, as well as setting on some rules to produce a random result. Then, after the acceptance coming from all the participants, this random result is produced for them to use.

## Why

Project came to life as I wanted to settle a dispute with my friend online using a coin toss. Unfortunately the physical one was out of option, and, to my surprise, coin flip apps on the internet were either not multiplayer, required login or had some other annoying flaw and we both denied using them, as well as we wouldn't do it through a TeamViewer or a webcam - we're not animals. TL;DR: I started it because I was angry due to minor and unimportant inconvenience.

## Implementation

Techstack used is pretty classic, React+Redux and SASS styling on the front with Express.js on backend. Instead of normal API I've decided to try out socket.io for a live communication, as it seems to fit pretty well for a live room & chat management.

The optional feature I think hard of is some kind of tinfoil security measurements, so even if the server and 99 clients are malicious bad party trying to make me lose my bet with a coin toss - I still could tell that this toss was a hoax. Maybe some kind of common-generated seed exchanged by all the parties(initially encrypted parts of the seed)?
