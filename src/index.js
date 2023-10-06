async function init(t, e, l = "450px", s = "550px") {
    let id = await t;

    let i = `http://localhost:3001`,
        o =
            '<svg width="40" height="" viewBox="0 0 152 103" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M152 54.847V66.162C152 69.9021 148.978 72.9203 145.263 72.9203H144.287C143.111 89.301 129.543 102.249 112.977 102.249H108.686V87.3126C119.773 86.1645 128.415 76.7314 128.415 65.2743V57.4154C128.415 45.1772 118.562 35.2588 106.405 35.2588H45.1838C33.0149 35.2588 23.1504 45.1772 23.1504 57.4154V65.2743C23.1504 77.5126 33.0031 87.4309 45.1838 87.4309H93.9889L108.697 102.249H39.0229C22.4332 102.249 8.88861 89.301 7.71287 72.9203H6.73701C3.02166 72.9203 0 69.9021 0 66.162V54.847C0 51.1069 3.02166 48.0651 6.73701 48.0651H7.87748C9.84097 32.4892 23.021 20.4285 39.0347 20.4285H112.989C129.002 20.4285 142.183 32.501 144.146 48.0651H145.287C148.99 48.0769 152 51.1069 152 54.847Z" fill="white"/><path d="M60.5311 63.0573C61.4667 59.0686 59.0131 55.0716 55.0509 54.1298C51.0886 53.1879 47.1181 55.6579 46.1825 59.6466C45.2469 63.6352 47.7005 67.6322 51.6627 68.5741C55.625 69.5159 59.5955 67.046 60.5311 63.0573Z" fill="white"/><path d="M101.551 68.1996C105.313 66.6311 107.099 62.2899 105.541 58.5033C103.983 54.7167 99.6704 52.9185 95.9088 54.487C92.1473 56.0555 90.361 60.3967 91.9191 64.1834C93.4773 67.97 97.7897 69.7681 101.551 68.1996Z" fill="white"/><path d="M75.7882 15.6943C80.0934 15.6943 83.5834 12.181 83.5834 7.84713C83.5834 3.51328 80.0934 0 75.7882 0C71.4831 0 67.993 3.51328 67.993 7.84713C67.993 12.181 71.4831 15.6943 75.7882 15.6943Z" fill="white"/><path d="M77.6342 13.5638H73.9541V23.5414H77.6342V13.5638Z" fill="white"/></svg>';
    r = document.createElement("div");
    (r.style.position = "fixed"),
        (r.style.bottom = "20px"),
        (r.style.right = "20px"),
        (r.style.width = "60px"),
        (r.style.height = "60px"),
        (r.style.backgroundColor = e),
        (r.style.borderRadius = "50%"),
        (r.style.color = "#fff"),
        (r.style.display = "flex"),
        (r.style.justifyContent = "center"),
        (r.style.alignItems = "center"),
        (r.style.cursor = "pointer"),
        (r.style.zIndex = "99999"),
        (r.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"),
        (r.innerHTML = o),
        r.setAttribute("tabindex", "-1");

    let $ = document.createElement("iframe");
    ($.style.zIndex = "999"),
        ($.style.position = "fixed"),
        ($.style.bottom = "100px"),
        ($.style.right = "20px"),
        ($.style.width = l),
        ($.style.height = s),
        ($.style.border = "1px solid #ffffff00"),
        ($.style.display = "none"),
        ($.style.borderRadius = "10px"),
        ($.style.boxShadow =
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"),
        ($.style.opacity = "0"),
        ($.style.transition = "opacity 0.2s ease-in-out"),
        ($.style.userSelect = "none"),
        ($.style.maxHeight = "73vh"),
        ($.style.maxWidth = "90vw"),
        $.style.setProperty("-moz-user-select", "none"),
        $.style.setProperty("-webkit-user-select", "none"),
        $.style.setProperty("-khtml-user-select", "none"),
        ($.src = i);
    let a = !1;
    r.addEventListener("click", () => {
        a
            ? (($.style.opacity = "0"),
                setTimeout(() => {
                    $.style.display = "none";
                }, 200),
                (a = !1),
                (r.innerHTML = o))
            : (($.style.display = "block"),
                setTimeout(() => {
                    $.style.opacity = "1";
                }, 0),
                (a = !0),
                (r.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M18 6l-12 12"></path> <path d="M6 6l12 12"></path> </svg>'));
    }),
        document.body.appendChild(r),
        document.body.appendChild($);
}
function ready(t) {
    if ("loading" !== document.readyState) {
        t();
        return;
    }
    document.addEventListener("DOMContentLoaded", t);
}
!(function () {
    let t = document
            .querySelector('script[data-chat-service="Salebot"][data-bot-id]')
            .getAttribute("data-bot-id"),
        e =
            document
                .querySelector('script[data-chat-service="Salebot"][data-bubble-color]')
                .getAttribute("data-bubble-color"),
        l =
            document
                .querySelector('script[data-chat-service="Salebot"][data-chat-width]')
                .getAttribute("data-chat-width"),
        s =
            document
                .querySelector('script[data-chat-service="Salebot"][data-chat-height]')
                .getAttribute("data-chat-height");
    ready(() => init(t, e, l, s));
})();