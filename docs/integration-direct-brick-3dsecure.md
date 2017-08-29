---
id: payments-direct-brick-3Dsecure
title: 3D Secure
sectionid: docs
permalink: integration/direct/brick/3dsecure
---

# 3D Secure 

3D secure ([Verified by Visa](https://www.visaeurope.com/making-integration/verified-by-visa/), [MasterCard SecureCode](http://www.mastercard.com/gateway/implementation_guides/3D-Secure.html)) is an additional security step for credit card payments that helps prevent fraud. 

3D secure flow is the same between [charge](/integration/direct/brick/charge) and [subscription](/integration/direct/brick/subscription), we are using charge as an example in this tutorial. 

***

## Enable 3D secure

By passing ```secure=1``` as an additional parameter in your [charge request](/integration/direct/brick/charge#charge-request), a different charge response will be returned. It includes a redirect url which allows you to redirect your customer to the 3D secure form which is provided by the card issuing banks of your customers .

In order to implement 3D secure feature, you will need to do following adjustments:

* Display 3D secure form to your customer and [collect secure token](#collect-secure-token).

* [Re-submit charge request](#re-submit-charge-request) to finish a payment with 3D secure.

***

## Collect secure token

Once a payment is enrolled into 3D secure payment step, the payer need to verify himself on 3D secure form, it could be his card password or a SMS message containing verification code, etc. 

Displaying 3D secure form for your customers is the first step. After that, ```brick_secure_token``` and ```brick_charge_id``` would be included into the http ```request``` object once the payer has completed the 3D secure step, which are needed in second charge request.

The implementation is different depending on your payment form.

If you are using [default payment form](/integration/direct/brick/create-form#tokenize-payment-details-with-default-form), this part is handled by default payment form itself. See [re-submit charge request](#re-submit-charge-request) to continue.

***

For merchants who prefer [custom payment form](/integration/direct/brick/create-form#tokenize-payment-details-with-your-own-form), the following steps are required:

* Add ```secure_redirect_url``` & ```secure_return_method``` 

You will need to add the above two additional parameter into your [charge request](/integration/direct/brick/charge#charge-request)

```secure_redirect_url``` is the url where your customer will be redirected after completing the 3D secure step. 

The value of ```secure_return_method``` is required to be set as ```url``` so that you will get a redirect url rather than a html form.

{% assign codeId = "brick-3dsecure-secure-redirect-url" %}
<div class="docs-code" id="{{ codeId }}">
  <ul class="docs-code-tabs">
    <li>
      <a class="docs-code-tabs__tab is-active" lang="php">PHP</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="js">Node.js</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="java">Java</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="curl">cURL</a>
    </li>
  </ul>
  <div class="docs-code-tabs__body js-lang-php is-active">
    {% for docscode in site.docscode-php %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-js">
    {% for docscode in site.docscode-js %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-java">
    {% for docscode in site.docscode-java %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-curl">
    {% for docscode in site.docscode-curl %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
</div>

```brick_fingerprint``` and ```brick_token``` of the original request should be embedded into ```secure_redirect_url```, so that they can be subsequently passed into the second charge request. Here is a sample:

```html
secure_redirect_url: http://your-domain/your-secure-redirect-url?brick_token=ot_4ca5cbda3D4af3444759e4934dd25717&brick_fingerprint=satiO3yvBDuPMEZUJep4vKuqVav5VxAT
```

* Obtain 3D secure form and display it

With 3D secure enabled, you will get a charge response object contains the redirect url. Below is a sample charge response object.

```json
{
  "success":0,
  "secure":{
    "redirect":"https:\/\/api.paymentwall.com\/api\/brick\/redirect\/3Ds\/fe989d17-5632-11e7-bfd3-002590852bf4\/44ea915ab53D78f96b3Dd485e7a5f8d2441572876f7a2eb88f5101cb197adcc9"
  }
}
```

You can then use it to redirect your customer to 3D secure page. See the next step to continue.

The following additional step are required only if you don't have ```secure_return_method``` included in your original charge request. You will get a html form of 3D Secure instead of redirecting url.

```json
{
  "success":0,
  "secure":{
     "formHTML":"<div><form action=\"https:\/\/api.paymentwall.com\/api\/brick\/secure-test-bank-page?public_key=t_a93Db6bffafdda5c57ab48296fdbba\" method=\"POST\"><input type=\"hidden\" name=\"PaReq\" value=\"to_validate_this\"><input type=\"hidden\" name=\"MD\" value=\"t34451493976105_test\"><input type=\"hidden\" name=\"TermUrl\" value=\"https:\/\/api.paymentwall.com\/api\/brick\/secure-payment?public_key=a3Dff98c34722f0e130a68e6b4c9da56&secure_redirect_url=http%3A%2F%2Fpaymentwall.com%2Fbrick%2F3Dsecure%3Fbrick_token%3Dot_4ca5cbda3D4af3444759e4934dd25717%26brick_fingerprint%3DsatiO3yvBDuPMEZUJep4vKuqVav5VxAT\"><\/form><\/div>"
  }
}
```

Simply obtian the value of ```formHTML``` attribute, embed it into your payment page and submit it directly, the 3D secure form will be displayed in a new tab as a result.

```html
<script>
  document.getElementById("3Ds_form_container").getElementsByTagName("form")[0].submit();
  // 3Ds_form_container is the place where 3D secure form is embedded in
</script>
```

* Handle 3D secure details on your backend

```brick_secure_token``` and ```brick_charge_id``` will be sent to ```secure_redirect_url``` via POST each time a payer comfirmed the 3D secure payment step, you can now continue with next step.

***

## Re-submit charge request

Payments with 3D secure enabled requires another charge request with below two parameters included in.

| Parameter | Description|
| ---|---|
| charge_id | Charge id of your original charge request. ```brick_charge_id``` in request object. |
| secure_token | Secure token returned by issuing bank for 3D secure purpose. ```brick_secure_token``` in request object. |

As these two parameters have been passed to your backend, you can easily add them directly in second charge request.

{% assign codeId = "brick-3dsecure-2nd-charge-request" %}
<div class="docs-code" id="{{ codeId }}">
  <ul class="docs-code-tabs">
    <li>
      <a class="docs-code-tabs__tab is-active" lang="php">PHP</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="js">Node.js</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="java">Java</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="curl">cURL</a>
    </li>
  </ul>
  <div class="docs-code-tabs__body js-lang-php is-active">
    {% for docscode in site.docscode-php %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-js">
    {% for docscode in site.docscode-js %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-java">
    {% for docscode in site.docscode-java %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-curl">
    {% for docscode in site.docscode-curl %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
</div>

***

## Next step

That's it. Your payment system now should be able to handle payments with 3D secure enabled, below links might be helpful for you:

* Test your payment system with [Brick sandbox enviroment](/integration/direct/brick/sandbox).

* [Submit your project]() for review to go live your project.