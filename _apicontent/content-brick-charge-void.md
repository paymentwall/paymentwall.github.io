---
category: section-brick-charge-void
---

## Void a charge

Void the pre-authorization funds for a created charge.

> The *Private API key* is expected to be sent as the value of custom HTTP header ```X-ApiKey``` by using this API. It can only be used for server-to-server calls and should never be exposed to end-users. You will have it been accomplished automatically if you are using our API libraries.

##### Parameters

| Name | Description |
| --- | ---|
| chargeid<br> *required* <br> **string**  | The id of created charge object. |
