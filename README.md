# Use of react-flip-page
This program is used to host questions to participant. Participants are able to download a list of questions and flip through the pages, similar to flip-board. All these are enabled thanks to the library developed by react-flip-page.

## Library used
 
* Webpack
* Typescript
* React
* React-flip-page
* Service Worker

## Installation
Install nodejs. Execute the followings:

1. npm install
2. gulp
3. Codes will be generated in dist/

## Usage for development
As because the program runs as PWA, it must be disabled for development purposes. To run in development, these are the things to do.

1. Remove <Progressive/> tag in src/components/Page.tsx.
2. In browser, open console and unregister the Service worker if exist. In chrome, Application -> Service Worker -> Unregister
3. Execute in command prompt
```
webpack-dev-server
```
