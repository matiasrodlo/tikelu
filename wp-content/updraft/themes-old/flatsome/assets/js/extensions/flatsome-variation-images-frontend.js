!function(e){var t={};function a(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(i,o,function(t){return e[t]}.bind(null,o));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=7)}({0:function(e,t,a){a.p=window.flatsomeVars?window.flatsomeVars.assets_url:"/"},7:function(e,t,a){a(0),e.exports=a(8)},8:function(e,t){!function(e){const t={message:null,overlayCSS:{background:"#fff",opacity:.6,cursor:"wait"},fadeIn:10,fadeOut:400,showOverlay:!1},a={message:null,overlayCSS:{background:"#fff",opacity:1,cursor:"wait"},fadeIn:10,fadeOut:100,showOverlay:!1};e.fn.flatsomeVariationImages=function(){return this.each((function(){const i=e(this);if(i.hasClass("ux-variation-images-js-attached"))return;const o=i.closest(".product"),n=jQuery(".product-gallery-slider",o),r=jQuery(".product-thumbnails",o),l=n.hasClass("product-gallery-stacked");let s=0,d=!1,c={};const f=e.Deferred(),u=e.Deferred();n.one("flatsome-flickity-ready",()=>f.resolve()),r.one("flatsome-flickity-ready",()=>u.resolve()),r.length&&!r.is(":hidden")||u.resolve();const m=e.when(f,u).then(()=>{var e;e=o,d||(c[0]={promise:null,data:{uniqueMainImage:!0,images:e.find(".product-gallery-slider .flickity-slider > *"),thumbs:e.find(".product-thumbnails .flickity-slider > *")}},d=!0),n.on("select.flickity",(e,t)=>{s=t}),i.on("click",".reset_variations",()=>{g(0)}),i.on("hide_variation",()=>{g(0)})});function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!o.length)return;let i=o.attr("data-gallery-variation-id");if("undefined"===i&&(i=0,o.attr("data-gallery-variation-id",i)),parseInt(i)===e)return;if(o.attr("data-gallery-variation-id",e),0===e)return p(c[e]),void r.removeClass("ux-additional-variation-images-thumbs-placeholder--visible");const n=y(e,()=>{o.find(".product-gallery-slider").block(t),o.find(".product-thumbnails, .vertical-thumbnails").block(a)});n.then(()=>{p(c[e])}),n.always(()=>{o.find(".product-gallery-slider").unblock(),o.find(".product-thumbnails, .vertical-thumbnails").unblock()})}function p(t){let{data:{uniqueMainImage:a,images:i,thumbs:d}}=t;!a&&i.slice(1).length<1?g(0):(n.find(".flickity-page-dots").fadeToggle(10),n.flickity("remove",n.find(".flickity-slider > *:not(:first)")),e.each(i.slice(1),(t,a)=>{n.flickity("append",e(a))}),r.data("flickity")&&(r.flickity("remove",r.find(".flickity-slider > *:not(:first)")),e.each(d.slice(1),(t,a)=>{r.flickity("append",e(a))}),r.toggleClass("ux-additional-variation-images-thumbs-placeholder--visible",d.slice(1).length>0&&r.hasClass("ux-additional-variation-images-thumbs-placeholder"))),o.imagesLoaded(()=>{s<=i.length-1?n.flickity("select",s):n.flickity("select",0),d.length>4?r.removeClass("slider-no-arrows"):r.addClass("slider-no-arrows"),n.find(".flickity-page-dots").fadeToggle(400),jQuery(document).trigger("flatsome-product-gallery-tools-init"),l&&jQuery(document).trigger("flatsome-sticky-sidebar-update-sticky"),"undefined"!=typeof PhotoSwipe&&"undefined"!=typeof wc_single_product_params&&e(".woocommerce-product-gallery").off("click").off("click.flatsome").on("click.flatsome",".woocommerce-product-gallery__image a",h)}))}function y(t,a){const i=e.Deferred(a);if(c[t]&&"resolved"===c[t].promise.state())return i.resolve(t,c[t].data);if(!c[t]||"rejected"===c[t].promise.state()){const a=function(t){return e.post(flatsome_variation_images_frontend.ajaxurl,{action:"flatsome_additional_variation_images_load_images_ajax_frontend",nonce:flatsome_variation_images_frontend.nonce.load_images,variation_id:t})}(t);c[t]={promise:a,data:null}}return e.when(c[t].promise).then(e=>{c[t].data=e.data||null,i.resolve(t,c[t].data)},()=>{i.reject()}),i.promise()}function h(t){t.preventDefault();const a=e(".pswp")[0],i=function(){const t=n.find(".flickity-slider > *");let a=[];return t.length>0&&t.each((function(t,i){var o=e(i).find("img");if(o.length){const e=o.attr("data-large_image"),t=o.attr("data-large_image_width"),i=o.attr("data-large_image_height"),n={alt:o.attr("alt"),src:e,w:t,h:i,title:o.attr("data-caption")?o.attr("data-caption"):o.attr("title")};a.push(n)}})),a}(),o=e(t.target);let r;r=o.is(".woocommerce-product-gallery__trigger")||o.is(".woocommerce-product-gallery__trigger img")?this.$target.find(".flex-active-slide"):o.closest(".woocommerce-product-gallery__image");const l=e.extend({index:e(r).index(),addCaptionHTMLFn:function(e,t){return e.title?(t.children[0].textContent=e.title,!0):(t.children[0].textContent="",!1)}},wc_single_product_params.photoswipe_options);new PhotoSwipe(a,PhotoSwipeUI_Default,i,l).init()}i.on("found_variation",(t,a)=>{"resolved"!==m.state()?e.when(m).done(()=>{g(parseInt(a.variation_id))}):g(parseInt(a.variation_id))}),i.addClass("ux-variation-images-js-attached")}))},e((function(){e(".variations_form").flatsomeVariationImages(),e(document).on("wc_variation_form",(function(){e(".variations_form").flatsomeVariationImages()})),e(document).ajaxComplete((function(){setTimeout(()=>{e(".variations_form").flatsomeVariationImages()},100)}))}))}(jQuery)}});