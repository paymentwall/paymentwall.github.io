---
category: section-param-user_profile
---
## User Profile

This is a list of additional risk parameters that can be used for risk scoring and risk assessment in order to prevent fraudulent payments. The risk parameters can be passed along with parameters in either [widget API](#section-widget) or [checkout API](#section-checkout-onetime) for Paymentwall to account for the relevant merchant data when calculating the risk score and during risk review by Paymentwall's risk agents.

<br>

> At the point when an end-user wishes to make a payment, his registration details may be passed to Paymentwall that provides payment processing services, in order for Paymentwall to better protect service and end-users from unauthorized payments.

##### Parameters

| Name | Description |
|:--|:--|
|customer[birthday]<br> **string**| Unix timestamp of user's birthday, seconds since Jan 01 1970. |
|customer[sex]<br> **string**| 	Male or female. |
|customer[username]<br> **string**| Username on the website, if applicable and different from uid parameter. |
|customer[firstname]<br> **string**| Given name of the user. |
|customer[lastname]<br> **string**| Family name of the user. |
|customer[city]<br> **string**| City name. |
|customer[state]<br> **string** | State/province name. |
|customer[address]<br> **string** | The address of customer.|
|customer[country]<br> **string** | Country code, [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), e.g. DE. |
|customer[zip]<br> **string** | ZIP/postal code. |
|history[membership]<br> **string**| Type of membership or loyalty program status at the time right before the payment is being made, if applicable. E.g.: no, gold, silver. Alternatively, in-game level can be passed in format 15/100 (15 out of 100). |
|history[membership_date]<br> **string**| Unix timestamp of last membership update.|
|history[registration_date]<br> **string**| Unix timestamp of the registration date.|
|history[registration_country]<br> **string** | Country code of the country used for the registration, [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). |
|history[registration_age]<br> **string** | Age used for the registration. |
|history[registration_ip]<br> **string** | 	IP address used for the registration.|
|history[registration_email]<br> **string** | Email address used for the registration.|
|history[registration_email_verified]<br> **string** | Whether the user is verified. 0 or 1.|
|history[registration_name]<br> **string** | First name(s) used for the registration.|
|history[registration_lastname]<br> **string** | Last name(s) used for the registration.|
|history[registration_source]<br> **string** | Identifier of the source where the registration is coming from; use cases: affiliate, referrer, website banner; example: history[registration_source]=affiliate_4312. |
|history[logins_number]<br> **string** | The times of logins since registration date.|
|history[payments_number]<br> **string** | The count of of successful payments made. |
|history[payments_amount]<br> **string** | Cumulative payments by the user converted into USD.|
|history[followers]<br> **string** | Followers, subscribers, friends and etc.|
|history[messages_sent]<br> **string** | The count of messages sent to other users.|
|history[messages_sent_last_24hours]<br> **string** | The count of messages sent to other users in the last 24 hours.|
|history[messages_received]<br> **string** | The count of messages received from other users. |
|history[interactions]<br> **string** | The count of people the user interacted with in total. |
|history[interactions_last_24hours]<br> **string** | The count of people the user interacted with in the last 24 hours.|
|history[customer_rating]<br> **string** | Customer rating out of 100, assigned by provider company or its members.|
|history[risk_score]<br> *recommend* <br> **string** | Fraud score or risk score within your system if applicable. varies from 0 to 100 where 0 is the most reliable user and 100 is the most fraudulent. |
|history[complaints]<br> **string** | Number of cases when the user had a complaint.
|history[was_banned]<br> *recommend* <br> **string** | 1 or 0 if the user was ever banned.|
|history[delivered_products]<br> **string** | The count of successfully delivered products (if applicable).|
|history[cancelled_payments]<br> **string** | The count of cancelled payments during user's lifetime if any.|
