let links = document.querySelectorAll(".container .left-Li ul li a:not(.logo, .home, .TW)");

links.forEach((ele) => {
    ele.addEventListener("click", () => {
        links.forEach((e) => {
            e.classList.remove("active");
            e.firstElementChild.classList.add("fa-regular")
            e.firstElementChild.classList.remove("fa-solid");
        })
        ele.classList.add("active");
        if (ele.firstElementChild.classList.contains("fa-regular")) {
            ele.firstElementChild.classList.remove("fa-regular")
            ele.firstElementChild.classList.add("fa-solid")
        }
    })
})


let profile = document.querySelector(".container .left-Li .profile");
let list = document.querySelector(".container .left-Li .profile .list");


profile.addEventListener("click", () => {
    list.classList.toggle("show");
});




let headerBTNS = document.querySelectorAll(".center .header .buttons button");


headerBTNS.forEach((ele) => {
    ele.addEventListener("click", () => {
        headerBTNS.forEach((e) => {
            e.classList.remove("active")
        })
        ele.classList.add("active")
    })
})

let tweetINP = document.querySelector(".center .tweet .massage input");
let tweetBtn = document.querySelector(".center .tweet .TWE .tweetBtn button");

tweetINP.addEventListener("input", () => {
    if (tweetINP.value !== "") {
        tweetBtn.classList.add("active");
    } else {
        tweetBtn.classList.remove("active");
    }
})

let HidetextLinks = document.querySelectorAll(".container .left-Li ul li a:not(.logo) span");
let cerClass = document.querySelectorAll(".container .left-Li ul li a");



function sThan() {
    cerClass.forEach((ele) => {
        ele.classList.add("cer-only");
    })
    HidetextLinks.forEach((e) => {
        e.style.display = "none";
    })
}


function lThan() {
    cerClass.forEach((ele) => {
        ele.classList.remove("cer-only");
    })
    HidetextLinks.forEach((e) => {
        e.style.display = "inline";
    })
}
if (window.innerWidth < 1299) {
    sThan()
} else {
    lThan()
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 1299) {
        sThan()
    } else {
        lThan()
    }
});


let likes = document.querySelectorAll(".center .Tweeta .con .likes");
let heart = document.querySelectorAll(".center .Tweeta .con .likes i")



likes.forEach((e) => {
    e.addEventListener("click", () => {
        e.classList.toggle("likeCld");
        if (e.firstElementChild.classList.contains("fa-regular")) {
            localStorage.setItem("test", e.firstElementChild.classList.toggle("fa-solid"));
        }

    })
    if (localStorage.getItem("test") === "true") {
        e.classList.add("likeCld");
        e.firstElementChild.classList.add("fa-solid");
    }
})



let conImg = document.querySelectorAll(".container .center .Tweeta .con > img");
let Show = document.querySelector(".center .Tweeta .con .showImg");
let imgClose = document.querySelector(".center .Tweeta .con .showImg i");
let ShowIMG = document.querySelector(".center .Tweeta .con .showImg img ");



conImg.forEach((e) => {
    e.addEventListener("click", () => {
        let src = e.getAttribute("src")
        Show.style.display = "flex";
        ShowIMG.setAttribute("src", src)
    });
})

imgClose.addEventListener("click", () => {
    Show.style.display = "none";
});



let searchInp = document.querySelector(".right .search input");
let removeCharactersBtn = document.querySelector(".right .search .fa-x");


searchInp.addEventListener("input", () => {
    if (searchInp.value !== "") {
        removeCharactersBtn.style.display = "block";
    } else {
        removeCharactersBtn.style.display = "none";
    }
})
removeCharactersBtn.addEventListener("click", () => {
    searchInp.value = "";
});








let Acc = document.querySelectorAll(".search .accounts .acc");
let clearAll = document.querySelector(".search .recent .title span");
let massage = document.querySelector(".search .recent>.massage")
let Title = document.querySelector(".search .recent .title")

clearAll.addEventListener("click", () => {
    Acc.forEach((e) => {
        e.remove()
        massage.style.display = "block";
        Title.style.display = "none";
    })
})



let accounts = document.querySelectorAll(".search .accounts")
let delAcc = document.querySelectorAll(".search .accounts .acc .del");


delAcc.forEach((e) => {
    e.addEventListener("click", () => {
        accounts.forEach((e) => {
            let child = e.children;
            if (child.length === 1) {
                massage.style.display = "block";
                Title.style.display = "none";
            }
        })
        e.parentElement.remove();
    })
});


let recent = document.querySelector(".container .right .search .recent");
let recentClose = document.querySelectorAll(".container .right .search .recent .close");
let recentSearch = document.querySelector(".right .search input");



recentSearch.addEventListener("focus", () => {
    recent.classList.add("D-block")
})
recentClose.forEach((e) => {
    e.addEventListener("click", () => {
        recent.classList.remove("D-block")
    })
})


// ####################################################################

let header = document.querySelector(".container .center .header");






window.addEventListener("resize", () => {
    if (window.innerWidth < 574) {
        window.addEventListener("mousewheel", (e) => {
            if (e.deltaY >= 0) {
                header.classList.add("to-bottom")
            }
            else {
                header.classList.remove("to-bottom")
            }
        })
    } else {
        window.addEventListener("mousewheel", (e) => {
            header.classList.remove("to-bottom")
        })
    }
})






let bottomLinks = document.querySelectorAll(".container .bottom-info ul li a:not(.not)");


bottomLinks.forEach((ele) => {
    ele.addEventListener("click", () => {
        bottomLinks.forEach((e) => {
            e.classList.remove("active");
            e.firstElementChild.classList.add("fa-regular")
            e.firstElementChild.classList.remove("fa-solid");
        })
        ele.classList.add("active");
        if (ele.firstElementChild.classList.contains("fa-regular")) {
            ele.firstElementChild.classList.remove("fa-regular")
            ele.firstElementChild.classList.add("fa-solid")
        }
    })
});


let bott_list = document.querySelectorAll(".account-info .list .bottom-li li");

let bott_list_i = document.querySelectorAll(".account-info .list .bottom-li li i");

bott_list.forEach((e) => {
    bott_list_i.forEach((ele) => {
        e.addEventListener("click", () => {
            if (ele.parentElement === e) {
                ele.classList.toggle("rotate");
            }
        })
    })
})


let accInfo = document.querySelector(".container .account-info");

let proImg = document.querySelector(".center .header .title img");

proImg.addEventListener("click", () => {
    accInfo.classList.add("show")
})

let closeInfo = document.querySelector(".container .account-info .top .one i");

closeInfo.addEventListener("click", () => {
    accInfo.classList.remove("show")
})