(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{750:function(t,a,e){"use strict";e.r(a);var s=e(35),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tallycoin-connect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tallycoin-connect"}},[t._v("#")]),t._v(" Tallycoin Connect")]),t._v(" "),e("p",[t._v("Set up "),e("a",{attrs:{href:"https://github.com/djbooth007/tallycoin_connect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tallycoin Connect"),e("OutboundLink")],1),t._v(" on your BTCPay Server instance to allow for the retrieval of Lightning invoices via "),e("a",{attrs:{href:"https://tallyco.in/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tallycoin"),e("OutboundLink")],1),t._v(".\nLND required.")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("To install the Tallycoin Connect service, you need to set your Tallycoin API key and a password first.\nThe password is optional, but as the service will be publicly available, you are strongly advised to require a secure password for the login.")]),t._v(" "),e("p",[t._v("You can either set "),e("code",[t._v("TALLYCOIN_PASSWD_CLEARTEXT")]),t._v(" (plain text) or "),e("code",[t._v("TALLYCOIN_PASSWD")]),t._v(", which must be a sha256 hash of your login password.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set API key and password")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TALLYCOIN_APIKEY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-tallycoin-api-key"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TALLYCOIN_PASSWD_CLEARTEXT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sUpErSeCuRe"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add fragment and run setup")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),t._v(';opt-add-tallycoin-connect"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" btcpay-setup.sh -i\n")])])]),e("p",[t._v("Afterwards you should see Tallycoin Connect appear as a service on the Server Settings > Services page in BTCPay Server.")]),t._v(" "),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),e("p",[t._v("To see the logs of the Tallycoin Connect service, you can run this command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" logs -f generated_tallycoin_connect_1\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);