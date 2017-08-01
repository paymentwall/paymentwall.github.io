---
id: module-cs-cart
title: Modules-CS-Cart
permalink: modules/CS-Cart
sectionid: docs-modules
---

# CS-Cart

Paymentwall's CS-cart plug-in is easy to install and fully customizable. With a single integration you'll have access to our 120+ payment options localized in 75+ currencies and more than 200 countries. You'll also have access to our top-notch risk management and fraud protection services, optimization assistance, 24/7 live customer support and detail analytics and reporting tools.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=cscart&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for CS-cart can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on CS-Cart admin panel.

* In ```Settings``` section, please set your project type to  ```Digital Goods```.

* Set ```pingback type``` to URL.

* Configure your ```pingback url``` to *http://[path-to-cscart]/index.php?dispatch=paymentwall.pingback*

* Choose the ```Pingback Signature Version``` to version 3.

* Add the ```Custom pingback parameter``` with **payment_id** at ```Name```, and **OWN** at ```Value```.

  > Remember to save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/integration/platform/amember.png">
</div>

* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on CS-Cart admin panel.

## Setup Paymentwall module on your platform

* Unpack all files from ```PaymentwallForCSCartV3``` and upload to your CS-Cart **root** folder using an FTP client of your choice.

* Login to your admin area, go to ```Addons Manager``` on the top navigation -> ```Browse all available add-ons```.  Click ```Install``` button on ```Paymentwall```.

* Go to ```Administration``` on the top navigation, choose ```Payment methods```, it will list all available payment methods.

* Click **+** button on the top right side to ```Add payment method```.

* In ```New payment method```, choose **Paymentwall** as ```Processor```. 

Fill in other information and switch to ```Configure``` tab

* Fill all the required fields.

  >The ```Project Key``` and ```Secret Key``` can be found under your Enjin project overview's ```Widget Keys``` in ```My Projects``` tab. ```Widget code``` is available in your ```Widgets``` section of your project.

## Version support

Paymentwall provides supports for bellow CS-Cart versions.

|CS-Cart version|Support|
|-------|--------|
|3|Yes|
|4 (up to 4.4)|Yes|


> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your CS-Cart module is not supported.


## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**