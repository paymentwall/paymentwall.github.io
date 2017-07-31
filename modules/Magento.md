---
id: module-magento
title: Modules-Magento
permalink: modules/Magento
sectionid: docs-modules
---

# Magento

Paymentwall’s Magento plug-in is easy to install and fully customizable. With a single integration you’ll have access to our 120+ payment options localized in 75+ currencies and more than 200 countries. You’ll also have access to our top-notch risk management and fraud protection services, optimization assistance, 24/7 live customer support and detail analytics and reporting tools.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=magento&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for Magento can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Magento admin panel.

* You can also enable **Brick** as a payment gateway by and click the brick grey icon on your project overview. It will generate ```Brick Test Keys``` and ```Brick Live Keys``` right next to your ```Widget Keys```.

* In ```Settings``` section, please set your project type to  ```Digital Goods```.

* Set ```pingback type``` to URL.

* Configure your ```pingback url``` 

 * For **Magento v1**: *http://[your-domain]/index.php/paymentwall/payment/ipn*

 * For **Magento v2**: *http://[your-domain]/paymentwall/index/pingback*

* Choose the ```Pingback Signature Version``` to version 2 or 3.

  > Remember to save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/payments/platform/magento.png">
</div>

* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Magento admin panel.

## Setup Paymentwall module on your platform

* Download the plugin archive and * upload the app folder into your Magento **root** folder using an FTP client of your choice.

* If you are using **Magento v1**:

 * In your Magento Admin Panel, go to ```Cache Management``` and refresh all cache.

 * After that, go to ```Configuration``` from ```System``` menu.

 * In the ```Sales``` section choose ```Payment Methods```.

 * Select **Paymentwall** and fill all the required fields.

* If you are using **Magento v2**:

 *  Enter following commands to enable module

 ```
 php bin/magento module:enable Paymentwall_Paymentwall
 php bin/magento setup:upgrade 
 ```

 *  In your Magento Admin Panel, go to ```Stores``` section.

 * Choose ```Payment Methods``` under ```Sale``` dropdowns.

 * Select **Paymentwall** and fill all the required fields.

>The ```Project Key``` and ```Secret Key``` can be found under your Enjin project overview's ```Widget Keys``` in ```My Projects``` tab. If you are using **Brick**, ```Public Key``` and ```Private Key``` are under ```Brick Test Keys```.  ```Widget code``` is available in your ```Widgets``` section of your project.


## Version support

Paymentwall provides supports for bellow Magento versions.

|Magento version|Support|
|-------|--------|
|1|Yes|
|2|Yes|


> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your Magento module is not supported.


## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/development/review-home)**