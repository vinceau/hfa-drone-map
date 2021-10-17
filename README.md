# HFA Drone Map

## Setup

This application uses the Mapbox API for rendering map information.
You will need to make sure that the environment variable `REACT_APP_MAPBOX_KEY` is defined with your Mapbox API key.

Copy the `.env.example` into a file called `.env`, and replace the example text with your key. This `.env` file is automatically read when building the web page.

## Development

### Prerequisites

These are the applications you will need to install in order to build this project:

- [Git](https://git-scm.com/downloads)
- [Node v14+](https://nodejs.org/en/)

### Build Steps

First, clone the repo.

```bash
git clone https://github.com/vinceau/hfa-drone-map.git
```

Then install the dependencies.

```bash
npm install
```

To run the app in development mode:

```bash
npm run start
```

Then open <http://localhost:3000> to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

To build the app for prodcution:

```bash
npm run build
```

The resulting bundle will be in the `build` folder.
