![Banner](https://raw.githubusercontent.com/djalmaaraujo/wedeploy-desktop/master/banner.png?token=AAANSjEZcT_bXeWvhmx-ntTGVBqpIhJfks5Z6oIUwA%3D%3D)

Keep posted on all activites from your projects and services. Monitor your plan usage and access services logs super fast.

## Usage

You can download the latest release [here](https://github.com/djalmaaraujo/wedeploy-desktop/releases).

## This is alpha/beta what ever

This is not an official application and it's basically a proof of concept. 

## Setup

1. Install the dependencies: `yarn install`
2. Start the app: `yarn start`

## Caught a bug?

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Install the dependencies: `yarn install`
3. Start the app: `yarn start`

To make sure that your code works in the bundled application, you can generate the binaries like this:

```bash
yarn pack
```

Check `./dist` folder for installers.

## Roadmap (mvp)

1. [ ] Login

- This will check for `~/.we` file and search for the auth token. If this is not found, will warn the user to login using the tool

2. Activities
- [ ] List all projects with their `health` status badges.

3. Project Details
- [ ] List project activity feed
- [ ] Health status
- [ ] List of services with their `health` badges

4. Usage/Account
- [ ] Show some user stats using `account/usage` api

5. Notifications
- [ ] Alert user once a service is down
- [ ] Alert user once a deploy succeeded
- [ ] Alert user once a deploy failed

## Authors

- Djalma Araújo ([@djalmaaraujo](https://twitter.com/djalmaaraujo))
