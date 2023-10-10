// function for close the side menu bar 
document.getElementById("menu-bar").onclick = function () {

    document.getElementById("slid-menu-right").style.right = "0";
    document.getElementById("slid-menu-right").style.visibility = "visible";
    document.getElementById("slid-menu-right").style.display = "block";

}
// function for close the side menu bar 
document.getElementById("cros-icon").onclick = function () {
    document.getElementById("slid-menu-right").style.right = "-50%";
    document.getElementById("slid-menu-right").style.visibility = "hidden";
}


//function for slilder
let sliderValue = 0;
document.getElementById("slider-button-1").onclick = function () {
    if (sliderValue === 0) {
        let sliderValue = 10;
        document.getElementById("slider-image-container").style.transform = `translateX(${sliderValue}%)`;
    }
    else {
        sliderValue -= 10;
        document.getElementById("slider-image-container").style.transform = `translateX(-${sliderValue}%)`;
    }
}

document.getElementById("slider-button-2").onclick = function () {
    if (sliderValue < 40) {
        sliderValue += 10;
        document.getElementById("slider-image-container").style.transform = `translateX(-${sliderValue}%)`;

    }

}
let tl = gsap.timeline();

tl.from(".discriptison", {
    x: -600,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".discription",

    },
});
gsap.from(".sec-3", {
    duration: 1,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".sec-3",

    },
});
gsap.from(".sec-3-row-3-box", {
    duration: 1,
    opacity: 0,
    scale: 0,
    stagger:0.5,
    scrollTrigger: {
        trigger: ".sec-3",
        start: "top center",
    }
});

gsap.from("#Possibilities-section-box:nth-child(1),#Possibilities-section-box:nth-child(2),#Possibilities-section-box:nth-child(3),#Possibilities-section-box:nth-child(4),#Possibilities-section-box:nth-child(5),#Possibilities-section-box:nth-child(6)", {
    duration: 1,
    y: -100,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#Possibilities-section",
        start: "top center",
       
    },
});

gsap.from("#carousels-section #carosules-box", {
    x:-500,
    duration: 1,
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#carousels-section",
        start: "top center",
    }
});
gsap.from("#Rules-sections ,.section-heading-p,.section-heading-h1", {

    duration: 1,
    opacity: 0,
    scale: 0,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#Rules-sections",
        start: "top center",
    }
});
gsap.from("#Rules-sections #Rules-sections-box", {
    x:900,
    duration: 1,
    opacity: 0,
    scale: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#Rules-sections",
        start: "top center",
    }
});
gsap.from("#sec-7", {
    duration: 1,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#sec-7",
        start: "top center",
    }
});
gsap.from("#sec-7-right-site", {
    x:-500,
    duration: 1,
    opacity: 0,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#sec-7",
        start: "top center",
    }
});
gsap.from("#sec-7-left-site", {
    x:500,
    duration: 1,
    opacity: 0,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#sec-7",
        start: "top center",
    }
});
gsap.from("#Attractions-section,#section-heading-h1", {
    x:500,
    duration: 1,
    opacity: 0,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#Attractions-section",
        start: "top center",
    }
});