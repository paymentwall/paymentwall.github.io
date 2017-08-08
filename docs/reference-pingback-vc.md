---
id: notification-pingback-vc
title: Virtual Currency API Pingback
sectionid: docs
permalink: reference/pingback/vc
---

# Virtual Currency API Pingback

> Before you start, please read [Pingbacks](/reference/pingback-home) document first to get overview of Paymentwall Pingback system.

## Sample of Pingback Request for Virtual Currency API

```
http://www.yourserver.com/anypath?uid=pwuser&currency=200&type=0&ref=b1493096790&sign_version=2&sig=d94b23ba8585f29978706dd1b153ead9
```

## Sample code of Pingback Listener

Sample code using [Paymentwall API Libraries](https://github.com/paymentwall) at GitHub.

{% assign codeId = "pingback-listener-vc" %}
<div class="docs-code" id="{{ codeId }}">
  <ul class="docs-code-tabs">
    <li>
      <a class="docs-code-tabs__tab is-active" lang="php">Php</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="js">Node</a>
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
      <a class="docs-code-tabs__tab" lang="dotnet">.Net</a>
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

# Next Step

Before you submit the project, please test your pingback integration using [Test Pingback Tool](/sandbox/pingback-tool).

You should check whether your Pingback listener is :
- responding "OK" to Paymentwall pingback requests.
- filtering duplicate reference id requests.
- filtering wrong signature requests. You can test this by checking "Use a dummy value" feature in Test Pingback Tool.

You can then submit your project for review.

> See [project go live](/guides/review-home).