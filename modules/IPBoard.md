---
id: module-ipboard
title: Modules-IPBoard
permalink: modules/IPBoard
sectionid: docs-modules
---

# IP.Board

Paymentwall’s IP.Board plug-in is easy to install and fully customizable. With a single integration you’ll have access to our 120+ payment options localized in 75+ currencies and more than 200 countries. You’ll also have access to our top-notch risk management and fraud protection services, optimization assistance, 24/7 live customer support and detail analytics and reporting tools.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=ipb&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for IP.Board can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on IP.Board admin panel.

* In ```Settings``` section, please set your project type to ```Digital Goods```.

* Set ```pingback type``` to URL.

* Configure your ```pingback url``` 
 - For **IP.Board v3**: *http://[path-to-ipboard]/index.php?app=nexus&module=payments&section=receive&do=validate*

 - For **IP.Board v4**: *http://[path-to-ipboard]/index.php?app=nexus&module=checkout&controller=pwPingback*

* Add a new ```Custom pingback parameter``` with **id** as ```name``` and **OWN** as ```value``` .

* Choose the ```Pingback Signature Version``` to version 3.

  > Remember to save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/payments/platform/ipboard.png">
</div>

* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on IP.Board admin panel.

## Setup Paymentwall module on your platform

* Download the plugin archive and extract it in IP.Board folder (download modules for [IP.Board 1.5](https://github.com/paymentwall/module-IP.Board/releases/tag/v1.0.2) and [IP.Board 2.2](https://github.com/paymentwall/module-IP.Board/releases/tag/v2.2.0) on [Github)](https://github.com/paymentwall/module-IP.Board/releases).

* Login to your admin area, go to ```Extensions``` --> ```Shipping``` --> ```Payments```, browse all available payment methods.

* In **Paymentwall** tab, click ```Edit``` to configure your module settings.

* Fill all the required fields and change ```Active``` status to **Enabled**.

  >The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in ```My Projects``` tab. ```Widget code``` is available in your ```Widgets``` section of your Paymentwall project of IP.Board.

## Version support

Paymentwall provides supports for bellow IP.Board versions.

|IP.Board version|Support|
|-------|--------|
|1.5|Yes|
|2|Yes|

> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your IP.Board module is not supported.


## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/development/review-home)**