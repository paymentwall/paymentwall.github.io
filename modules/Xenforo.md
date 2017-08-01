---
id: module-xenforo
title: Modules-Xenforo
permalink: modules/Xenforo
sectionid: docs-modules
---

# Xenforo

Paymentwall’s Xenforo plug-in is easy to install and fully customizable. With a single integration you’ll have access to our 120+ payment options localized in 75+ currencies and more than 200 countries. You’ll also have access to our top-notch risk management and fraud protection services, optimization assistance, 24/7 live customer support and detail analytics and reporting tools.

*Important: Paymentwall for XenForo requires [bd] Paygates. Before installing Paymentwall for XenForo, please make sure your site has Paygates installed.*

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=xenforo&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for Xenforo can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Xenforo admin panel.

* In ```Settings``` section, please set your project type to  ```Digital Goods```.

  * Set ```pingback type``` to URL.

 * Configure your ```pingback url``` to *http://[your-domain].com/paymentwall.php*

 * Choose the ```Pingback Signature Version``` to version 3.

* Add the ```Custom Pingback parameter``` with **custom** as ```Name```, and **OWN** as ```Value```.

  > Remember to save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/integration/platform/xenforo.png">
</div>

* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Xenforo admin panel.

## Setup Paymentwall module on your platform

* Unzip all files from ```PaymentwallforXenForo.zip``` upload the contents of the upload folder to your project, preserving the file locations.

* On your Xenforo Admin control panel, go to ```Home``` -> ```Install Add-on```, browse and install ```addon-Paymentwall.xml```.

* Go to ```Home``` -> ```Options```, and click **Paymentwall** from the ```Option``` groups.

* Fill all the required fields.

  >The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in ```My Projects``` tab. ```Widget code``` is available in your ```Widgets``` section of your Paymentwall project of Xenforo.


## Version support

Paymentwall provides supports for bellow Xenforo versions.

|Xenforo version|Support|
|-------|--------|
|1|Yes|
|1.5|Yes|

> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your Xenforo module is not supported.


## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**