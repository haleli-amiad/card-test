(function(t){function e(e){for(var n,a,s=e[0],i=e[1],u=e[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(l.length)l.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(c.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},c=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=i;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},3188:function(t,e,r){t.exports=r.p+"img/tshirt3.ddfee0ab.png"},4184:function(t,e,r){t.exports=r.p+"img/pants2.acb8b3db.png"},4530:function(t,e,r){t.exports=r.p+"img/pants3.ae053ac9.png"},"569e":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("MainNavbar"),r("router-view"),r("MainFooter")],1)},c=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"main-layout"},[r("span",{staticClass:"flex center space"},[r("input",{staticClass:"menu-btn",attrs:{type:"checkbox",id:"menu-btn"}}),t._m(0),r("ul",{staticClass:"menu"},t._l(t.productTypes,(function(e,n){return r("li",{key:n},[r("router-link",{attrs:{to:"/"+e}},[t._v(t._s(e))])],1)})),0),r("span",[r("router-link",{staticClass:"cart flex center",attrs:{to:"/cart",exact:""}},[t._v(" "+t._s(t.cartLength)+" "),r("i",{staticClass:"el-icon-shopping-cart-full"})])],1)])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"menu-icon",attrs:{for:"menu-btn"}},[r("span",{staticClass:"navicon"})])}],i={name:"MainNavbar",data:function(){return{productTypes:["T-Shirts","Pants","Hoodies","Shoes","All"]}},computed:{cartLength:function(){return this.$store.getters.cartLength}}},u=i,p=r("2877"),d=Object(p["a"])(u,a,s,!1,null,null,null),l=d.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"main-layout main-footer"},[r("span",{staticClass:"flex center space"},[t._v(" (c) CoffeeRights ")])])}],g={name:"MainFooter"},h=g,y=Object(p["a"])(h,f,m,!1,null,null,null),v=y.exports,P={components:{MainNavbar:l,MainFooter:v},created:function(){this.$store.dispatch({type:"loadProducts"})}},b=P,A=Object(p["a"])(b,o,c,!1,null,null,null),C=A.exports,_=r("8c4f"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.products?r("div",{staticClass:"home main-layout"},[r("product-list",{attrs:{products:t.products}})],1):t._e()},T=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-list flex wrap center space"},t._l(t.products,(function(t){return r("ProductsPreview",{key:t._id,attrs:{product:t}})})),1)},w=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.product?n("li",{staticClass:"product-preview pointer col space flex",on:{click:t.getProductDetail}},[n("span",{staticClass:"img-container"},[n("img",{staticClass:"product-img",attrs:{src:r("b967")("./"+t.product.imgName+".png"),alt:"product-image"}}),n("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),t.addToCart(t.product._id)}}},[n("i",{staticClass:"el-icon-shopping-cart-full"})])]),n("span",{staticClass:"desc-container flex space center"},[n("h3",[t._v(t._s(t.product.title))]),n("p",[t._v("€"+t._s(t.product.price))])])]):t._e()},N=[],S={name:"ProductPreview",props:{product:Object},created:function(){},methods:{addToCart:function(t){this.$store.commit({type:"addProduct",productId:t})},getProductDetail:function(){this.$router.push("/product/".concat(this.product._id))}}},j=S,q=Object(p["a"])(j,O,N,!1,null,null,null),E=q.exports,J={name:"ProductsList",components:{ProductsPreview:E},props:{products:Array},data:function(){return{productsCopy:null}},created:function(){this.productsCopy=this.products}},M=J,R=Object(p["a"])(M,k,w,!1,null,null,null),X=R.exports,H={name:"Home",components:{ProductList:X},created:function(){var t=this.$route.params.productType||null;this.$store.commit({type:"setProductType",productType:t})},watch:{"$route.params.productType":{handler:function(t){var e=t;this.$store.commit({type:"setProductType",productType:e})},deep:!0,immediate:!0}},computed:{products:function(){return this.$store.getters.products}}},z=H,B=Object(p["a"])(z,x,T,!1,null,null,null),I=B.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.product?n("section",{staticClass:"product-details main-layout"},[n("span",{staticClass:"product-container flex space col center"},[n("span",[n("img",{staticClass:"product-img",attrs:{src:r("b967")("./"+t.product.imgName+".png"),alt:"product-image"}})]),n("span",[n("h3",[t._v(t._s(t.product.title))]),n("h4",[t._v("€"+t._s(t.product.price))]),n("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),t.addToCart(t.product._id)}}},[n("i",{staticClass:"el-icon-shopping-cart-full"})])])])]):t._e()},L=[],V={computed:{product:function(){return this.$store.getters.currProduct}},methods:{addToCart:function(t){this.$store.commit({type:"addProduct",productId:t})}},created:function(){var t=this.$route.params.productId;this.$store.commit({type:"getProductById",productId:t})}},Z=V,W=Object(p["a"])(Z,D,L,!1,null,null,null),U=W.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main-layout cart"},["0.00"!==t.cartTotalAmount?n("span",{staticClass:"flex space cart-container wrap"},[t.cartProducts?n("CartList",{attrs:{cartProducts:t.cartProducts}}):t._e(),n("div",{staticClass:"payment flex center col"},[n("h3",[t._v("TOTAL €"+t._s(t.cartTotalAmount))]),n("button",[t._v("Checkout")]),n("img",{staticClass:"payment-img",attrs:{src:r("c94f"),alt:"payment-image"},on:{click:function(e){return e.stopPropagation(),t.getProductDetail(e)}}})])],1):n("div",{staticClass:"empty-cart"},[n("h1",[t._v("No products in your cart")])])])},F=[],Y=(r("b680"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.cartProducts?r("ul",{staticClass:"flex space col wrap"},t._l(t.cartProducts,(function(t){return r("CartPreview",{key:t._id,attrs:{product:t}})})),1):t._e()}),G=[],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.product?n("li",{staticClass:"cart-preview flex space center"},[n("div",{staticClass:"img-container flex center wrap"},[n("img",{staticClass:"product-img",attrs:{src:r("b967")("./"+t.product.imgName+".png"),alt:"product-image"},on:{click:function(e){return e.stopPropagation(),t.getProductDetail(e)}}}),n("span",[n("h3",[t._v(t._s(t.product.title))]),n("h4",[t._v("€"+t._s(t.product.price))])])]),n("div",{staticClass:"content-container flex column wrap"},[n("span",{staticClass:"flex center"},[n("i",{staticClass:"el-icon-remove-outline pointer",on:{click:function(e){return e.stopPropagation(),t.changeQuantity(-1,t.product._id)}}}),t._v(" "+t._s(t.product.quantity)+" "),n("i",{staticClass:"el-icon-circle-plus-outline pointer",on:{click:function(e){return e.stopPropagation(),t.changeQuantity(1,t.product._id)}}})])])]):t._e()},$=[],tt={name:"cart-preview",props:{product:Object},methods:{getProductDetail:function(){this.$router.push("/product/".concat(this.product._id))},changeQuantity:function(t,e){-1===t?this.$store.commit({type:"removeProduct",productId:e}):this.$store.commit({type:"addProduct",productId:e})}}},et=tt,rt=Object(p["a"])(et,K,$,!1,null,null,null),nt=rt.exports,ot={name:"cart-list",props:{cartProducts:Object},components:{CartPreview:nt}},ct=ot,at=Object(p["a"])(ct,Y,G,!1,null,null,null),st=at.exports,it={name:"cart",components:{CartList:st},computed:{cartProducts:function(){return this.$store.getters.cartProducts},cartTotalAmount:function(){return this.$store.getters.cartTotalAmount.toFixed(2)}}},ut=it,pt=Object(p["a"])(ut,Q,F,!1,null,null,null),dt=pt.exports;n["default"].use(_["a"]);var lt=[{path:"/cart",name:"Cart",component:dt},{path:"/:productType?",name:"Home",component:I},{path:"/product/:productId",name:"ProductDetails",component:U}],ft=new _["a"]({routes:lt}),mt=ft,gt=r("2f62"),ht=(r("4de4"),r("7db0"),r("c740"),r("caad"),r("13d5"),r("a434"),r("2532"),r("96cf"),r("1da1")),yt=r("5530"),vt=(r("d3b7"),{getProducts:bt}),Pt=[{_id:"dh53w",category:"T-Shirts",title:"Gray T-Shirt",price:5.99,imgName:"tshirt"},{_id:"ds332",category:"T-Shirts",title:"Black T-Shirt",price:6.99,imgName:"tshirt2"},{_id:"dfs32",category:"T-Shirts",title:"White T-Shirt",price:4.99,imgName:"tshirt3"},{_id:"sd542",category:"T-Shirts",title:"Red Polo",price:6.99,imgName:"tshirt4"},{_id:"d35gq",category:"T-Shirts",title:"Orange T-Shirt",price:7.99,imgName:"tshirt5"},{_id:"fd42q",category:"Pants",title:"Black Pants",price:16.99,imgName:"pants"},{_id:"e4wscf",category:"Pants",title:"Beige Pants",price:19.99,imgName:"pants2"},{_id:"sdfe3q",category:"Pants",title:"White Pants",price:21.99,imgName:"pants3"},{_id:"53faf",category:"Pants",title:"Ripped Jeans",price:14.99,imgName:"pants4"},{_id:"jkue4",category:"Shoes",title:"Adidas Black Shoes",price:49.99,imgName:"shoes"},{_id:"dsf42",category:"Shoes",title:"Black Shoes",price:69.99,imgName:"shoes2"},{_id:"fw34t",category:"Shoes",title:"Nike Black Red Shoes",price:34.99,imgName:"shoes3"},{_id:"ge4s",category:"Shoes",title:"Adidas Purple Shoes",price:44.99,imgName:"shoes4"},{_id:"f4wds",category:"Hoodies",title:"Orange Cotton Hoodie",price:12.99,imgName:"hoodie"},{_id:"4gfd",category:"Hoodies",title:"Black Cotton Hoodie",price:16.99,imgName:"hoodie2"},{_id:"f4hd4",category:"Hoodies",title:"Gray Cotton Hoodie",price:19.99,imgName:"hoodie3"}];function bt(){return Promise.resolve(Pt)}var At={state:{products:null,cartProducts:[],currProduct:null,currProductType:null,productsToShow:null},getters:{currProduct:function(t){return t.currProduct},products:function(t){return t.currProductType?t.productsToShow:t.products},cartProducts:function(t){var e=t.cartProducts.reduce((function(t,e){return t[e._id]||(t[e._id]=Object(yt["a"])(Object(yt["a"])({},e),{},{quantity:0})),t[e._id].quantity++,t}),{});return e},cartLength:function(t){return t.cartProducts.length},cartTotalAmount:function(t){var e=t.cartProducts,r=e.reduce((function(t,e){return t+=e.price,t}),0);return r}},mutations:{setProducts:function(t,e){var r=e.products;t.products=r},removeProduct:function(t,e){var r=e.productId,n=t.cartProducts.findIndex((function(t){return t._id===r}));t.cartProducts.splice(n,1)},addProduct:function(t,e){var r=e.productId,n=t.products.find((function(t){return t._id===r}));t.cartProducts.unshift(n)},getProductById:function(t,e){var r=e.productId,n=t.products.find((function(t){return t._id===r}));t.currProduct=n},setProductType:function(t,e){var r=e.productType;if("All"!==r&&r&&t.products){t.currProductType=r;var n=t.products.filter((function(e){return e.category.includes(t.currProductType)}));t.productsToShow=n}else t.currProductType=null}},actions:{loadProducts:function(t){return Object(ht["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,vt.getProducts();case 3:return n=e.sent,r({type:"setProducts",products:n}),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))()}}};n["default"].use(gt["a"]);var Ct=new gt["a"].Store({strict:!0,modules:{productsStore:At}}),_t=(r("569e"),r("5c96")),xt=r.n(_t);r("0fae");n["default"].use(xt.a),n["default"].config.productionTip=!1,new n["default"]({router:mt,store:Ct,render:function(t){return t(C)}}).$mount("#app")},"5a8a":function(t,e,r){t.exports=r.p+"img/shoes2.4acbbc4f.png"},"5da2":function(t,e,r){t.exports=r.p+"img/tshirt4.016ae05b.png"},"78d5":function(t,e,r){t.exports=r.p+"img/pants4.602c7baa.png"},"7eca":function(t,e,r){t.exports=r.p+"img/shoes4.437b8c48.png"},9546:function(t,e,r){t.exports=r.p+"img/hoodie2.47e7d7c1.png"},a71c:function(t,e,r){t.exports=r.p+"img/tshirt5.f43d7a1e.png"},a7c3:function(t,e,r){t.exports=r.p+"img/shoes.f8e43414.png"},ab92:function(t,e,r){t.exports=r.p+"img/hoodie.590f369d.png"},ad12:function(t,e,r){t.exports=r.p+"img/tshirt.80922472.png"},b967:function(t,e,r){var n={"./cart.png":"dcde","./hoodie.png":"ab92","./hoodie2.png":"9546","./hoodie3.png":"fe3e","./pants.png":"d796","./pants2.png":"4184","./pants3.png":"4530","./pants4.png":"78d5","./payment.png":"c94f","./shoes.png":"a7c3","./shoes2.png":"5a8a","./shoes3.png":"c809","./shoes4.png":"7eca","./tshirt.png":"ad12","./tshirt2.png":"da87","./tshirt3.png":"3188","./tshirt4.png":"5da2","./tshirt5.png":"a71c"};function o(t){var e=c(t);return r(e)}function c(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=c,t.exports=o,o.id="b967"},c809:function(t,e,r){t.exports=r.p+"img/shoes3.f08ec124.png"},c94f:function(t,e,r){t.exports=r.p+"img/payment.4aed467b.png"},d796:function(t,e,r){t.exports=r.p+"img/pants.f5620029.png"},da87:function(t,e,r){t.exports=r.p+"img/tshirt2.47d4a4a2.png"},dcde:function(t,e){t.exports="data:image/png;base64,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"},fe3e:function(t,e,r){t.exports=r.p+"img/hoodie3.f75ea1c0.png"}});
//# sourceMappingURL=app.99c439d1.js.map