---
category: section-invoicing
---

Endpoint
```
POST https://api.paymentwall.com/developers/invoice-api/invoice
```

Sample Request
```html
curl https://api.paymentwall.com/developers/invoice-api/invoice \
-H "X-ApiKey: [YOUR_SECRET_KEY]" \
-d "invoice_number":"INV-00355" \
-d "currency":"USD" \
-d "date":"05/05/2017" \
-d "due_date":"06/05/2017"\
-d "contacts":[{
        "company_name":"ABCD Industries",
        "salutation":"Mr.",
        "first_name":"John",
        "last_name":"Doe",
        "email":"liangnexcolor@gmail.com",
        "title":"CEO",
        "country":"US",
        "city":"Palo Alto",
        "address":"326 Market Street",
        "zipcode":"94103",
        "phone_number":"(800)5551000",
        "note":"This will show on your Invoice"
    }] \
-d "items":[{
        "quantity":5,
        "title":"Red apple",
        "description":"Fresh apples",
        "unit_cost":10,
        "currency":"USD",
        "tax":{
            "type":"percentage",
            "value":"1"
        },
        "discount":{
            "type":"percentage",
            "value":"1"}
      },{
        "quantity":10,
        "title":"Green apple",
        "description":"Fresh apples",
        "unit_cost":10,
        "currency":"USD",
        "tax":{
            "type":"percentage",
            "value":"1"
        },
        "discount":{
            "type":"percentage",
            "value":"2"}
    }] \
-d "taxes":[{
        "type":"percentage",
        "value":"THE-TAX-VALUE",
        "name":"USA NATIONAL TAX"
    }] \
-d "discounts":[{
        "type":"percentage",
        "value":"THE-PERCENTAGE-VALUE",
        "name":"Royalty User Discount"
    }] \
-d "key":"[YOUR_PROJECT_KEY]"
```