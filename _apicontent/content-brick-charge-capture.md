---
category: section-brick-charge-capture
---

## Capture a charge

Capture the pre-authorization funds for a created charge. Refer to [authorize and capture](/integration/direct/brick/charge#authorize-and-capture).

> The *Private API key* is expected to be sent as the value of custom HTTP header ```X-ApiKey``` by using this API. It can only be used for server-to-server calls and should never be exposed to end-users. You will have it been accomplished automatically if you are using our API libraries.

##### Parameters

| Name | Description |
| --- | ---|
| chargeid<br> *required* <br> **string**  | The id of created charge object. |
