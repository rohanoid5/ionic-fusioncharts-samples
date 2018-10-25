# ionic-fusioncharts-samples

## Installation

To run this sample application you need to install a few modules. In order to do that run:

```bash
$ npm install
```

Also we need to install [Apache Cordova](http://cordova.apache.org/), which will take our app and bundle it into a native wrapper to turn it into a traditional native app.

To install Cordova, run:

```bash
$ npm install -g cordova
```

Ionic comes with a convenient command line utility to start, build, and package Ionic apps.

To install it, simply run:

```bash
$ npm install -g ionic
```

## Run on your browser

Simply run the following:

```bash
$ ionic serve
```

## Configure Platforms

Now, we need to tell ionic that we want to enable the iOS and Android platforms. Note: unless you are on MacOS, leave out the iOS platform:

```bash
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

## Run on iOS devices

We need to build the project to run the app in an iOS device through `xcode`

**Note**: In order to test this app on iOS devices you need to be on MacOS.

After this we have to build the project. Run the following:

```bash
$ ionic cordova build ios
```

Now we simply need to open the xcode and open the `.xcodeproj` file from `platform/ios` in your project folder.

After that simply `run` the app from xcode.

If you want to build this app for production click [here](https://ionicframework.com/docs/v1/guide/publishing.html).

## Run on Android devices

Import the `platform/android` from your project folder into `Android Studio`. After that wait gradle to finish building up your project. When the bulding process is over simply run the app from Android Studio,

If you want to build this app for production click [here](https://ionicframework.com/docs/v1/guide/publishing.html).
