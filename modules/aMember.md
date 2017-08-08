---
id: module-amember
title: Modules-aMember
permalink: modules/amember
sectionid: docs-modules
---

# aMember

Paymentwall’s aMember plug-in is easy to install and fully customizable. With a single integration, all of your Hosting/SaaS products will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries.

This tutorial assumes that you have a Paymentwall Merchant Account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=amember&mode=merchant)** if you don't have one.

***

## Download plug-in

Paymentwall's plug-in for aMember can be downloaded **[here](https://github.com/paymentwall)**.

> The plug-in is not updated for the latest versions of aMember. Any contribution from you on Github would be highly appreciated.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on aMember admin panel.

	- In **Settings** section, please set your project type to  ```Digital Goods```.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** to [http://[your-domain]/amember/payment/paymentwall]().

	- Choose the **Pingback Signature Version** to version 2.

> Remember to save changes at the bottom of **Settings** section.


+ In **Widgets** section, create a widget that you prefer and save changes. You will see ```Widget code``` after widget creation, which will also be needed later on aMember admin panel.

***

## Setup Paymentwall module on your platform
+ On your aMember dashboard, select **Configuration** -> **Setup / Configuration**

+ Click the **Plugins** tab on the top navbar

	- Under **Payment Plugins** choose *Paymentwall* from the dropdown list. Press **Save** to save the settings.

> If you can't find *Paymentwall* as a listed payment plugins, please unzip and upload the file **paymentwall.php** from **paymentwall_amember** directory to your aMember's plugins payment folder, typically [your_website/amember/project/default/plugins/payment/]() using an FTP client of your choice.

+ *Paymentwall* should now be available from the top navbar. Click it to set up your project.

	- Fill all the required fields.

> The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in **My Projects** tab. ```Widget code``` is available in your **Widgets** section of your Paymentwall project of aMember.

***

## Support

+ Paymentwall provide supports for aMember versions 3,4 and 5.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**