(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{741:function(a,s,t){"use strict";t.r(s);var e=t(10),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"greenfield-api-example-with-curl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#greenfield-api-example-with-curl"}},[a._v("#")]),a._v(" Greenfield API example with cURL")]),a._v(" "),s("p",[a._v("The "),s("strong",[s("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Greenfield API"),s("OutboundLink")],1)]),a._v(" (also available on your instance on "),s("code",[a._v("/docs")]),a._v(") allows you to operate BTCPay Server via an easy-to-use REST API.")]),a._v(" "),s("p",[a._v("Note that you can partially generate clients in the language of your choice by using the "),s("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/swagger.json",target:"_blank",rel:"noopener noreferrer"}},[a._v("Swagger file"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("In this guide, we will show you how to use it via command line on linux using "),s("code",[a._v("curl")]),a._v(" and "),s("code",[a._v("jq")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[a._v("#")]),a._v(" Prerequisites")]),a._v(" "),s("p",[a._v("Unless for a few endpoints like creating a store and API key on behalf of a specific user, Basic Auth should be avoided and an API key should be used instead. Make sure that API keys only have the needed permissions and not more. E.g. if you only create invoices you should not give the API key the permission to manage your stores.")]),a._v(" "),s("p",[a._v("You can create a new API key in the BTCPay Server UI under "),s("code",[a._v("Account")]),a._v(" -> "),s("code",[a._v("Manage account")]),a._v(" -> "),s("code",[a._v("API keys")])]),a._v(" "),s("p",[a._v("For the ecommerce examples below the API key needs the following permissions:")]),a._v(" "),s("ul",[s("li",[a._v("View invoices")]),a._v(" "),s("li",[a._v("Create invoice")]),a._v(" "),s("li",[a._v("Modify invoices")]),a._v(" "),s("li",[a._v("Modify stores webhooks")]),a._v(" "),s("li",[a._v("View your stores")]),a._v(" "),s("li",[a._v("Create non-approved pull payments")])]),a._v(" "),s("p",[a._v("For an overview of available permissions see the "),s("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#section/Authentication/API_Key",target:"_blank",rel:"noopener noreferrer"}},[a._v("API documentation"),s("OutboundLink")],1),a._v(" or the permissions documented on each endpoint.")]),a._v(" "),s("h2",{attrs:{id:"ecommerce-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecommerce-examples"}},[a._v("#")]),a._v(" eCommerce examples")]),a._v(" "),s("p",[a._v("The following examples will show you how to create a basic eCommerce flow using the Greenfield API by creating an invoice, registering a webhook, processing webhooks, and issuing a full refund of an invoice.")]),a._v(" "),s("h3",{attrs:{id:"create-an-invoice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-invoice"}},[a._v("#")]),a._v(" Create an invoice")]),a._v(" "),s("p",[a._v("We create an invoice using the "),s("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Invoices_CreateInvoice",target:"_blank",rel:"noopener noreferrer"}},[a._v("create invoice endpoint"),s("OutboundLink")],1),a._v(". This is a simple example but you can set a lot more data like order id, buyer email or custom metadata. That said, don't store redundant data on the invoice to prevent data leaks in case of a hack. E.g. in most cases it makes no sense to store the customer address on your eCommerce system and also on the BTCPay invoice.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAY_INSTANCE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://mainnet.demo.btcpayserver.org"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("API_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"YOUR_API_KEY"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("STORE_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"YOUR_STORE_ID"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AMOUNT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CURRENCY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"USD"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BODY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{}"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--arg")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$AMOUNT")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'. + {amount:$a}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--arg")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CURRENCY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'. + {currency:$a}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Authorization: token '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$API_KEY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BODY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BTCPAY_INSTANCE")]),a._v("/api/v1/stores/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$STORE_ID")]),a._v('/invoices"')]),a._v("\n")])])]),s("h3",{attrs:{id:"register-a-webhook-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-a-webhook-optional"}},[a._v("#")]),a._v(" Register a webhook (optional)")]),a._v(" "),s("p",[a._v("Let's register a webhook to be notified when the invoice is paid. You can use the "),s("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Webhooks_CreateWebhook",target:"_blank",rel:"noopener noreferrer"}},[a._v("create webhook endpoint"),s("OutboundLink")],1),a._v(" to register a webhook.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAY_INSTANCE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://mainnet.demo.btcpayserver.org"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("API_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"YOUR_API_KEY"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("STORE_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"YOUR_STORE_ID"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://example.com/your-webhook-endpoint"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BODY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{}"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--arg")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$URL")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'. + {url:$a}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Authorization: token '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$API_KEY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BODY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BTCPAY_INSTANCE")]),a._v("/api/v1/stores/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$STORE_ID")]),a._v('/webhooks"')]),a._v("\n")])])]),s("p",[a._v("This step is optional, you can also manually create a webhook in the BTCPay Server UI in your store "),s("code",[a._v("Settings")]),a._v(" -> "),s("code",[a._v("Webhooks")]),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"validate-and-process-webhooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validate-and-process-webhooks"}},[a._v("#")]),a._v(" Validate and process webhooks")]),a._v(" "),s("p",[a._v("This is not really possible with curl in bash but when you run a webserver. You can check the examples for "),s("RouterLink",{attrs:{to:"/Development/GreenFieldExample-NodeJS/"}},[a._v("NodeJS")]),a._v(" and "),s("RouterLink",{attrs:{to:"/Development/GreenfieldExample-PHP/"}},[a._v("PHP")]),a._v(".")],1),a._v(" "),s("h3",{attrs:{id:"issue-a-full-refund-of-an-invoice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issue-a-full-refund-of-an-invoice"}},[a._v("#")]),a._v(" Issue a full refund of an invoice")]),a._v(" "),s("p",[a._v("Using the "),s("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Invoices_Refund",target:"_blank",rel:"noopener noreferrer"}},[a._v("invoice refund endpoint"),s("OutboundLink")],1),a._v(" you can issue a full (or even partial) refund of an invoice. This will return a link where the customer can claim the refund.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAY_INSTANCE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://mainnet.demo.btcpayserver.org"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("API_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"YOUR_API_KEY"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("STORE_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"YOUR_STORE_ID"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("INVOICE_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"EXISTING_INVOICE_ID"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PAYMENT_METHOD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"BTC"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("REFUND_VARIANT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"CurrentRate"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BODY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{}"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--arg")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$REFUND_VARIANT")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'. + {refundVariant:$a}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--arg")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PAYMENT_METHOD")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'. + {paymentMethod:$a}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Authorization: token '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$API_KEY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BODY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BTCPAY_INSTANCE")]),a._v("/api/v1/stores/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$STORE_ID")]),a._v("/invoices/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$INVOICE_ID")]),a._v('/refund"')]),a._v("\n")])])]),s("h2",{attrs:{id:"btcpay-server-management-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-management-examples"}},[a._v("#")]),a._v(" BTCPay Server management examples")]),a._v(" "),s("p",[a._v("Here we assume you are an ambassador and host BTCPay Server for your users. You manage your users on your own system and want to create a user and set email and password for their BTCPay Server login. Then using the same credentials to create a store and an API key on behalf of that user.")]),a._v(" "),s("h3",{attrs:{id:"create-a-new-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-user"}},[a._v("#")]),a._v(" Create a new user")]),a._v(" "),s("p",[a._v("Creating a new user can be done by using "),s("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Users_CreateUser",target:"_blank",rel:"noopener noreferrer"}},[a._v("this endpoint"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAY_INSTANCE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://mainnet.demo.btcpayserver.org"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ADMIN_API_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"YOUR_ADMIN_API_KEY"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"satoshi.nakamoto@example.com"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"SuperSecurePasswordsShouldBeQuiteLong123"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BODY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{}"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--arg")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'. + {email:$a}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--arg")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PASSWORD")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'. + {password:$a}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Authorization: token '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ADMIN_API_KEY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BODY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BTCPAY_INSTANCE")]),a._v('/api/v1/users"')]),a._v("\n")])])]),s("h3",{attrs:{id:"create-a-store-on-behalf-of-the-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-store-on-behalf-of-the-user"}},[a._v("#")]),a._v(" Create a store on behalf of the user")]),a._v(" "),s("p",[a._v("Now we create a store with the new users credentials the user becomes the owner "),s("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Stores_CreateStore",target:"_blank",rel:"noopener noreferrer"}},[a._v("create a new store"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("STORE_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"My awesome store"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BODY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{}"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--arg")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$STORE_NAME")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'. + {name:$a}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NEW_STORE_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--user")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),a._v(":"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PASSWORD")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BODY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BTCPAY_INSTANCE")]),a._v('/api/v1/stores"')]),a._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" .id"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"New store id: '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NEW_STORE_ID")]),a._v('"')]),a._v("\n")])])]),s("h3",{attrs:{id:"create-a-new-api-key-on-behalf-of-the-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-api-key-on-behalf-of-the-user"}},[a._v("#")]),a._v(" Create a new API key on behalf of the user")]),a._v(" "),s("p",[a._v("Now we can create an API key and limit it to the new store with e.g. the "),s("code",[a._v("btcpay.store.canmodifystoresettings")]),a._v(" permission. Likely you also want to allow API key to create invoices, but for this example we keep it simple.")]),a._v(" "),s("p",[a._v('You can find the needed permissions for endpoints on the endpoint docs under "Authorization" or an overview of permissions in the '),s("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#section/Authentication/API_Key",target:"_blank",rel:"noopener noreferrer"}},[a._v("authorization section"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ADMIN_API_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"YOUR_ADMIN_API_KEY"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"satoshi.nakamoto@example.com"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PERMISSION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"btcpay.store.canmodifystoresettings"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NEW_STORE_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"NEW_STORE_ID_FROM_PREVIOUS_STEP"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BODY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{}"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--arg")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PERMISSION")]),a._v(":"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NEW_STORE_ID")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'. + {permissions:[$a]}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("USER_API_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Authorization: token '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ADMIN_API_KEY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BODY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BTCPAY_INSTANCE")]),a._v("/api/v1/users/"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),a._v('/api-keys"')]),a._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" .apiKey"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"New user api key: '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$USER_API_KEY")]),a._v('"')]),a._v("\n")])])]),s("h3",{attrs:{id:"read-store-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read-store-information"}},[a._v("#")]),a._v(" Read store information")]),a._v(" "),s("p",[a._v("We can use the new apikey to "),s("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Stores_GetStore",target:"_blank",rel:"noopener noreferrer"}},[a._v("read store"),s("OutboundLink")],1),a._v(" information:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("USER_API_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"API_KEY_FROM_PREVIOUS_STEP"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NEW_STORE_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"NEW_STORE_ID_FROM_BEFORE_PREVIOUS_STEP"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Authorization: token '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$USER_API_KEY")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" GET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BTCPAY_INSTANCE")]),a._v("/api/v1/stores/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NEW_STORE_ID")]),a._v('"')]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);