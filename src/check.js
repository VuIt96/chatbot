async function init(t, e, l = "423px", s = "643px") {
  const keyframesStyle = document.createElement("style");
  keyframesStyle.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap');

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

  let id = await t;
  let logo_greeting = null;
  let iconLogo = null;
  let boxChat_colorWidgetBg = null;
  let requestOptions = {
	  method: 'POST',
	  body: {messages_history: []}
	};
  const apiUrl = `https://owlee-dev.thinklabs.com.vn/api/chatbot-iframe/${id}/start`;
  async function fetchData() {
    try {
      const response = await fetch(apiUrl, requestOptions);

      if (!response) {
        throw new Error(`error: ${response.status}`);
      }
      const data = await response.json();
      iconLogo = data.setting.avatar;
    } catch (error) {
      console.error("error:", error);
    }
  }

  async function CheckPublicBot() {
    const check = await fetchData();

    if (check === true) {
      let i = `https://owlee-dev.thinklabs.com.vn/chatbot-iframe/${id}`,
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

      imageUrl.src = `${
        iconLogo ? iconLogo : "https://mindmaid.ai/banner/avatar/logo.gif"
      }`;

      imageUrl.style.width = "53px";
      imageUrl.style.height = "53px";
      imageUrl.style.padding = "4px";
      imageUrl.style.backgroundColor = boxChat_colorWidgetBg
        ? boxChat_colorWidgetBg
        : "#3075FF";
      imageUrl.style.borderRadius = "50%";

      const greetingBox = document.createElement("div");

      greetingBox.style.background = "white";
      greetingBox.className = "greetingBox";
      greetingBox.style.borderRadius = "10px";
      greetingBox.style.position = "relative";
      greetingBox.style.padding = "10px";
      greetingBox.style.fill = "#FFF";
      greetingBox.style.filter =
        "drop-shadow(0px 0px 8.657718658447266px rgba(0, 0, 0, 0.15))";
      greetingBox.style.strokeWidth = "#1.443px";
      greetingBox.style.stroke = "#FFF";
      greetingBox.style.marginTop = "-115px";
      greetingBox.style.marginRight = "-29px";
      greetingBox.style.display = window.innerWidth <= 500 ? "none" : "block";
      if (!logo_greeting) {
        greetingBox.style.display = "none";
      }
      const greetingText = document.createElement("p");

      greetingText.className = "greetingText";
      greetingText.textContent = "";
      greetingText.style.color = "#000000";
      greetingText.style.fontSize = "15px";
      greetingText.style.fontWeight = "600";
      greetingText.style.marginBlockEnd = "0";
      greetingText.style.marginBlockStart = "0";
      greetingText.style.whiteSpace = "nowrap";
      greetingText.style.padding = "5px";
      greetingText.style.fontFamily = "Inter, sans-serif";

      const iconBox = document.createElement("div");
      iconBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 30" fill="none">
  <circle cx="8.97684" cy="9.51713" r="8.73563" fill="white"/>
  <circle cx="19.8961" cy="24.8046" r="4.36782" fill="white"/>
</svg>`;

      const boxIcon = document.createElement("div");
      boxIcon.style.display = "flex";

      iconBox.style.position = "absolute";
      iconBox.style.right = "15px";
      iconBox.style.bottom = "-24px";

      const iconHand = document.createElement("img");

      boxIcon.appendChild(greetingText);
      boxIcon.appendChild(iconHand);

      greetingBox.appendChild(iconBox);
      greetingBox.appendChild(boxIcon);

      r.appendChild(greetingBox);
      r.appendChild(imageUrl);

      r.style.animation = "slideInFromRight 1s ease";
      r.setAttribute("tabindex", "-1");

      const checkMobile = window.innerWidth;
      const iframeContainer = document.createElement("div");
      (iframeContainer.style.zIndex = "99999"),
        (iframeContainer.style.position = "fixed"),
        (iframeContainer.style.bottom = checkMobile <= 520 ? "100px" : "60px"),
        (iframeContainer.style.right =
          checkMobile <= 399
            ? "10px"
            : checkMobile <= 520 && checkMobile >= 400
            ? "25px"
            : "85px"),
        (iframeContainer.style.width = l),
        (iframeContainer.style.height = s),
        (iframeContainer.style.border = "none"),
        (iframeContainer.style.display = "none"),
        (iframeContainer.style.borderRadius = "16.43px"),
        (iframeContainer.style.boxShadow =
          "0px 6.765199184417725px 12.56394100189209px -2.8993711471557617px #00000040"),
        (iframeContainer.style.opacity = "0"),
        (iframeContainer.style.transition = "opacity 0.2s ease-in-out"),
        (iframeContainer.style.userSelect = "none"),
        (iframeContainer.style.maxHeight = "73vh"),
        (iframeContainer.style.maxWidth = checkMobile <= 399 ? "94vw" : "90vw"),
        iframeContainer.style.setProperty("-moz-user-select", "none"),
        iframeContainer.style.setProperty("-webkit-user-select", "none"),
        iframeContainer.style.setProperty("-khtml-user-select", "none");

      let $ = document.createElement("iframe");

      ($.style.borderRadius = "16.43px"),
        ($.style.border = "none"),
        ($.style.zIndex = "99999999999"),
        ($.style.width = "100%"),
        ($.style.height = "100%"),
        $.style.setProperty("-moz-user-select", "none"),
        $.style.setProperty("-webkit-user-select", "none"),
        $.style.setProperty("-khtml-user-select", "none"),
        ($.src = i);

      const zoomInButton = document.createElement("button");
      zoomInButton.innerHTML = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 3H21M21 3V9M21 3L14 10M9 21H3M3 21V15M3 21L10 14"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `;

      zoomInButton.style.fontSize = "16px";
      zoomInButton.style.marginRight = "10px";
      zoomInButton.style.position = "absolute";
      zoomInButton.style.right = "0";
      zoomInButton.style.top = "15px";
      zoomInButton.style.background = "transparent";
      zoomInButton.style.display = "block";
      zoomInButton.style.border = "none";

      zoomInButton.addEventListener("click", () => {
        iframeContainer.style.width = "100%";
        iframeContainer.style.height = "100%";
        iframeContainer.style.maxHeight = "100vh";
        iframeContainer.style.maxWidth = "100vw";
        iframeContainer.style.maxWidth = "100vw";
        iframeContainer.style.borderRadius = "0";
        iframeContainer.style.top = "0";
        iframeContainer.style.left = "0";
        zoomInButton.style.display = "none";
        zoomOutButton.style.display = "block";
        $.style.borderRadius = "0";
        r.style.display = "none";
      });

      const zoomOutButton = document.createElement("button");
      zoomOutButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M18 6l-12 12"></path> <path d="M6 6l12 12"></path> </svg>`;
      zoomOutButton.style.fontSize = "16px";
      zoomOutButton.style.marginRight = "10px";
      zoomOutButton.style.position = "absolute";
      zoomOutButton.style.right = "0";
      zoomOutButton.style.top = "15px";
      zoomOutButton.style.background = "transparent";
      zoomOutButton.style.border = "none";
      zoomOutButton.style.color = "white";
      zoomOutButton.style.display = "none";

      zoomOutButton.addEventListener("click", () => {
        iframeContainer.style.width = l;
        iframeContainer.style.height = s;
        iframeContainer.style.left = "revert";
        iframeContainer.style.top = "revert";

        iframeContainer.style.bottom =
          window.innerWidth <= 520 ? "100px" : "60px";
        iframeContainer.style.right =
          window.innerWidth <= 399
            ? "10px"
            : window.innerWidth <= 520 && window.innerWidth >= 400
            ? "25px"
            : "85px";
        iframeContainer.style.maxHeight = "73vh";
        iframeContainer.style.maxWidth =
          window.innerWidth <= 399 ? "94vw" : "90vw";

        $.style.borderRadius = "16.43px";
        r.style.display = "flex";
        zoomInButton.style.display = "block";
        zoomOutButton.style.display = "none";
      });
      ///

      iframeContainer.appendChild($);
      iframeContainer.appendChild(zoomInButton);
      iframeContainer.appendChild(zoomOutButton);

      let a = !1;
      r.addEventListener("click", () => {
        a
          ? ((iframeContainer.style.opacity = "0"),
            setTimeout(() => {
              iframeContainer.style.display = "none";
            }, 10),
            (r.style.backgroundColor = "revert"),
            (r.style.boxShadow = "revert"),
            (r.style.width = "revert"),
            (r.style.height = "revert"),
            (a = !1),
            (r.innerHTML = ""),
            r.appendChild(greetingBox),
            r.appendChild(imageUrl))
          : ((iframeContainer.style.display = "block"),
            setTimeout(() => {
              iframeContainer.style.opacity = "1";
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
        document.body.appendChild(iframeContainer);
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
    s =
      document
        .querySelector('script[data-chat-service="Salebot"][data-chat-height]')
        ?.getAttribute("data-chat-height") ?? "550px";
  ready(() => init(t, e, l, s));
})();
