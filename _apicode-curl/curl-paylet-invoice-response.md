---
category: section-paylet-invoice-response
---
 
```json
[
    {
        "invoice_number": "INV-00355",
        "application_id": 166111,
        "date": 1493960400,
        "due_date": 1491368400,
        "currency": "USD",
        "status": "sent",
        "email": "liangnexcolor@gmail.com",
        "total_amount": "149.4800",
        "sub_total_amount": "149.4800",
        "invoice_id": 6893,
        "public_id": "95NMR5ODQUWM0YPJ2XQ5",
        "status_formatted": "Sent",
        "due_date_formatted": "06\/05\/2017",
        "date_formatted": "05\/05\/2017",
        "view_url": "https:\/\/api.paymentwall.com\/api\/invoice\/view?key=cd36b8635c7296dad972a239142c4b84&uid=liangnexcolor%40gmail.com&sign_version=2&id=95NMR5ODQUWM0YPJ2XQ5&sign=bd1fe15077982c3ecf609b3f75f86592",
        "payment_url": "https:\/\/api.paymentwall.com\/api\/invoice\/?key=cd36b8635c7296dad972a239142c4b84&uid=liangnexcolor%40gmail.com&sign_version=2&id=95NMR5ODQUWM0YPJ2XQ5&sign=bd1fe15077982c3ecf609b3f75f86592",
        "pdf_url": "https:\/\/api.paymentwall.com\/api\/invoice\/download-pdf?key=cd36b8635c7296dad972a239142c4b84&uid=liangnexcolor%40gmail.com&sign_version=2&id=95NMR5ODQUWM0YPJ2XQ5&sign=bd1fe15077982c3ecf609b3f75f86592",
        "owner": {
            "company_name": "Liang's company",
            "country_name": "China",
            "address": "4th middle road, North",
            "city": "BeiJing",
            "state": 699,
            "first_name": "",
            "last_name": "",
            "zipcode": "100085",
            "logo_url": "https:\/\/api.paymentwall.com\/\/images\/logo2.png"
        },
        "currency_code": "USD",
        "sub_total_amount_formatted": "149.48 USD",
        "total_amount_formatted": "149.48 USD",
        "items": [
            {
                "application_id": 166111,
                "title": "Red apple",
                "description": "Fresh apples",
                "unit_cost": "10.00",
                "currency": "USD",
                "tax": {
                    "type": "percentage",
                    "value": "1"
                },
                "discount": {
                    "type": "percentage",
                    "value": "1"
                },
                "item_id": 8347,
                "quantity": "10.00",
                "line_total": 99.99,
                "line_total_formatted": "99.99 USD",
                "unit_cost_formatted": "10.00 USD"
            },
            {
                "application_id": 166111,
                "title": "Green apple",
                "description": "Fresh apples",
                "unit_cost": "10.00",
                "currency": "USD",
                "tax": {
                    "type": "percentage",
                    "value": "1"
                },
                "discount": {
                    "type": "percentage",
                    "value": "2"
                },
                "item_id": 8348,
                "quantity": "5.00",
                "line_total": 49.49,
                "line_total_formatted": "49.49 USD",
                "unit_cost_formatted": "10.00 USD"
            }
        ],
        "contacts": [
            {
                "application_id": 166111,
                "first_name": "John",
                "last_name": "Doe",
                "salutation": "Mr.",
                "email": "liangnexcolor@gmail.com",
                "company_name": "ABCD Industries",
                "title": "CEO",
                "address": "326 Market Street",
                "country": "US",
                "country_formatted": "United States",
                "city": "Palo Alto",
                "zipcode": "94103",
                "phone_number": "(800)5551000",
                "note": "This will show on your Invoice",
                "contact_id": 7275
            }
        ],
        "taxes": [
            
        ],
        "discounts": [
            
        ],
        "bank_details": [
            
        ],
        "show_pay_button": true
    }
]
```
