# Post Crash Help

Its an a web application.

## Getting Started

First thing, just clone the repo.

### Installation

First, run npm install command in the root directory so that concurrently will be installed in your repository.

```
npm install
```

After, installation is done then run npm install-dependencies command so that all the front-end and back-end dependencies will be installed in the respective directory. It might take while to install all packages, so please be patient.

```
npm run install-dependencies
```

### MongoDB URI

In order to run the application, you will need to put the mongoDB URI's in the default.json file which is present inside of config directory.

```
"hostedMongoURI": "mongoDBAtlas",
"localMongoURI": "localMongoDB"
```

## Running App

Make sure you are in root folder and just run the following command. It will start front-end and back-end with a single script.

```
npm run start
```

## Happy coding
