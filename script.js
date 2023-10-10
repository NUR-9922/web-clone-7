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

gsap.from(".discriptison,.discriptison-images-container,.discriptison-image-box", {
    x: -600,
    duration: 1,
    opacity: 0,
    stagger:0.2,
    scrollTrigger: {
        trigger: ".discription",
    
    }, 
});

gsap.from(".sec-3,.sec-3-row-3-box", {
    duration: 1,
    opacity: 0,
    scale: 0,
    stagger:0.2,
    scrollTrigger: {
        trigger: ".sec-3",
        scroller:"body",
        start: "top 100%", 
    },
});

gsap.from(" #Possibilities-section p,#Possibilities-section h1,#Possibilities-section-box:nth-child(1),#Possibilities-section-box:nth-child(2),#Possibilities-section-box:nth-child(3),#Possibilities-section-box:nth-child(4),#Possibilities-section-box:nth-child(5),#Possibilities-section-box:nth-child(6)", {
    duration: 0.5,
    y: -100,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#Possibilities-section",
        start: "top 100%",
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
gsap.from("#Rules-sections,#Rules-sections-box", {

    duration: 1,
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#Rules-sections",
        start: "top 100%",
    }
});


gsap.from("#sec-7-right-site", {
    x:-500,
    duration: 1,
    opacity: 0,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#sec-7",
        start: "top 100%",
    }
});
gsap.from("#sec-7-left-site", {
    x:500,
    duration: 1,
    opacity: 0,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#sec-7",
        start: "top 100%",
    }
});
gsap.from("#Attractions-section,#Attractions-subSection-right ,#checklist ul li", {
    duration: 1,
    opacity: 0,
    scale:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#Attractions-section",
        start: "top 100%",
    }
});
gsap.from("#event-section #eventList,#eventList ul li", {
    duration: 1,
    opacity: 0,
    x:-500,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#event-section",
        start: "top 100%",
    }
});
gsap.from("#event-section #ContactUs,#ContactUs h3,#ContactUs p,#ContactUs #btn", {
    duration: 1,
    opacity: 0,
    x:500,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#event-section",
        start: "top 100%",
    }
});

gsap.from("#slider-section,#slider-image img",{
    duration:1,
    opacity:0,
    y:-500,
    stagger:0.6,
    scrollTrigger: {
        trigger: "#slider-section #slider-image-container",
        start: "bottom 100%",
    }
})
gsap.from("#left-site,#right-site h1,#right-site #EmailInputBox,#right-site #checkboxFlex,#right-site p",{
    duration:1,
    opacity:0,
    x:500,
scale:0,
    stagger:0.2,
    scrollTrigger: {
        trigger: "#contactUs-section",
        start: "top 100%",
       
    }
})
gsap.from("footer h1",{
    duration:1,
    opacity:0,
    y:500,
    stagger:0.6,
    scrollTrigger: {
        trigger: "footer",
        start: "top 100%",
    }
})
gsap.from("#footer-row-2",{
    duration:1,
    opacity:0,
    delay:1,
    x:500,
    stagger:0.6,
    scrollTrigger: {
        trigger: "footer",
        start: "top 100%",
    }
})
// gsap.from("#footer-row-3",{
//     duration:1,
//     opacity:0,
//     delay:1,
//     x:-500,
//     stagger:0.6,
//     scrollTrigger: {
//         trigger: "footer",
//         start: "top 100%",
//     }
// })
gsap.from("#bottom-line,#copyright-section",{
    duration:1,
    opacity:0,
    delay:1,
    scale:0,
    stagger:0.3,
    scrollTrigger: {
        trigger: "footer",
        start: "top 100%",
    }
})