---
id: module-phpfox
title: Modules-Phpfox
permalink: modules/Phpfox
sectionid: docs-modules
---

# PHPfox

Paymentwall’s PHPfox plug-in is easy to install and fully customizable. With a single integration you’ll have access to our 120+ payment options localized in 75+ currencies and more than 200 countries. You’ll also have access to our top-notch risk management and fraud protection services, optimization assistance, 24/7 live customer support and detail analytics and reporting tools.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=phpfox&mode=merchant)** if you don't have one.

## Download plug-in

Paymentwall's plug-in for aMember can be downloaded **[here](https://github.com/paymentwall)**.

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on PHPfox admin panel.

* In ```Settings``` section, please set your project type to  ```Digital Goods```.

* Set ```pingback type``` to URL.

 * Configure your ```pingback url``` to * http://[your-domain]/?do=api/gateway/callback/paymentwall*

* Choose the ```Pingback Signature Version``` to version 3.

  > Remember to save changes at the bottom of ```Settings``` section.

<div class="docs-img">
    <img src="/textures/pic/payments/platform/phpfox.png">
</div>

* In ```Widgets``` section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on PHPfox admin panel.

## Setup Paymentwall module on your platform

* Upload all files from ```PaymentwallForPHPFox``` directory to your PHPfox **root** folder using an FTP client of your choice.

* Go to the database (using phpmyadmin) in order to import ```sql/paymentwall.sql``` into database.  Choose ```Import``` in the top menu. Under ```File to import```, click ```Choose File``` and select the ```sql/paymentwall.sql```. Then click ```Go``` at the bottom right.

* Run the database updates in ```paymentwall_phpfox_db_query.sql```
 * Change the default ```dbphpfox``` database name to your PHPFox installation's database.
 * Change the database table prefix with the one that your are using.
 * Import the SQL into your database.

* On your AdminCP, please go to ```Settings``` -> ```Payment Gateways```

* Click Paymentwall's dropdown and choose ```Edit Gateway Settings```

* Fill all the required fields.

  >The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in ```My Projects``` tab. ```Widget code``` is available in your ```Widgets``` section of your Paymentwall project of PHPfox.

* Select **Yes** on ```Active```, then click **Update**.

* If you are using earlier version of PHPfox, please go to ```AdminCP``` -> ```Modules``` and Reactivate **Paymentwall** and click **Save**


## Version support

Paymentwall provides supports for bellow PHPfox versions.

|PHPfox version|Support|
|-------|--------|
|3|Yes|
|4|Yes|

> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your PHPfox module is not supported.


## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/development/review-home)**
