(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{474:function(e,t,a){e.exports=a.p+"assets/img/BTCPayInvoiceNinja.7c719a40.png"},475:function(e,t,a){e.exports=a.p+"assets/img/InvoiceNinja1.0e516fad.png"},476:function(e,t,a){e.exports=a.p+"assets/img/InvoiceNinja2.88829647.png"},477:function(e,t,a){e.exports=a.p+"assets/img/InvoiceNinja3.dc5c485d.png"},478:function(e,t,a){e.exports=a.p+"assets/img/InvoiceNinja4.2117b703.png"},479:function(e,t,a){e.exports=a.p+"assets/img/InvoiceNinja5.ae71c87e.png"},480:function(e,t,a){e.exports=a.p+"assets/img/InvoiceNinja6.49c81682.png"},481:function(e,t,a){e.exports=a.p+"assets/img/InvoiceNinja7.267cea6e.png"},482:function(e,t,a){e.exports=a.p+"assets/img/InvoiceNinja8.0b028207.png"},483:function(e,t,a){e.exports=a.p+"assets/img/InvoiceNinja9.06f827a4.png"},777:function(e,t,a){"use strict";a.r(t);var i=a(10),o=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-accept-bitcoin-payments-with-invoice-ninja"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-accept-bitcoin-payments-with-invoice-ninja"}},[e._v("#")]),e._v(" How to accept Bitcoin payments with Invoice Ninja?")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(474),alt:"BTCPay Server Invoice",title:"BTCPay Server Invoice"}})]),e._v(" "),t("p",[t("a",{attrs:{href:"http://invoiceninja.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Invoice Ninja"),t("OutboundLink")],1),e._v(" is a robust invoicing and billing software designed to help small businesses, freelancers, and entrepreneurs manage their invoices, payments, and clients. With its wide array of features, InvoiceNinja simplifies the billing process, allowing users to focus on growing their business.")]),e._v(" "),t("p",[e._v("The integration of "),t("a",{attrs:{href:"https://btcpayserver.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server"),t("OutboundLink")],1),e._v(" with Invoice Ninja enables you to accept bitcoin as a payment method, without fees, intermediaries with payments going directly to your bitcoin wallet.")]),e._v(" "),t("p",[e._v("This guide will walk you through the steps to configure and use your BTCPay Server with InvoiceNinja. BTCPay payment capabilities are directly integrated into InvoiceNinja. No plugins are needed.")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/4oy-DCf6lhw/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=4oy-DCf6lhw",title:"Invoice Ninja","data-id":"4oy-DCf6lhw"}},[t("iframe",{attrs:{title:"Invoice Ninja","data-src":"https://www.youtube-nocookie.com/embed/4oy-DCf6lhw?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ul",[t("li",[e._v("InvoiceNinja (hosted or self-hosted)")]),e._v(" "),t("li",[e._v("BTCPay Server ("),t("RouterLink",{attrs:{to:"/Deployment/"}},[e._v("self-hosted")]),e._v(" or hosted by a "),t("RouterLink",{attrs:{to:"/Deployment/ThirdPartyHosting/"}},[e._v("third-party provider")]),e._v(")")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/CreateStore/"}},[e._v("Created store")]),e._v(" on BTCPay Server")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/WalletSetup/"}},[e._v("Connected wallet")]),e._v(" on BTCPay Server")],1)]),e._v(" "),t("h2",{attrs:{id:"1-payment-gateway-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#1-payment-gateway-configuration"}},[e._v("#")]),e._v(" 1. Payment Gateway configuration")]),e._v(" "),t("p",[e._v("To configure BTCPay in Invoice Ninja, follow these steps:")]),e._v(" "),t("ol",[t("li",[e._v("Log in to the Invoice Ninja Admin Portal:")]),e._v(" "),t("li",[e._v("Go to the Settings > "),t("strong",[e._v("Payment Settings")])]),e._v(" "),t("li",[e._v("In the top right corner, click on the "),t("strong",[e._v("Add payment gateway")])]),e._v(" "),t("li",[e._v("Scroll through the dropdown menu and click "),t("strong",[e._v("BTCPay")])]),e._v(" "),t("li",[e._v("Next, you’ll see the BTCPay configuration page. It’s important that "),t("strong",[e._v("before adding any data")]),e._v(" in the credential fields, "),t("strong",[e._v("you click Save, to create a payment gateway")]),e._v(".")])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(475),alt:"BTCPay Server Invoice",title:"BTCPay Server Invoice"}})]),e._v(" "),t("figure",[t("img",{attrs:{src:a(476),alt:"BTCPay Server Invoice",title:"BTCPay Server Invoice"}})]),e._v(" "),t("p",[e._v("Once we created a payment gateway, let’s proceed to step 2, and pair our BTCPay Server with Invoice Ninja.")]),e._v(" "),t("h2",{attrs:{id:"2-pairing-your-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#2-pairing-your-btcpay-server"}},[e._v("#")]),e._v(" 2. Pairing your BTCPay Server")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(477),alt:"BTCPay Server Invoice",title:"BTCPay Server Invoice"}})]),e._v(" "),t("h3",{attrs:{id:"21-btcpay-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#21-btcpay-url"}},[e._v("#")]),e._v(" 2.1 BTCPay URL")]),e._v(" "),t("p",[e._v("In the BTCPay URL field of your, simply input the link to your self-hosted server or the one hosted by a "),t("a",{attrs:{href:"https://directory.btcpayserver.org/filter/hosts",target:"_blank",rel:"noopener noreferrer"}},[e._v("third-party provider"),t("OutboundLink")],1),e._v(".\n"),t("em",[e._v("For example; https://mainnet.demo.btcpayserver.org")])]),e._v(" "),t("h3",{attrs:{id:"22-btcpay-store-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#22-btcpay-store-id"}},[e._v("#")]),e._v(" 2.2 BTCPay Store ID")]),e._v(" "),t("p",[e._v("BTCPay Store ID can be obtained from your BTCPay Server, in "),t("strong",[e._v("Store Settings > General > Store ID")]),e._v(" field. Copy it and paste it over in the BTCPay Store ID field.")]),e._v(" "),t("h3",{attrs:{id:"23-generating-the-api-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#23-generating-the-api-key"}},[e._v("#")]),e._v(" 2.3 Generating the API key")]),e._v(" "),t("p",[e._v("To create the BTCPay API key, click on the Account located at the bottom of the sidebar.")]),e._v(" "),t("ol",[t("li",[e._v("Click on the "),t("strong",[e._v("Manage Account > API Key")]),e._v(".")]),e._v(" "),t("li",[e._v("Click on the "),t("strong",[e._v("Generate API")]),e._v(" key button")]),e._v(" "),t("li",[e._v("Click on the checkboxes and enable the following permissions:\n"),t("ul",[t("li",[e._v("View invoices")]),e._v(" "),t("li",[e._v("Create an invoice")]),e._v(" "),t("li",[e._v("Modify invoices")]),e._v(" "),t("li",[e._v("Modify selected stores' webhooks")]),e._v(" "),t("li",[e._v("View your stores")]),e._v(" "),t("li",[e._v("Create non-approved pull payments in selected stores")])])]),e._v(" "),t("li",[e._v("Optionally, if you have multiple BTCPay Stores, you can select a store to which permissions apply")]),e._v(" "),t("li",[t("strong",[e._v("Reveal and copy the API key")]),e._v(" by and "),t("strong",[e._v("paste")]),e._v(" it over in the Invoice Ninja in the API Key field.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(478),alt:"BTCPay Server Invoice",title:"BTCPay Server Invoice"}})]),e._v(" "),t("figure",[t("img",{attrs:{src:a(479),alt:"BTCPay Server Invoice",title:"BTCPay Server Invoice"}})]),e._v(" "),t("h3",{attrs:{id:"24-generating-the-webhook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#24-generating-the-webhook"}},[e._v("#")]),e._v(" 2.4 Generating the webhook")]),e._v(" "),t("ol",[t("li",[e._v("In your InvoiceNinja, under your "),t("strong",[e._v("Payment Settings > Edit Payment Gateway,")]),e._v(" click on the "),t("strong",[e._v("Payment Gateway")]),e._v(" tab, and copy the "),t("strong",[e._v("Webhook URL")]),e._v('"')]),e._v(" "),t("li",[e._v("Next, go to your BTCPay Server Store Settings > "),t("strong",[e._v("Webhooks")])]),e._v(" "),t("li",[e._v("Click on the "),t("strong",[e._v("Create Webhook")]),e._v(" button")]),e._v(" "),t("li",[e._v("Paste the Webhook URL you copied from InvoiceNinja (step 1) into "),t("strong",[e._v("Payload URL")]),e._v(" field")]),e._v(" "),t("li",[e._v('Click on the "Eye" icon next to the Secret field to reveal the secret key and copy it.')]),e._v(" "),t("li",[e._v("Don't forget to click on the Add webhook to apply all the changes.")]),e._v(" "),t("li",[e._v("Go back InvoiceNinja and paste the Secret Key into the Webhook Secret field")]),e._v(" "),t("li",[e._v("Click "),t("strong",[e._v("Save")]),e._v(" to apply all the changes")])]),e._v(" "),t("p",[t("em",[e._v('In the"Settings" and "Limits/Fees" tab, you can set other options, common to other InvoiceNinja payment systems.')])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(480),alt:"BTCPay Server Invoice",title:"BTCPay Server Invoice"}})]),e._v(" "),t("h3",{attrs:{id:"3-enable-crypto-payment-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#3-enable-crypto-payment-method"}},[e._v("#")]),e._v(" 3. Enable Crypto payment method")]),e._v(" "),t("p",[e._v("Once everything is set up, don’t forget to enable the Crypto payment option from the Payment Gateway Settings tab, and click save.")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(481),alt:"BTCPay Server Invoice",title:"BTCPay Server Invoice"}})]),e._v(" "),t("p",[e._v("Now you are all set! Feel free to generate invoices for your clients and get paid in Bitcoin.")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(482),alt:"BTCPay Server Invoice",title:"BTCPay Server Invoice"}})]),e._v(" "),t("figure",[t("img",{attrs:{src:a(483),alt:"BTCPay Server Invoice",title:"BTCPay Server Invoice"}})])])}),[],!1,null,null,null);t.default=o.exports}}]);