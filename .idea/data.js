async function init(t, e, l = "450px", s = "550px", iconLogo) {
    const keyframesStyle = document.createElement("style");
    keyframesStyle.textContent = `
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

    document.head.appendChild(keyframesStyle);

    // Id bot
    let id = await t;

    const apiUrl = `https://owlee-dev.thinklabs.com.vn/chatbot-iframe/${id}`;
    async function fetchData() {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            return data.isPublic;
        } catch (error) {
            console.error(error);
        }
    }

    async function CheckPublicBot() {
        const check = await fetchData();

        if (check === true) {
            let i = `https://gptsalebot.com/chat-app/${id ? id : null}`,
                r = document.createElement("div");
            r.className = "box-chat-embed";
            r.style.position = "fixed";
            r.style.bottom = "20px";
            r.style.right = "20px";
            r.style.borderRadius = "50%";
            r.style.color = "#fff";
            r.style.display = "flex";
            r.style.justifyContent = "center";
            r.style.alignItems = "center";
            r.style.cursor = "pointer";
            r.style.zIndex = "99999";

            const imageUrl = document.createElement("img");
            //css imageUrl

            imageUrl.src = `${
                iconLogo
                    ? iconLogo
                    : "https://mindmaid.ai/banner/avatar/Bot-taÌch-neÌ‚Ì€n-.gif"
            }`;

            imageUrl.style.width = "65px";
            imageUrl.style.backgroundColor = "#3075FF";
            imageUrl.style.borderRadius = "50%";

            // imageUrl.style.height = "fill";

            const greetingBox = document.createElement("div");

            greetingBox.style.background = e;
            greetingBox.className = "greetingBox";
            greetingBox.style.borderRadius = "10px 10px 10px 0px";
            greetingBox.style.maxWidth = "140px";
            greetingBox.style.position = "relative";
            greetingBox.style.padding = "6px 10px";

            const greetingText = document.createElement("p");

            greetingText.className = "greetingText";
            // greetingText.textContent = "Chat ngay";
            greetingText.style.color = "white";
            greetingText.style.fontSize = "15px";
            greetingText.style.fontWeight = "600";
            greetingText.style.marginBlockEnd = "0";
            greetingText.style.marginBlockStart = "0";
            greetingText.style.whiteSpace = "nowrap";
            greetingText.style.fontStyle = "italic";
            greetingText.style.marginTop = "3px";

            //css icon box
            const iconBox = document.createElement("div");
            iconBox.innerHTML = `<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector26" d="M0 22V0.5L14 8L0 22Z" fill="${e}" /></svg>`;

            const boxIcon = document.createElement("div");
            boxIcon.style.display = "flex";

            //css iconBox
            iconBox.style.position = "absolute";
            iconBox.style.left = "0";
            iconBox.style.bottom = "-13px";

            const iconHand = document.createElement("img");
            // css iconHand
            iconHand.src =
                "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif";
            iconHand.style.width = "20px";
            iconHand.style.height = "20px";
            iconHand.style.marginLeft = "10px";

            boxIcon.appendChild(greetingText);
            boxIcon.appendChild(iconHand);

            r.appendChild(imageUrl);

            r.style.animation = "slideInFromRight 1s ease";
            r.setAttribute("tabindex", "-1");

            let $ = document.createElement("iframe");
            ($.style.zIndex = "999"),
                ($.style.position = "fixed"),
                ($.style.bottom = "30px"),
                ($.style.right = "100px"),
                ($.style.width = l),
                ($.style.height = s),
                ($.style.border = "none"),
                ($.style.display = "none"),
                ($.style.borderRadius = "16.43px"),
                ($.style.boxShadow =
                    "0px 6.765199184417725px 12.56394100189209px -2.8993711471557617px #00000040"),
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
                        }, 10),
                        (r.style.backgroundColor = "revert"),
                        (r.style.boxShadow = "revert"),
                        (r.style.width = "revert"),
                        (r.style.height = "revert"),
                        (a = !1),
                        (r.innerHTML = ""),
                        r.appendChild(imageUrl))
                    : (($.style.display = "block"),
                        setTimeout(() => {
                            $.style.opacity = "1";
                            r.style.backgroundColor = e;
                            r.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
                            r.style.width = "60px";
                            r.style.height = "60px";
                        }, 0),
                        (a = !0),
                        (r.innerHTML =
                            '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M18 6l-12 12"></path> <path d="M6 6l12 12"></path> </svg>'));
            }),
                document.body.appendChild(r),
                document.body.appendChild($);
        } else {
            return;
        }
    }

    CheckPublicBot();
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
                ?.getAttribute("data-bubble-color") ?? "rgb(57 186 248)",
        l =
            document
                .querySelector('script[data-chat-service="Salebot"][data-chat-width]')
                ?.getAttribute("data-chat-width") ?? "450px",
        iconLogo = document
            .querySelector('script[data-chat-service="Salebot"][data-icon-logo]')
            ?.getAttribute("data-icon-logo"),
        s =
            document
                .querySelector('script[data-chat-service="Salebot"][data-chat-height]')
                ?.getAttribute("data-chat-height") ?? "550px";
    ready(() => init(t, e, l, s, iconLogo));
})();
