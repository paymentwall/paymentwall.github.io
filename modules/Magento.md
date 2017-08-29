---
id: module-magento
title: Modules-Magento
permalink: modules/magento
sectionid: docs-modules
---

# Magento

Paymentwall’s Magento plug-in is easy to install and fully customizable. With a single integration, all products of your E-commerce business will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=magento&mode=merchant)** if you don't have one.

***

## Download plug-in

Paymentwall's plug-in for Magento can be downloaded **[here](https://github.com/paymentwall)**.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Magento admin panel.

	- In **Settings** section, please set your project type to ```Digital Goods```.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL**

	- For **Magento v1** [http://[your-domain]/index.php/paymentwall/payment/ipn]()

	- For **Magento v2** [http://[your-domain]/paymentwall/index/pingback]()

	- Choose the **Pingback Signature Version** to version 2 or 3

> Remember to save changes at the bottom of **Settings** section.

+ You can also enable *Brick* as a payment gateway by clicking the grey brick icon on your project overview. It will generate ```Brick Test Keys``` and ```Brick Live Keys``` right next to your ```Widget Keys```.

+ In **Widgets** section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Magento admin panel.

***

## Setup Paymentwall module on your platform

+ If you are using **Magento v1**:

	- Download the plugin archive and  upload the app folder into your Magento **root** folder using an FTP client of your choice.

	- In your Magento Admin Panel, go to **Cache Management** and refresh all cache.

	- After that, go to **Configuration** from **System** menu.

	- In the **Sales** section choose **Payment Methods**.

	- Select *Paymentwall* and fill all the required fields.

+ If you are using **Magento v2**:

	- Download the plugin archive and upload the app folder into your Magento **root** folder using an FTP client of your choice.
 **OR**

	- Run the following commands to install via composer

> Note: If you have already installed our module manually and now want to re-install via composer, please delete folder **app/code/Paymentwall** in your Magento directory before proceeding with the commands.

```json
cd <your Magento install dir>
composer require paymentwall:module-magento2 --no-update
composer update
```

+ After installing the module, continue to run the following commands to enable it.

> Note: If you have difficulty running this command, make sure that your bin/magento executable has execute permissions.

```json
bin/magento module:enable Paymentwall_Paymentwall
bin/magento setup:upgrade
bin/magento setup:di:compile
```

+ In your Magento Admin Panel, go to **Stores** section.

	- Choose **Payment Methods** under **Sale** dropdowns.

	- Select *Paymentwall* and fill all the required fields.

> The ```Project Key``` and ```Secret Key``` can be found under your Magento project overview's ```Widget Keys``` in **My Projects** tab. If you are using *Brick*, ```Public Key``` and ```Private Key``` are under ```Brick Test Keys```.  ```Widget code``` is available in your **Widgets** section of your project.

***

## Support

+ Paymentwall provides supports for Magento versions 1 and 2.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

> Contact [platform@paymentwall.com](mailto:platform@paymentwall.com) if you find the version of your Magento module is not supported.

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/go_live-home)**
