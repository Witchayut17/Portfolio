const vid1 = document.getElementById('reignite');
const vid2 = document.getElementById('stand');
const vid3 = document.getElementById('supermega');
const vid4 = document.getElementById('spring');
const vid5 = document.getElementById('cross');
const vid6 = document.getElementById('summer');
const vid7 = document.getElementById('lcp');

const vidlist = [vid1, vid2, vid3, vid4, vid5, vid6, vid7];

vidlist.forEach(function(video){
    video.volume = 0.3;
})

vidlist.forEach(function (video) {
    video.addEventListener('mouseover', function () {
        video.play()
    })
    video.addEventListener('mouseout', function () {
        video.pause()
    })
})

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;

        const y = targetEl.getBoundingClientRect().top + window.scrollY;

        targetScroll = y;
        if (!isTicking) smoothScroll();
    });
});

let currentScroll = window.scrollY;
let targetScroll = currentScroll;
let isTicking = false;

window.addEventListener("wheel", (e) => {
    e.preventDefault();

    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    targetScroll += e.deltaY;
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

    if (!isTicking) smoothScroll();
}, { passive: false });

function smoothScroll() {
    isTicking = true;

    currentScroll += (targetScroll - currentScroll) * 0.025;
    window.scrollTo(0, currentScroll);

    if (Math.abs(targetScroll - currentScroll) > 0.5) {
        requestAnimationFrame(smoothScroll);
    } else {
        isTicking = false;
    }
}


const openButton = document.getElementById("open-popup");
const closeButton = document.getElementById("close-popup");
const popup = document.getElementById("popup");

openButton.addEventListener("click", () => {
    popup.classList.add("open");
});

closeButton.addEventListener("click", () => {
    popup.classList.remove("open");
})