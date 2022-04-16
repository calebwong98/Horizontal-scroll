const slider = document.querySelector('.media-scroller');
const progressBar = document.querySelector('.prog-bar-inner');

let sliderGrabbed = false;

slider.parentElement.addEventListener('scroll', (e)=>{
    console.log(getScrollPercentage);
    progressBar.style.width = `${getScrollPercentage()}%`;
});

slider.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider.style.cursor = 'default';
})

slider.addEventListener('mousemove', (e) => {
    if(sliderGrabbed) {
        slider.parentElement.scrollLeft -= e.movementX;
    }
})

function getScrollPercentage() {
    return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100)
}