"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// d_10_get_json.js
var dataUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=7YYhF9nmsHReDF1Fn_ETxTx1cxn5p1q0UZj9V3MRkZDmZMNlYNcczPjIUVjftvOfDfjcJhYRsq5kUH2Qz-ecwbeL6PXmTf2Qm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFfPkAcxwOkJEKaxbkjBguRbKkIdS7NEGz1VMq5i73SXsxhF6jP9DfooMruKBxdce8U2Utz-tggCDwfE3q4AHRUKLruRGYBrzQ&lib=M4I3G_XGFO-Tc5ro_jk_UfTLLej44tFPd';
fetch(dataUrl).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
});