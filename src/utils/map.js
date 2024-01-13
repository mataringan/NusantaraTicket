export function Map(src) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(src, "text/html");
    const iframesrc = doc.querySelector("iframe").getAttribute("src");

    return iframesrc;
}
