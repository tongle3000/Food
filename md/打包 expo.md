##  官网具体一些设置 https://docs.expo.io/distribution/building-standalone-apps/

##  expo.io
    publishing -> 

    Deploying to the App Store and Play Store ->  Distributing Your App.

    Create native builds ->

    npm install -g expo-cli


##  . 修改  app.json 文件 (视频有个 sdkVersion 这里没有.)
    {
    "expo": {
        "name": "Your App Name",
        "icon": "./path/to/your/app-icon.png",
        "version": "1.0.0",
        "slug": "your-app-slug",
        "ios": {
        "bundleIdentifier": "com.yourcompany.yourappname",
        "buildNumber": "1.0.0"
        },
        "android": {
        "package": "com.yourcompany.yourappname",
        "versionCode": 1
        }
    }
    }

##  打包 Run expo build:android or expo build:ios

