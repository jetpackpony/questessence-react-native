# QuestEssence
QuestEssence is a React Native app which provides a fun and engaging way to explore world's most famous landmarks

QuestEssence allows you to explore world's most famous landmarks in the form of quests - sets of puzzles and
questions you need to solve to progress in the quest.

This project was never properly completed and launched. This is just a demo app which I created to showcase the idea.
It fully works and has 3 dummy quests built in to demonstrate its functions.

This app is developed with React Native and Redux. It works on both Android and iOS, though not available
in the App Store due to me being broke af. It uses Firebase as a remote database where quests and user
progress are stored. Progress synchronization with the server will be enabled if you log in with your 
facebook account (you will be prompted when downloading a quest). Note that we only ask for a public 
facebook profile and don't store any of your data in our database except for user id which facebook auth returns.

The app is available in English and Russian and will automatically switch depending on your phone’s language setting.

## Installation

* `git clone` this repository
* `cd` into cloned directory
* `npm install`
* `cp js/config.js.sample js/config.js` and add Firebase app data to js/config.js file
* change the name of the Android emulator to the one you have at `scripts/emulator` (alternatively you can start emulator from Android Studio launching the app)

## Running/Development

Run `npm start` or `./scripts/start-server` to start a development JS server.

### Android

Launch the emulator

```
$ ./scripts/emulator
```

Alternatively, launch it from Android Studio or connect a real device.

Build the debug app version and install it:

```
react-native run-android
```

### iOS

Run `react-native run-ios`

## Testing

Tests are in `__tests__` directory. Run tests by `npm test`

## Building

### Android

To generate a signed apk ready to upload to Google Play, you need to setup your signing keys and gradle. Refer to the [Generating Signed APK](https://facebook.github.io/react-native/docs/signed-apk-android.html) page for the guide on how to do that.

To build a release apk and install it on the device, run:

```
./scripts/run-android-release
```
