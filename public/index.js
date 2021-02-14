const banner = document.getElementsByClassName("banner")[0];

function changeBannerBackground() {
    if (banner.style.backgroundImage !== 'url("./pexels-tranmautritam-251225.jpg")')
        banner.style.backgroundImage = 'url("./pexels-tranmautritam-251225.jpg")';
    else {
        banner.style.backgroundImage = "url('./pexels-tranmautritam-326503.jpg')";
    }
}

setInterval(changeBannerBackground, 5000);

const userArgentIsChrome = () => {
    return navigator.userAgent.indexOf("Chrome") !== -1
}

function imgOrientationForChromeBrowsers() {
    if (userArgentIsChrome()) {
        let els = Array.from(document.getElementsByTagName("img"));
        for (const el of els) {
            el.className = "profile-pic rotate90";
        }
    }
}

imgOrientationForChromeBrowsers()


// Remove button for a navbar

function navRemove() {
    let rmBtn = document.getElementById("rm-nav");
    rmBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let navBar = document.getElementsByClassName("nav-container")[0];
        navBar.remove();
    })
}

navRemove()