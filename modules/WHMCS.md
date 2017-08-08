---
id: module-whmcs
title: Modules-WHMCS
permalink: modules/whmcs
sectionid: docs-modules
---

# WHMCS

Paymentwall’s WHMCS plug-in is easy to install and fully customizable. With a single integration, all of your Hosting/SaaS products will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=whmcs&mode=merchant)** if you don't have one.

***

## Download plug-in

Paymentwall's plug-in for WHMCS can be downloaded **[here](https://github.com/paymentwall)**.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on WHMCS admin panel.

	- In **Settings** section, please set your project type to  ```Digital Goods```.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** to [http://[your-domain]/modules/gateways/callback/paymentwall.php]()

	- Choose the **Pingback Signature Version** to version 3.

> Remember to save changes at the bottom of **Settings** section.

+ You can also enable **Brick** as a payment gateway by and click the brick grey icon on your project overview. It will generate ```Brick Test Keys``` and ```Brick Live Keys``` right next to your ```Widget Keys```.

+ In **Widgets** section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on WHMCS admin panel.

## Setup Paymentwall module on your platform

+ Upload all files from **paymentwall_whmcs** directory to your WHMCS **root** folder using an FTP client of your choice.

+ Go to the database (using phpmyadmin) in order to import **sql/paymentwall.sql** into database.  Choose **Import** in the top menu. Under **File to import**, click **Choose File** and select the **sql/paymentwall.sql**. Then click **Go** at the bottom right.

+ Under [http://[your-domain].com/[admin-folder]](), select **Setup** -> **Payment** -> **Payment Gateways**. Choose *Paymentwall* or *Brick* in the dropdown list. Press **Activate** to save. 

	- Fill all the required fields.

> The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in **My Projects** tab. If you are using *Brick*, ```Public Key``` and ```Private Key``` are under ```Brick Test Keys``` and ```Brick Live Keys```. ```Widget code``` is available in your **Widgets** section of your Paymentwall project of WHMCS.

***

## Support

+ Paymentwall provides supports bellow WHMCS versions 5, 6 and 7.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

> Contact [platform@paymentwall.com](mailto:platform@paymentwall.com) if you find the version of your WHMCS module is not supported.

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**