---
id: module-phpfox
title: Modules-PHPfox
permalink: modules/phpfox
sectionid: docs-modules
---

# PHPfox

Paymentwall’s PHPfox plug-in is easy to install and fully customizable. With a single integration, all of your products on PHPfox marketplace will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries. 

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=phpfox&mode=merchant)** if you don't have one.

***

## Download plug-in

Paymentwall's plug-in for PHPfox can be downloaded **[here](https://github.com/paymentwall)**.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on PHPfox admin panel.

	- In **Settings** section, please set your project type to ```Digital Goods```.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** to [http://[your-domain]/?do=api/gateway/callback/paymentwall]().

	- Choose the **Pingback Signature Version** to version 3.

> Remember to save changes at the bottom of **Settings** section.

+ In **Widgets** section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on PHPfox admin panel.

***

## Setup Paymentwall module on your platform

+ Upload all files from **PaymentwallForPHPFox** directory to your **PF.Base/** folder using an FTP client of your choice.

+ Run the database updates in **paymentwall_phpfox_db_query.sql**

	- Change the default **`dbphpfox`** database name to your PHPFox installation's database.

	- Change the database table prefix with the one that your are using.

	- Import the SQL into your database.

	- If you are using PHPFox 4.5 or higher, please add **'phpfox.gateway.api.paymentwall' => 'library/phpfox/gateway/api/paymentwall.class.php'**, into file **/PF.Base/include/class_map.config.php and 'gateway.api.paymentwall' => \Phpfox_Gateway_Api_Paymentwall::class, into file /PF.Base/include/package.config.php**.

+ On your AdminCP, please go to **Settings** -> **Payment Gateways**

+ Click *Paymentwall* dropdown and choose **Edit Gateway Settings**

	- Fill all the required fields.

> The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in **My Projects** tab. ```Widget code``` is available in your **Widgets** section of your Paymentwall project of PHPfox.

+ Select **Yes** on **Active**, then click **Update**.

> If you are using earlier version of PHPfox, please go to **AdminCP** -> **Modules** and Reactivate *Paymentwall* and click **Save**

***

## Support

+ Paymentwall provides supports for PHPfox versions 3 and 4.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

> Contact [platform@paymentwall.com](mailto:platform@paymentwall.com) if you find the version of your PHPfox module is not supported.

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**
