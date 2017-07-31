---
id: module-shopware
title: Modules-Shopware
permalink: modules/Shopware
sectionid: docs-modules
---

# Shopware

Paymentwall’s Shopware plug-in is easy to install and fully customizable. With a single integration, you’ll have access to our 120+ payment options localized in 75+ currencies and more than 200 countries. You’ll also have access to our top-notch risk management and fraud protection services, optimization assistance, 24/7 live customer support and detail analytics and reporting tools.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=shopware&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for Shopware can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Shopware admin panel.

* In ```Settings``` section, please set your project type to  ```Digital Goods```.

* Set ```pingback type``` to URL.

 * Configure your ```pingback url``` to http://[your-domain]/shop/paymentwall/pingback

* Choose the ```Pingback Signature Version``` to version 3.

  > Remember to save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/payments/platform/shopware.png">
</div>

* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Shopware admin panel.

## Setup Paymentwall module on your platform

* Upload the content of **pw_shopware_module** folder to Shopware root folder using a FTP client of your choice.

* In your Shopware Admin Panel, please go to ```Configuration``` >> ```Plugin Manager``` section.

* Click ```Installed``` on the left-hand side, it will list down all available modules, you will see **Paymentwall** under ``Inactivate``` section.

* Click ```Edit``` icon on **Paymentwall** tab and ```Activate``` the module.

* Fill out all the required fields.

  >The ```Project Key``` and ```Secret Key``` can be found under your Enjin project overview's ```Widget Keys``` in ```My Projects``` tab.  ```Widget code``` is available in your ```Widgets``` section of your project.


## Version support

Paymentwall provides supports for bellow Shopware versions.

|Shopware version|Support|
|-------|--------|
|3|Yes|
|4|Yes|
|5|Yes|

> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your Shopware module is not supported.


## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/development/review-home)**