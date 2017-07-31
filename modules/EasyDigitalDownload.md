---
id: module-edd
title: Modules-EDD
permalink: modules/EDD
sectionid: docs-modules
---

# EDD

Paymentwall’s EDD plug-in is easy to install and fully customizable. With a single integration you’ll have access to our 120+ payment options localized in 75+ currencies and more than 200 countries. You’ll also have access to our top-notch risk management and fraud protection services, optimization assistance, 24/7 live customer support and detail analytics and reporting tools.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=edd&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for EDD can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on EDD admin panel.

* In ```Settings``` section, please set your project type to  ```Digital Goods```.

* Set ```pingback type``` to URL.

* Configure your ```pingback url``` to *http://[your-domain]/?edd-listener=paymentwall*

* Choose the ```Pingback Signature Version``` to version 3.

  > Remember to save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/payments/platform/edd.png">
</div>

* You can also enable **Brick** as a payment gateway by and click the brick grey icon on your project overview. It will generate ```Brick Test Keys``` and ```Brick Live Keys``` right next to your ```Widget Keys```.

* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on EDD admin panel.

## Setup Paymentwall module on your platform

* Upload the plugin into your WordPress plugins directory, preserving the folder name ```easy-digital-downloads-paymentwall``` using an FTP client of your choice. Then log into your WordPress dashboard, navigate to your ```Plugins``` section, activate **Paymentwall for Easy Digital Download**.

* Or you can navigate to your ```Plugins``` section, click **Add New** and search for **Paymentwall for Easy Digital Download**. Click **Install now** and then activate the plugin.

* On the left sidebar of your WordPress dashboard, navigate to ```Downloads``` section and choose ```Payment Gateways``` tab.

* Select **Paymentwall** in ```Payment Gateways``` and fill all the required fields.

  >The ```Project Key``` and ```Secret Key``` can be found under your Woocommerce project overview's ```Widget Keys``` in ```My Projects``` tab. If you are using **Brick**, ```Public Key``` and ```Private Key``` are under ```Brick Test Keys``` and ```Brick Live Keys```.  ```Widget code``` is available in your ```Widgets``` section of your project.

## Version support

Paymentwall provides supports for bellow EDD versions.

|EDD version|Support|
|-------|--------|
|4|No|
|5|Yes|
|6|Yes|
|7|Yes|

> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your EDD module is not supported.


## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/development/review-home)**