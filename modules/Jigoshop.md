---
id: module-jigoshop
title: Modules-Jigoshop
permalink: modules/Jigoshop
sectionid: docs-modules
---

# Jigoshop

Paymentwall’s Jigoshop plug-in is easy to install and fully customizable. With a single integration you’ll have access to our 120+ payment options localized in 75+ currencies and more than 200 countries. You’ll also have access to our top-notch risk management and fraud protection services, optimization assistance, 24/7 live customer support and detail analytics and reporting tools.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=jigoshop&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for Jigoshop can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Jigoshop admin panel.

* In ```Settings``` section, please set your project type to  ```Digital Goods```.

* Set ```pingback type``` to URL.

* Configure your ```pingback url``` to *http://[your-domain]/?paymentwallListener=paymentwall_IPN*

* Choose the ```Pingback Signature Version``` to version 3.

  > Remember to  save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/payments/platform/amember.png">
</div>

* You can also enable **Brick** as a payment gateway by and click the brick grey icon on your project overview. It will generate ```Brick Test Keys``` and ```Brick Live Keys``` right next to your ```Widget Keys```.

* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Jigoshop admin panel.

## Setup Paymentwall module on your platform

* Upload the plugin into your WordPress plugins directory, preserving the folder name ```paymentwall_module_jigoshop``` using an FTP client of your choice. Then log into your WordPress dashboard, navigate to your ```Plugins``` section, activate ```Paymentwall for Jigoshop```.

* Or you can navigate to your ```Plugins``` section, click **Add New** and search for ```Paymentwall for Jigoshop```. Click **Install now** and then activate the plugin.

* On the left sidebar of your WordPress dashboard, navigate to ```Jigoshop``` -> ```Settings```.

* Click on the ```Payment Gateways``` tab. **Paymentwall** and **Brick** should already be available as payment options.

* Enable **Paymentwall** or **Brick** and fill all the required fields.

  >The ```Project Key``` and ```Secret Key``` can be found under your Jigoshop project overview's ```Widget Keys``` in ```My Projects``` tab. If you are using **Brick**, ```Public Key``` and ```Private Key``` are under ```Brick Test Keys``` and ```Brick Live Keys```.  ```Widget code``` is available in your ```Widgets``` section of your project.

* Please enter the ```Currency``` in [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.

* You can specify the URL to redirect the user after a successful payment in the ```Success url``` field.

* The ```test_mode``` option allows you to use the Test Payment Method even if your project is already LIVE.


## Version support

Paymentwall requires Wordpress  3.8 & Jigoshop 1+ or higher and is compatible up to Wordpress 4.7 & Jigoshop 1.8.

> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your Jigoshop module is not supported.


## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/development/review-home)**