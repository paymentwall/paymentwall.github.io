---
id: integration-direct-brick-pingback
title: Brick Pingback
sectionid: docs
permalink: integration/direct/brick/pingback
---

# Brick Pingback

Brick send asynchronous payment notification, [pingback](/reference/pingback-home), as the additional confirmation of each payment as well. 

***

## Handle Pingback

On your server side, put the following code as an online server interface to interact with our *Pingback*:

{% assign codeId = "pingback-listener-dg" %}
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
      <a class="docs-code-tabs__tab" lang="ruby">Ruby</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="python">Python</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="dotnet">.NET</a>
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
  <div class="docs-code-tabs__body js-lang-ruby">
    {% for docscode in site.docscode-ruby %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-python">
    {% for docscode in site.docscode-python %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-dotnet">
    {% for docscode in site.docscode-dotnet %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
</div>

A *pingback* request typically contains all the information for you to do the product delivery. As an addition, Paymentwall provides a series of reversed parameters as [custom pingback parameters](/reference/pingback/custom-parameter) for specific needs, you can also add your own parameters as *custom pingback parameter* in order to implement parameter transmission.

Below is a sample with default format:

```
http://www.yourserver.com/pingback_path?uid=pwuser&goodsid=gold_membership&slength=&speriod=&type=0&ref=b1493096790&sign_version=2&sig=d94b23ba8585f29978706dd1b153ead9
```

> Refer to [pingback types](/reference/pingback-home#pingback-type) for risk review of Brick payments.

After validating the *pingback*, your server is always expected to be able to proceed the delivery process and respond to it with only ```OK``` in the body of *response*. 

