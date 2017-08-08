---
id: module-vbulletin
title: Modules-vBulletin
permalink: modules/vbulletin
sectionid: docs-modules
---

# vBulletin

Paymentwall’s vBullentin plug-in is easy to install and fully customizable. With a single integration, all of your Hosting/SaaS products will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries..

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=vbulletin&mode=merchant)** if you don't have one.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on vBulletin admin panel.

	- In **Settings** section, please set your project type to  ```Digital Goods```.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** to *http://[your-domain]/payment_gateway.php?method=paymentwall*

	- Choose the **Pingback Signature Version** to version 2.

	- Add a **Custom pingback parameter** with **currencyCode** as ```Name```, and **OWN** as ```Value```

	- Add a **Custom pingback parameter** with **amount** as ```Name```, and **amount** as ```Value```

> Remember to save changes at the bottom of **Settings** section.

+ In **Widgets** section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on vBulletin admin panel.

***

## Setup Paymentwall module on your platform

+ Unzip and upload all files from **PaymentwallForVBulletin** directory to your vBulletin installation directory, preserving the file locations.

+ Edit the query **paymentwall.sql** and change the default **dbvbulletin** database name to your vBulletin installation's database.

+ Change the database table prefix with the one that your are using.

+ Import the SQL into your database.

+ On your AdminCP, go to **Paid Subscriptions** -> **Payment API Manager** and edit Paymentwall's Settings

	- Fill all the required fields.

> The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in **My Projects** tab. ```Widget code``` is available in your **Widgets** section of your Paymentwall project of vBulletin.

+ Inside of your source code edit file **payments.php**: On line 301, add ```'paymentwall' => 'Paymentwall',``` after ```'ccbill' => 'CCBill',```

***

## Support

+ Paymentwall provides supports for vBulletin versions 5.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

> The plug-in is not updated for the latest versions of vBullentin. Any contribution from you on Github would be highly appreciated.

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**
