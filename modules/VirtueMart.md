---
id: module-virtuemart
title: Modules-VirtueMart
permalink: modules/virtuemart
sectionid: docs-modules
---

# VirtueMart

Paymentwall’s VirtueMart plug-in is easy to install and fully customizable. With a single integration, all products of your E-commerce business will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries. 

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=shiftcode&mode=merchant)** if you haven't signed up yet. 

***

## Download plug-in

Paymentwall's plug-in for VirtueMart can be downloaded **[here](https://github.com/paymentwall)**.

> The plug-in is not updated for the latest versions of VirtueMart. Any contribution from you on Github would be highly appreciated.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on VirtueMart admin panel.

	- In **Settings** section, please set your project type to ```Digital Goods```.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** to [http://[path-to-virtuemart]/plugins/vmpayment/paymentwall/pingback.php]().

	- Choose the **Pingback Signature Version** to version 2 or 3.

> Remember to save changes at the bottom of **Settings** section.


+ In **Widgets** section, create a widget that you prefer and save changes. You will see ```Widget code``` after widget creation, which will also be needed later on VirtueMart admin panel.

***

## Setup Paymentwall module on your platform

+ Go to **VirtueMart Extension Manager** ([http://[path-to-virtuemart]/administrator/index.php?option=com_installer]()).

+ In the **VirtueMart Extension Manager**, choose the .zip file you downloaded and press **Upload and Install**.

+ Go to VirtueMart payments settings ([http://[path-to-virtuemart]/administrator/index.php?option=com_virtuemart&view=paymentmethod]())

+ Press **New** button

	- Set **Payment Name**, **Sel Alias** and **Payment Method** to *Paymentwall*

	- Switch **Published** to **Yes**

	- Press the **Save** button to save the changes.

+ Next, switch to Configuration tab and fill out all the fields. 

> The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in **My Projects** tab. ```Widget code``` is available in your **Widgets** section of your Paymentwall project of aMember.

+  Press **Save & Close** to save the changes.

***

## Support

+ Paymentwall provide supports for VirtueMart versions 2.6, 3.0 and Joomla! versions 2.5, 3.4.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**