![Banner](banner.png?raw=true)

Keep posted on all activites from your projects and services. Monitor your plan usage and access services logs super fast.

**This is not an official application and it's basically a proof of concept.**

## Usage

You can download the latest release [here](https://github.com/djalmaaraujo/wedeploy-desktop/releases).


## Getting Started
Simply clone down this reposity, install dependencies, and get started on your application.

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

```bash
yarn install
```

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```

## Caught a bug?

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Install the dependencies: `yarn install`
3. Start the app: `yarn start`

To make sure that your code works in the bundled application, you can generate the binaries like this:

```bash
yarn dist
```

Check `./dist` folder for installers.

## Roadmap (MVP / Future releases)

1. Login
- [x] Check for `~/.we` file and search for the auth token. If this is not found, will warn the user to login using the tool

2. Projects
- [x] List all projects with their `health` status badges.

3. Project Details
- [ ] List project activity feed
- [x] Health status
- [x] List of services with their `health` badges

4. Usage/Account
- [x] Show some user stats using `account/usage` api

5. Notifications
- [x] Alert user once a service is down
- [ ] Alert user once a deploy succeeded (We need an API for this.. wedeploy?) :)
- [ ] Alert user once a deploy failed (We need an API for this.. wedeploy?) :)

6. Installers
- [x] macOs installer

## Screenshots

![Ss1](ss/1.png?raw=true)
![Ss2](ss/2.png?raw=true)
![Ss3](ss/3.png?raw=true)
![Ss4](ss/4.png?raw=true)

## Authors

- Djalma Araújo ([@djalmaaraujo](https://twitter.com/djalmaaraujo))
