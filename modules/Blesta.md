---
id: module-blesta
title: Modules-Blesta
permalink: modules/Blesta
sectionid: docs-modules
---

# Blesta

Paymentwall for Blesta module is easy to install and fully customizable, which can be easily implemented on websites, or web hosting services. This allows users to receive payments with Visa, Mastercard, Paysafecard, iDeal, Alipay, Sofort, Pagseguro and many more.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=blesta&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for Blesta can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Blesta admin panel.

* You can also enable ```Brick``` as a payment gateway by and click the brick grey icon on your project overview. It will generate ```Brick Test Keys``` and ```Brick Live Keys``` right next to your ```Widget Keys```.

* In ```Settings``` section, please set your project type to  ```Digital Goods```.

* Set ```pingback type``` to URL.

* Configure your ```pingback url``` to *http://[your-domain]/[blesta_folder]/callback/gw/[company_id]/paymentwall/*

* Your ```company_id``` can be obtained in *https://[your-domain]/admin/settings/system/companies/*

* Choose the ```Pingback Signature Version``` to version 2 or 3.

* Add the ```Custom pingback parameter``` with **invoice** at ```Name```, and **OWN** at ```Value```.

  > Remember to save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/integration/platform/blesta.png">
</div>

* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Blesta admin panel.

## Setup Paymentwall module on your platform

* Unpack all files from ```paymentwall-module-blesta``` and upload content of ```upload``` folder to your Blesta **root** folder using an FTP client of your choice.

* In your Blesta Dashboard, click ```Settings``` on the top right navigation and choose ```Payment Gateways```.

* On the let sidebar, choose **Available** from ```Payment Gateways``` section, it will list all available gateways.

* Click **Install** on ```Paymentwall``` or ```Brick``` tab.

* Fill all the required fields.

  >The ```Project Key``` and ```Secret Key``` can be found under your Blesta project overview's ```Widget Keys``` in ```My Projects``` tab. If you are using ```Brick```, ```Public Key``` and ```Private Key``` are under ```Brick Test Keys```.  ```Widget code``` is available in your ```Widgets``` section of your project.

## Version support

Paymentwall provides supports for bellow Blesta versions.

|Blesta version|Support|
|-------|--------|
|3|Yes|
|4|Yes|


> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your Blesta module is not supported.

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**
