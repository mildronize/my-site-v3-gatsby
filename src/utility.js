import config from "../data/SiteConfig";

var image_src_regex = /<img[^>]+src="([^">]+)"/ig;

export function getImageCdnUrl(imageUrl){
    return "https://"+config.cloudimg_io_token+".cloudimg.io/cdn/n/x/"+imageUrl;
}

export function getImageCdnThumbnailUrl(imageUrl){
    // Read more api: https://docs.cloudimage.io/go/cloudimage-documentation/en/operations/
    return "https://"+config.cloudimg_io_token+".cloudimg.io/width/300/q80/"+imageUrl;
}

export function htmlImagesToCdn(htmlContent){
    var matches = [];
    while (matches = image_src_regex.exec(htmlContent)) {
        htmlContent = htmlContent.replace(matches[1], getImageCdnUrl(matches[1]));
    }
    return htmlContent;
}

export function getImageUrlFromHtml(htmlContent){
    var matches = [];
    var match;
    while (match = image_src_regex.exec(htmlContent)) {
        matches.push(match[1]);
        console.log(match[1]);
    }
    if(matches.length > 0)
        return matches[0];
}
    