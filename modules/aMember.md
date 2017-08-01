---
id: module-amember
title: Modules-aMember
permalink: modules/aMember
sectionid: docs-modules
---

# aMember

Paymentwall’s aMember plug-in is easy to install and fully customizable. With a single integration you’ll have access to our 150+ payment options localized in 75+ currencies and more than 200 countries. You’ll also have access to our top-notch risk management and fraud protection services, optimization assistance, 24/7 live customer support and detail analytics and reporting tools.

<br>This tutorial assumes that you have a Paymentwall Merchant Account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=amember&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for aMember can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on aMember admin panel.

* In ```Settings``` section, please set your project type to  ```Digital Goods```.

  Set ```pingback type``` to URL.

  Configure your ```pingback url``` to *http://[your-domain]/amember/payment/paymentwall*

  Choose the ```Pingback Signature Version``` to version 2.

  > Remember to save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/integration/platform/amember.png">
</div>


* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on aMember admin panel.

## Setup Paymentwall module on your platform
* On your aMember dashboard, select ```Configuration``` -> ```Setup / Configuration```

* Click the ```Plugins``` tab on the top navbar

* Under ```Payment Plugins```, choose **Paymentwall** from the dropdown list. Press ```Save``` to save the settings.
> If you can't find **Paymentwall** as a listed payment plugins, please unzip and upload the file ```paymentwall.php``` from ```paymentwall_amember``` directory to your aMember's plugins payment folder, typically ```your_website/amember/project/default/plugins/payment/``` using an FTP client of your choice.

* **Paymentwall** should now be available from the top navbar. Click it to set up your project.

* Fill all the required fields.

  >The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in ```My Projects``` tab. ```Widget code``` is available in your ```Widgets``` section of your Paymentwall project of aMember.


## Version support

Paymentwall provide supports for bellow aMember versions.

|aMember version|Support|
|-------|--------|
|3|Yes|
|4|Yes|
|5|Yes|

> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your aMember module is not supported.

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**