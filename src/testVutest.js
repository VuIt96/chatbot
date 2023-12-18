async function init(t, e, l = "450px", s = "550px") {
    let id = await t;
    let iconLogo = null;

    const apiUrl = `https://owlee-dev.thinklabs.com.vn/api/chatbot/avatar/${id}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error(`error: ${response.status}`);
    }
    const data = await response.json();
    iconLogo = `https://owlee-dev.thinklabs.com.vn${data.uri_avatar}`;
    const img = document.createElement("img");
    img.src = `${iconLogo}`;
    img.style.width = "53px";
    img.style.height = "53px";
    img.style.padding = "4px";
    img.style.backgroundColor = "#3075FF";
    img.style.borderRadius = "50%";

    let i = `https://owlee-dev.thinklabs.com.vn/chatbot-iframe/${id}`,
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
        (r.appendChild(img)),
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
                (r.appendChild(img)))
            : (($.style.display = "block"),
                setTimeout(() => {
                    $.style.opacity = "1";
                }, 0),
                (a = !0),
                (r.innerHTML =
                    '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="44" height="44" rx="22" fill="#111043"/> <path d="M36.4729 22.6999C36.4729 28.8999 29.8729 35.6998 21.7729 35.6998C13.6729 35.6998 7.07288 28.8999 7.07288 22.6999C7.07288 16.4999 13.6729 12.0999 21.7729 12.0999C29.8729 12.0999 36.4729 16.4999 36.4729 22.6999Z" fill="#3F459B"/> <path d="M35.3728 14.2998C35.3728 14.2998 34.1728 17.0998 29.3728 16.6998C25.2728 16.3998 22.8728 17.8998 21.6728 20.1998C20.5728 17.8998 18.1728 16.2998 13.9728 16.6998C9.27282 17.0998 7.97282 14.2998 7.97282 14.2998C3.27282 21.4998 7.47281 30.3998 15.2728 30.2998C19.0728 30.2998 20.7728 28.3998 21.5728 26.7998C22.3728 28.4998 24.0728 30.2998 27.8728 30.2998C35.7728 30.4998 40.0728 21.4998 35.3728 14.2998Z" fill="#32C3F2"/> <path d="M21.5728 25C22.2728 21.8 20.3728 18.5999 17.1728 17.7999C13.9728 16.9999 10.7728 18.9999 9.97281 22.1999C9.27281 25.3999 11.1728 28.5999 14.3728 29.3999C17.5728 30.1999 20.8728 28.2 21.5728 25Z" fill="white"/> <path d="M21.7728 23.5999C21.7728 26.8999 24.3728 29.5999 27.7728 29.5999C31.1728 29.5999 33.7728 26.9999 33.7728 23.5999C33.7728 20.2999 31.0728 17.5999 27.7728 17.5999C24.4728 17.5999 21.7728 20.2999 21.7728 23.5999Z" fill="white"/> <path d="M15.7729 19.8999C14.7729 19.8999 13.8729 20.2999 13.1729 20.9999C13.9729 21.1999 14.5729 21.6999 14.5729 22.3999C14.5729 23.1999 13.7729 23.7999 12.6729 23.7999C12.4729 23.7999 12.2729 23.7999 12.0729 23.6999C12.0729 25.7999 13.7729 27.3999 15.7729 27.3999C17.7729 27.3999 19.4729 25.6999 19.4729 23.6999C19.4729 21.6999 17.8729 19.8999 15.7729 19.8999Z" fill="#302736"/> <path d="M27.6726 19.8999C26.6726 19.8999 25.7726 20.2999 25.0726 20.9999C25.8726 21.1999 26.4727 21.6999 26.4727 22.3999C26.4727 23.1999 25.6726 23.7999 24.5726 23.7999C24.3726 23.7999 24.1727 23.7999 23.9727 23.6999C23.9727 25.7999 25.6726 27.3999 27.6726 27.3999C29.6726 27.3999 31.3727 25.6999 31.3727 23.6999C31.3727 21.6999 29.8726 19.8999 27.6726 19.8999Z" fill="#302736"/> <path d="M12.5728 32.5999L10.9728 37.1998L24.2728 35.4998L12.5728 32.5999Z" fill="#3F459B"/> <path d="M21.3729 10C22.2014 10 22.8729 9.32843 22.8729 8.5C22.8729 7.67157 22.2014 7 21.3729 7C20.5445 7 19.8729 7.67157 19.8729 8.5C19.8729 9.32843 20.5445 10 21.3729 10Z" fill="#3F459B"/> <path d="M21.7729 9.69995H21.0729V11.7H21.7729V9.69995Z" fill="#3F459B"/> <path d="M21.3728 14.3999C23.3058 14.3999 24.8728 13.6836 24.8728 12.7999C24.8728 11.9163 23.3058 11.2 21.3728 11.2C19.4398 11.2 17.8728 11.9163 17.8728 12.7999C17.8728 13.6836 19.4398 14.3999 21.3728 14.3999Z" fill="#3F459B"/> </svg>'));
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