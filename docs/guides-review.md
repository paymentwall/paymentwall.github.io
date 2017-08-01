---
id: development-review
title: Review
sectionid: docs
permalink: guides/review-home
---

# Project go live

Your project is always in sandbox environment when its status is not live, where only [test payment](/sandbox/test-payment) is allowed to be used.

You can submit your project for review by clicking **SUBMIT FOR REVIEW** button.

<div class="docs-img">
	<img src="/textures/pic/reference/review/review-submit.png" style="max-width: 30%">
</div>

## Adjustment before going live

Paymentwall team will take a whole review of your project and set your project status according to [checklist](#checklist). You just need to do a few adjustments to assurance your project could work normally in live environment.

* API credentials

It mostly depends on the product you are using.

[Paylet](/integration/widget-home) uses same API credentials in both sandbox and live environment.

For merchants who are using [Brick](/integration/direct/brick-home), you will need to replace your brick test credentials to the live one.

* Disable test payment method

By default, we disable test payment immediately for your project when its status is changed to live. 

We recommend you to create another project under your Paymentwall account as staging project.

## Checklist

A checklist form will be opened and asking you to confirm that you have completed associated operations once you submit your project for review.

* [Integration checklist](/guides/review/technical).

* [Business checklist](/guides/review/business).


