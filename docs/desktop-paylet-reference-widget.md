---
id: desktop-paylet-widget
title: Widget
sectionid: docs
permalink: /paylet/reference/widget
---

# Widget

Widget is a web page hosted by Paymentwall to display available payment methods to your customers. The payment methods which are shown into widget depends on user's current IP address and configuration in **Payment System** of your project.

## Available widgets

| Widget code | Suitable products | Mobile view compatible | Real widget| Description | 
| --- | --- | --- | --- |
| p1 | Stored Products, Custom Price | No | [Link to widget](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=testuser&widget=p1_1&amount=5&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&sign_version=2&sign=afe2fbe4e445ae703259bdb3f0c909f0){:target="_blank"} | A unified widget for desktop. |
| p2 | Stored Products, Custom Price | No | [Link to widget using MINT as example](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=testuser&widget=p2_1&amount=5&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&ps=epinpaymentsystem&sign_version=2&sign=f3643252dba6ed194459eea277ed85ba){:target="_blank"} | Similar to p1 but display only one payment method. Requires ```ps``` in [optional parameter](/apis#section-paylet-optional-parameter). |
| p4 | Stored Products, Custom Price | No | [Link to widget](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=testuser&widget=p4_1&amount=5&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&sign_version=2&sign=fc715389c5e7b062dbf9eab8e937e98b){:target="_blank"} | P4 widget will force all the payment method to be opened in a new browser window. |
| p10 | Stored Products, Custom Price | No | [Link to widget](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=testuser&widget=p10_1&amount=5&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&sign_version=2&sign=9a9ef4412a67bf93ce6d6c3f8d7adfde){:target="_blank"} | A customized version for p1 widget. |
| m2 | Stored Products, Custom Price | Yes | [Link to widget](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=testuser&widget=m2_1&amount=5&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&sign_version=2&sign=fa282a71d06752af78b0de3724f80f41){:target="_blank"} | A unified widget with better performance on mobile. |
| mo | Stored Products, Custom Price | Yes | [Link to widget for Mobiamo in Germany](https://api.paymentwall.com/api/ps/?key=7f37fa10dcc9ce39ea133ba24b76e748&uid=testuser&widget=mo1_1&vc=Coins&country_code=DE&sign_version=2&sign=ed3a0a3aecdf33628427f7ea5596672f){:target="_blank"} |  This widget is designed for [Mobiamo](/direct/mobiamo-home) only. |
| pw | Custom Price | Yes | [Link to widget](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=user40012&widget=pw_1&amount=0.99&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&sign_version=2&sign=0802bcbf5754b056458d4036fca74d24){:target="_blank"} | New widget which supports to display your own company logo and has better humanized design. |
| w6 | offerwall | No | [Link to widget for offerwall in USA](https://api.paymentwall.com/api/?key=7f37fa10dcc9ce39ea133ba24b76e748&uid=paymentwall&widget=w6&vc=Coins&country_code=US&sign_version=2&sign=24dcd7346bae3d78dd75c7b5c44adae3){:target="_blank"} | A unified widget for offerwall merchants. |
| mw6 | offerwall | Yes | [Link to widget for offerwall in USA](https://api.paymentwall.com/api/?key=7f37fa10dcc9ce39ea133ba24b76e748&uid=paymentwall&widget=mw6&vc=Coins&country_code=US&sign_version=2&sign=abfd58e6e3db8377ff11de3cf5dca13b){:target="_blank"} | Mobile view version for Offerwall widget. |

## Create a widget

You can create any available widget above for your project in [widgets area](https://api.paymentwall.com/developers/widgets/). 

Widget code of created widgets is expanded with additional number as suffix for [widget customization](/paylet/widget/reference#customization). 

> The default widget code without suffix can also be used directly, widget customization and its features are limited in this case.

