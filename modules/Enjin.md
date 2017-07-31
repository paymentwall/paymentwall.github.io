---
id: module-enjin
title: Modules-Enjin
permalink: modules/Enjin
sectionid: docs-modules
---

# Enjin Donationcraft

Paymentwall has partnered with Enjin to allow its server owners accept payments easily via Paymentwall using credit cards, SMS payments, prepaid payment methods (such as Paysafecard, TicketSurf, Boleto), bank transfers and eWallets.

To connect Paymentwall with your Buycraft store simply follow the 3 easy steps below:

## Setup your Paymentwall account with Enjin connect button
* Go to **[Minecraft Donation Plugin](https://www.paymentwall.com/en/payment-solutions/minecraft-donation-plugin)** page.

* Click ```Integrate Minecraft Donations```, you will be taken to the end of the page, please choose ```Enjin``` among the three options.

* You will be taken to **Paymentwall Account Registration Page**. **Sign Up** if you don't have an account or **Sign In** if you already have one. When you **Sign Up**, use your Enjin donation page for the ```Website URL``` field (e.g. *https://yourdomain.enjin.com*).

* You will be taken to your merchant area page with your project already set up (a new project will be created if you had an account before).

## Project configuration in Paymentwall system

* Login to Paymentwall system with your account.

* Go to ```My Projects``` tab. You will see that your new project has already been created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Enjin admin panel.

* You can also enable **Brick** as a payment gateway by and click the brick grey icon on your project overview. It will generate ```Brick Test Keys``` and ```Brick Live Keys``` right next to your ```Widget Keys```.

## Setup Paymentwall module on your platform
* On your Enjin dashboard, go to ```Admin``` on the top navigation and choose ```Modules``` from the dropdown list. 

* Scroll down to ```DonationCraft Server Store``` and click ```Edit``` --> ```Edit module``` to access the your webstore.

* Now you are navigated to your webstore admin panel. Click ```Settings``` on the main navigation under DonationCraft logo.

* Under ```Settings Index``` on your left hand side, click ```Payment Gateways``` to see all available payment options.

* Click the ```Accept payments``` checkbox on ```Paymentwall Brick``` or ```Paymentwall Digital Goods```  tab.

* Go back to ```Payment Gateways``` section. **Paymentwall** should now be available. Click ```Edit``` to set up your project.

* Fill all the required fields.

  >The ```Project Key``` and ```Secret Key``` can be found under your Enjin project overview's ```Widget Keys``` in ```My Projects``` tab. If you are using **Brick**, ```Public Key``` and ```Private Key``` are under ```Brick Test Keys```.  ```Widget code``` is available in your ```Widgets``` section of your project.

## Version support

Paymentwall provide supports for all up-to-date Enjin DonationCraft version.

> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your Buycraft module is not supported.

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/development/review-home)**