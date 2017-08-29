---
id: integration
title: Integration overview
layout: docs
sectionid: docs
---

# Documentation

Integrating Paymentwall is easy.

This page lists a high-level overview of all ways to integrate Paymentwall into a website, application, web store or Smart TV service.

* To build a custom integration, check which API works best to accept payments: Widget API, Checkout API or Direct APIs in the [API Overview](#api-overview).
* To study all the APIs, such as cancelling subscriptions, issuing refunds, getting the list of supported methods, go to [full API Reference](/apis).
* For an SDK for iOS, Android, Unity or Smart TV, check out the [SDKs section](#sdks).
* For server-side API libraries, check out the [Server SDKs section](#sdks).  
* For shopping cart systems or e-commerce solutions, such as Magento or Woocommerce, check out the [Modules and Platforms](#integration-modules-and-platforms).
* To learn which products works with which API, check the [API Compatibility](#api-compatibility).  

***

## API Overview
<div class="docs-ul-box">
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3</title>
                        <circle class="cls-1" cx="17" cy="18" r="17"/><path class="cls-2" d="M24,10H10a2,2,0,0,0-2,2v.22H26v2H8V24a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V12A2,2,0,0,0,24,10ZM16,23H11.08V21H16Zm0-5H11.08V16H16Zm7,5H18V21h5Zm0-5H18V16h5Z"/>     
                    </svg>
                </div>
                <h3>Widget API</h3>
            </div>
            <p>
                Hosted page where user selects how much to pay. Good for stores with a few pricepoints (silver/gold/premium membership) and for games with Virtual Currency economy.<br />
                Can be used as an iframe or as a standalone page.
            </p>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/widget-home">Widget API overview</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/widget/digital-goods">Digital Goods</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/widget/virtual-currency">Virtual Currency</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/widget/offerwall">Offerwall</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3 copy</title>
                        <circle class="cls-1" cx="18" cy="17" r="17"/>
                        <path class="cls-2" d="M25,9H11a2,2,0,0,0-2,2V23a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V11A2,2,0,0,0,25,9ZM12,12H24v2H12ZM24,22H12V20H24Zm.08-4h-12V16h12Z"/>
                    </svg>
                </div>
                <h3 class="title">Checkout API</h3>
            </div>
            <p>
                Hosted checkout page to pay a given amount. Good for connecting to existing checkout flows.<br />
                Supports one specific or all available payment methods.<br />
                Can be used as a standalone page or as an iframe.
            </p>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/checkout-home">Checkout API overview</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/checkout/onetime">Onetime payment</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/checkout/subscription">Subscription</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="docs-ul-box">
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3 copy 2</title>
                        <circle class="cls-1" cx="17.75" cy="18" r="17"/>
                        <polygon class="cls-2" points="15.75 11.66 15.75 8.99 10 12.93 15.75 16.99 15.75 14.32 26 14.32 26 11.66 15.75 11.66"/>
                        <polygon class="cls-2" points="20 20.66 20 17.99 25.75 21.93 20 25.99 20 23.32 9.75 23.32 9.75 20.66 20 20.66"/>
                    </svg>
                </div>
                <h3>Direct APIs</h3>
            </div>
            <p>
                Used for building custom payment forms hosted by the merchant.
            </p>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/direct/brick-home">Brick Direct API</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/direct/mobiamo-home">Mobiamo Direct API</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/direct/mint-home">MINT Direct API</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/direct/invoicing-home">Invoicing API</a>
                </li>
            </ul>
        </div>
    </div>
</div>


***

## SDKs

<div class="docs-ul-box">
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3 copy 3</title>
                        <circle class="cls-1" cx="18" cy="17" r="17"/>
                        <path class="cls-2" d="M22.25,6h-8a2,2,0,0,0-.41,0A2.5,2.5,0,0,0,11.75,8.5V25a2.5,2.5,0,0,0,2.5,2.5h8a2.5,2.5,0,0,0,2.5-2.5V8.5A2.5,2.5,0,0,0,22.25,6Zm-4,21a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,18.25,27Zm5.5-4h-11V8.5a1.5,1.5,0,0,1,0-.28H23.72a1.5,1.5,0,0,1,0,.28Z"/>
                    </svg>
                </div>
                <h3>Mobile SDK</h3>
            </div>
            <p>
            Unified mobile payment solution for <a href="https://www.paymentwall.com/payment-methods"> payment methods</a> provided by Paymentwall.
            </p>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/sdks/mobile-home">Overview</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="https://github.com/paymentwall/paymentwall-android-sdk">Android SDK</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="https://github.com/paymentwall/paymentwall-ios-sdk">iOS SDK</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/sdks/mobile/support_ps">Optimized payment methods</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/sdks/mobile/scan">Scan cards</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/sdks/mobile/ui">UI customization</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3 copy 4</title>
                        <circle class="cls-1" cx="18" cy="17" r="17"/>
                        <path class="cls-2" d="M27,14.45a1,1,0,0,0,1-1v-4a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h8v4H9a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1v-4a1,1,0,0,0-1-1H19v-4ZM17.5,22.5h-8v-2h8Zm7-2.55a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,24.5,19.95Zm-4,0a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,20.5,19.95Zm4-10a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,24.5,9.95Zm-4,0a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,20.5,9.95Zm-11,.55h8v2h-8Z"/>
                    </svg>
                </div>
                <h3>Server SDKs</h3>
            </div>
            <p>
                Server-side API libraries with code samples for using Paymentwall APIs.
            </p>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="https://github.com/paymentwall/paymentwall-php">PHP</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="https://github.com/paymentwall/paymentwall-node">Node.js</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="https://github.com/paymentwall/paymentwall-python">Python</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="https://github.com/paymentwall/paymentwall-ruby">Ruby</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="https://github.com/paymentwall/paymentwall-java">Java</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="https://github.com/paymentwall/paymentwall-dotnet">.NET</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="docs-ul-box">
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3 copy 5</title>
                        <circle class="cls-1" cx="17.88" cy="17.25" r="17"/>
                        <path class="cls-2" d="M25.38,8.25h-15a2.5,2.5,0,0,0-2.5,2.5V18.5a2.5,2.5,0,0,0,2.5,2.5h6.56v2.75H13.56a1,1,0,0,0,0,2h8.75a1,1,0,0,0,0-2H18.94V21h6.44a2.5,2.5,0,0,0,2.5-2.5V10.75A2.5,2.5,0,0,0,25.38,8.25Zm1.5,10.25a1.5,1.5,0,0,1-1.5,1.5h-15a1.5,1.5,0,0,1-1.5-1.5V10.75a1.5,1.5,0,0,1,1.5-1.5h15a1.5,1.5,0,0,1,1.5,1.5Z"/>
                    </svg>
                </div>
                <h3 class="title">SmartTV SDK</h3>
            </div>
            <p>
            Accept payments on Smart TVs.
            </p>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/sdks/smart_tv">SmartTV payments</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3 copy 6</title>
                        <circle class="cls-1" cx="17" cy="17" r="17"/>
                        <polygon class="cls-2" points="9.59 14.36 9.59 21.68 17 25.22 24.41 21.68 24.41 14.36 17 17.9 9.59 14.36"/>
                        <polygon class="cls-2" points="13.65 8.22 6 11.76 9.59 14.36 17 10.81 13.65 8.22"/>
                        <polygon class="cls-2" points="20.35 8.22 17 10.81 24.41 14.36 28 11.76 20.35 8.22"/>
                    </svg>
                </div>
                <h3 class="title">Unity SDK</h3>
            </div>
            <p>
            Payment solution for Unity platform.
            </p>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/integration/sdks/unity">Unity SDK</a>
                </li>
            </ul>
        </div>
    </div>
</div>

***

## Integration Modules and Platforms

<div class="docs-ul-box">
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3 copy 7</title>
                        <circle class="cls-1" cx="18" cy="17" r="17"/>
                        <path class="cls-2" d="M15.54,23.31a1.33,1.33,0,1,1-.39-.92A1.26,1.26,0,0,1,15.54,23.31Zm9.15,0a1.33,1.33,0,1,1-.39-.92A1.26,1.26,0,0,1,24.69,23.31ZM26,12.19v5.23a.63.63,0,0,1-.17.43.65.65,0,0,1-.41.22L14.75,19.32a6.17,6.17,0,0,1,.13.72,2,2,0,0,1-.25.65H24A.65.65,0,0,1,24,22H13.58a.66.66,0,0,1-.65-.65A1,1,0,0,1,13,21a3.89,3.89,0,0,1,.16-.37l.22-.41.16-.3-1.81-8.41H9.65a.65.65,0,0,1,0-1.31h2.62a.62.62,0,0,1,.29.07.59.59,0,0,1,.2.16,1,1,0,0,1,.13.25A1.59,1.59,0,0,1,13,11l.06.3,0,.27H25.35a.66.66,0,0,1,.65.65Z"/>
                    </svg>
                </div>
                <h3 class="title">E-commerce modules</h3>
            </div>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/cs-cart">CS-Cart</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/easy-digital-downloads">Easy Digital Downloads</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/magento">Magento</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/jigoshop">Jigoshop</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/opencart">OpenCart</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/shopify">Shopify</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/prestashop">PrestaShop</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/shopware">Shopware</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/virtuemart">VirtueMart</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/woocommerce">Woocommerce</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3 copy 8</title>
                        <circle class="cls-1" cx="17.16" cy="17.44" r="17"/>
                        <path class="cls-2" d="M24.53,14.08c0-.14,0-.28,0-.42a5.33,5.33,0,0,0-9.72-3,3,3,0,0,0-4,.35,2.85,2.85,0,0,0-1.21,3.1,4.24,4.24,0,0,0,.32,8.47h5.92V18.3H13.16l3.94-5.75,4.06,5.75H18.49v4.26h5.92a4.24,4.24,0,0,0,.12-8.48Z"/>
                    </svg>
                </div>
                <h3 class="title">Hosting/SaaS</h3>
            </div>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/amember">Amember</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/blesta">Blesta</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/ipboard">IP.Board</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/vbulletin">vBulletin</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/whmcs">WHMCS</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/xenforo">Xenforo</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/xero">Xero</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="docs-ul-box">
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3 copy 9</title>
                        <circle class="cls-1" cx="17.74" cy="17.35" r="17"/>
                        <path class="cls-2" d="M27.62,17c-1-4.15-2.06-6.36-4.16-7s-2.77.56-5.72.56S14.12,9.39,12,10s-3.16,2.84-4.15,7-.81,7.16.37,7.72S10.73,24,12,22.43c1-1.24,1.53-1.32,5.75-1.32s4.65,0,5.76,1.31c1.26,1.58,2.59,2.86,3.76,2.3S28.62,21.16,27.62,17ZM13.5,18.71a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,13.5,18.71Zm10.87-2.46H22.5v1.87H21.25V16.25H19.37V15h1.87V13.12H22.5V15h1.87Z"/>
                    </svg>
                </div>
                <h3 class="title">Gaming</h3>
            </div>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/buycraft">Buycraft</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/enjin">Enjin</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/minecraftmarket">Minecraft market</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3 copy 10</title>
                        <circle class="cls-1" cx="16.93" cy="17.67" r="17"/>
                        <g id="icons">
                            <path id="message" class="cls-2" d="M23.6,8.51H10.27a3.34,3.34,0,0,0-3.33,3.33v8.33a3.34,3.34,0,0,0,3.33,3.33V26a.83.83,0,0,0,1.42.58l3.08-3.08H23.6a3.34,3.34,0,0,0,3.33-3.33V11.84A3.34,3.34,0,0,0,23.6,8.51Zm-5,10h-5a.83.83,0,1,1,0-1.67h5a.83.83,0,0,1,0,1.67Zm1.67-3.33H13.6a.83.83,0,0,1,0-1.67h6.67a.83.83,0,0,1,0,1.67Z"/>
                        </g>
                    </svg>
                </div>
                <h3 class="title">Social network/Messenger</h3>
            </div>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/telegram">Telegram</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/phpfox">PHPfox</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="docs-ul-box">
    <div class="docs-ul-box-item">
        <div>
            <div class="docs-ul-box-item-title">
                <div class="docs-ul-box-item-title-svg">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <defs>
                            <style>.cls-1{fill:#282727;}.cls-2{fill:#fff;}</style>
                        </defs>
                        <title>Artboard 3 copy 11</title>
                        <circle class="cls-1" cx="17" cy="17" r="17"/>
                        <path class="cls-2" d="M23.65,9.63l-4,2.6L11.12,8.5,9,10l6.48,4.9-3.7,2.4-3-1.05-1.32.89,3.81,2.22.33,4.48L13,23l.36-3.23,3.7-2.4,1.55,8.11,2.22-1.29.37-9.5L25.43,12c.73-.47,1.4-1.5.9-2.32S24.38,9.15,23.65,9.63Z"/>
                    </svg>
                </div>
                <h3>Travel</h3>
            </div>
            <ul>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="">Kigo</a>
                </li>
                <li class="docs-ul-box-li">
                    <a class="docs-ul-box-li-link" href="/modules/cubilis">Cubilis</a>
                </li>
            </ul>
        </div>
    </div>
</div>

***

## API Compatibility

{:.docs-content-nomediaquery}
| Product \ API  | Widget API           | Checkout API | Direct API                       | Invoice API | SDK - Mobile | SDK - SmartTV |
|----------------|----------------------|--------------|----------------------------------|-------------|--------------|---------------|
| PayAlto        | ✓                    | ✓            | ...  <br> (coming soon)          | ✓           | ✓            | ✓             |
| Brick          | ✓                    | ✓            | ✓ <br> ([Brick Direct API][1])   | ✓           | ✓            | ✓             |
| Mobiamo        | ✓                    | ✓            | ✓ <br> ([Mobiamo Direct API][2]) | ✓           | ✓            | ✓             |
| MINT           | ✓                    | ✓            | ✓ <br> ([MINT Direct API][3])    | ✓           | ✓            | ✓             |
| Offerwall      | ✓ <br> ([Virtual Currency][4]) | ☓            | ☓                           | ☓           | ✓            | ☓             |

[1]: /integration/direct/brick-home
[2]: /integration/direct/mobiamo-home
[3]: /integration/direct/mint-home
[4]: /integration/widget/offerwall
