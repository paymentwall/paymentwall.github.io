---
id: module-prestashop
title: Modules-Prestashop
permalink: modules/Prestashop
sectionid: docs-modules
---

# Prestashop

Paymentwall’s Prestashop plug-in is easy to install and fully customizable. With a single integration you’ll have access to our 120+ payment options localized in 75+ currencies and more than 200 countries. You’ll also have access to our top-notch risk management and fraud protection services, optimization assistance, 24/7 live customer support and detail analytics and reporting tools.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=prestashop&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for Prestashop can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Prestashop admin panel.

* In ```Settings``` section, please set your project type to  ```Digital Goods```.

* Set ```pingback type``` to URL.

 * Configure your ```pingback url``` to * http://[your-domain]/modules/paymentwall/pingback.php*

* Choose the ```Pingback Signature Version``` to version 3.

  > Remember to save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/integration/platform/presta.png">
</div>

* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Prestashop admin panel.

## Setup Paymentwall module on your platform
* If you are using Prestashop 1.7:
 * In your ```Prestashop Admin Panel```, please go to  ```Modules``` and choose ```Modules and Services```.

 * Click the ```Upload a module``` button on the top right, and drop the file ```pw_prestashop.zip``` into the uploader to start the installation.

 * After the module is installed successfully, click ```Configure``` button right below the ```Module installed!** line.
 
* If you are using Prestashop 1.6:
 * In your ```Prestashop Admin Panel```, please go to  ```Modules and Services``` and choose  **Modules and Services**.

 * *Click the ```Add a new module``` button on the top right, and choose to upload ```pw_prestashop.zip```.

 * After the module is uploaded, at the listing of available modules, search for keyword **Paymentwall**.
 
  * Choose ```Configure``` to open the setting page.
 
* Fill all the required fields.

  >The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in ```My Projects``` tab. ```Widget code``` is available in your ```Widgets``` section of your Paymentwall project of Prestashop.


## Version support

Paymentwall provides supports for bellow Prestashop versions.

|Prestashop version|Support|
|-------|--------|
|1.3|No|
|1.4|Yes|
|1.5|Yes|
|1.6|Yes|
|1.7|Yes|

> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your Prestashop module is not supported.


## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**