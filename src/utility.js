import config from "../data/SiteConfig";

(function(global) {
    'use strict';

    var getImageCdnUrl= function(image_url){
        return "https://"+config.cloudimg_io_token+".cloudimg.io/cdn/n/x/"+image_url;
    }

    module.exports = getImageCdnUrl;
    // if (typeof define === 'function' && define.amd) {
    //     define(function () {
    //       return getImageCdnUrl;
    //     });
    // } else if (typeof exports === 'object') {
    //     module.exports = getImageCdnUrl;
    // } else {
    //     global.getImageCdnUrl = getImageCdnUrl;
    // }
})(this);
