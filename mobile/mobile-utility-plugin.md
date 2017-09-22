---
id: mobile-utility-plugin
title: Utility Plugin
sectionid: docs-mobile
permalink: mobile/utility-plugin
---
# Utility Plugin

For making our SDK flexible and light as much as possible, we used plugin injection model. In this case you can just import what you need into core SDK.

Now we have three parts of utility plugin:

## Customization Plugin
It is an optional plugin to add the feature that enable customization feature for the flat UI. It allows you to customize payment page according to the style of applications with several lines of codes.

* [Game UI Plugin for Android](https://github.com/paymentwall/paymentwall-android-sdk/tree/master/Plugin/UIPlugin)
* [Game UI Plugin for IOS](https://github.com/paymentwall/paymentwall-ios-sdk/tree/master/Plugins/PWGameUIPlugin)

## Card Scan Plugin
It is an option for merchants who want to provide a easier online card solution for their users. With this plugin, your users could scan their card and the card information will fill into form directly so they don't need to input anything manually.

* [Card Scanner Plugin for Android](https://github.com/paymentwall/paymentwall-android-sdk/tree/master/Plugin/CardScanner)
* [Card Scanner Plugin for IOS](https://github.com/paymentwall/paymentwall-ios-sdk/tree/master/Plugins/PWCardScannerPlugin)

## UI customization
It is an option which allow you change components of our default UI and it will make our widget color and icon consistent with the feeling of your application.

[Android library](https://github.com/paymentwall/paymentwall-android-sdk/blob/master/Core%20SDK/README.md#step-6-ui-customization-optional)
[IOS library](https://github.com/paymentwall/paymentwall-ios-sdk/tree/master/Plugins/PWCustomizationPlugin)

### UI customization components for Android

<div class="docs-img">
<img src="https://github.com/paymentwall/paymentwall-android-sdk/raw/master/static/PwsdkTheme.png" style="width: 80%">
</div>

### UI customization components for IOS

<div class="docs-img">
<img src="https://user-images.githubusercontent.com/23113471/27816093-84af641a-60b3-11e7-9a8b-d2dd01a3eafc.png" style="width: 80%">
</div>
