---
id: module-zencart
title: Modules-Zencart
permalink: modules/Zencart
sectionid: docs-modules
---

# Zen Cart

Paymentwall’s Zen Cart plug-in is easy to install and fully customizable. With a single integration you’ll have access to our 120+ payment options localized in 75+ currencies and more than 200 countries. You’ll also have access to our top-notch risk management and fraud protection services, optimization assistance, 24/7 live customer support and detail analytics and reporting tools.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=zencart&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for Zen Cart can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Zen Cart admin panel.

* In ```Settings``` section, please set your project type to  ```Digital Goods```.

* Set ```pingback type``` to URL.

 * Configure your ```pingback url``` to *http://[your-domain].com/paymentwall_pingback*

* Choose the ```Pingback Signature Version``` to version 3.

  > Remember to save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/payments/platform/zencart.png">
</div>

* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Zen Cart admin panel.

## Setup Paymentwall module on your platform

* Upload all files from ```paymentwall_zen_cart``` directory to your Zen Cart **root** folder using an FTP client of your choice.

* Go to ```Payment module``` management via http://[your-domain].com/[admin-folder]/modules.php?set=payment 

* Select **Paymentwall** and press ```Install```

* Fill all the required fields.

  >The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in ```My Projects``` tab. ```Widget code``` is available in your ```Widgets``` section of your Paymentwall project of Zen Cart.


## Version support

Paymentwall provides supports for bellow Zen Cart versions.

|Zen Cart version|Support|
|-------|--------|
|1.3|Yes|
|1.4|Yes|
|1.5|Yes|

> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your Zen Cart module is not supported.

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/development/review-home)**