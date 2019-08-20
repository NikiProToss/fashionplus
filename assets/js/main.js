const tourButton = document.getElementById("tourControl");
const tourMedia = document.getElementById("myTour");

tourButton.addEventListener("click", () => {
    tourMedia.setAttribute("src", tourMedia.getAttribute("data-src"));
    tourMedia.style.display = 'block';
});