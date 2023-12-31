import React from 'react'

function Gallery() {
    var gallery = document.querySelector('#gallery');
    var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
    var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
    var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});
  return (
    <>
        <div className="heading">
        <h1>GALLERY</h1>
    </div>
    <div className="gallery" id="gallery">
        <div className="gallery-item">
            <div className="content"><img src="gallery/1.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/2.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/3.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/4.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/5.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/6.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/6.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/7.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/8.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/9.jpg"/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/10.jpg" alt=""/></div>
        </div>  
        <div className="gallery-item">
            <div className="content"><img src="gallery/11.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/12.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/13.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/14.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/15.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/16.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/17.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/18.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/19.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/20.jpg" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/21.JPG" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/22.JPG" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/23.JPG" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/24.JPG" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/25.JPG" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/26.JPG" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/27.JPG" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/28.JPG" alt=""/></div>
        </div>
        <div className="gallery-item">
            <div className="content"><img src="gallery/28.JPG" alt=""/></div>
        </div>
    </div>
    </>
  )
}

export default Gallery