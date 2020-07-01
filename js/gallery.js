"use strict";

const gallerySource = [
    'img\\gallery\\19.jpg',
    'img\\gallery\\20.jpg',
    'img\\gallery\\21.jpg',
    'img\\gallery\\22.jpg',
    'img\\gallery\\23.jpg',
    'img\\gallery\\24.jpg',
    'img\\gallery\\25.jpg',
    'img\\gallery\\26.jpg',
    'img\\gallery\\27.jpg',
    'img\\gallery\\28.jpg',
    'img\\gallery\\29.jpg',
    'img\\gallery\\30.jpg',
    'img\\gallery\\31.jpg',
    'img\\gallery\\32.jpg',
    'img\\gallery\\33.jpg',
    'img\\gallery\\34.jpg',
    'img\\gallery\\35.jpg',
    'img\\gallery\\36.jpg',
    'img\\gallery\\37.jpg',
    'img\\gallery\\38.jpg',
    'img\\gallery\\39.jpg',
    'img\\gallery\\40.jpg',
];

function renderGallery() {
    const gallery = document.querySelector('.gallery');
    const galleryLoad = imagesLoaded(gallery);
    
    const masonryGallery = new Masonry(gallery, {
        columnWidth: 1,
        itemSelector: '.gallery-item',
        fitWidth: true,
        gutter: 15,

    });

    galleryLoad.on('progress', function() {
        masonryGallery.layout();
    });

    const createGalleryItem =() => {
        const galleryItem = document.createElement("div");
        const galleryImg = document.createElement('img');
        galleryImg.className = 'gallery-item-img';
        galleryItem.className = 'gallery-item';
        const galleryItemHover = document.getElementsByClassName('gallery-item-cover')[0].cloneNode(true);
        galleryItem.prepend(galleryItemHover,galleryImg);
        return galleryItem;
    }

    const getPictureSet = function(pathArray) {
        const pictureSet = pathArray.map(src => {
            const item = createGalleryItem();
            const img = item.children[1];
            img.setAttribute('src', `${src}`);
            img.setAttribute('alt', 'gallery pic');
            return item;
        });
        return pictureSet;
    }

    const btn = document.getElementById('loadGalleryPics');
    const pictureSet = getPictureSet(gallerySource);
    const loader = document.getElementsByClassName('loader')[1];
    const pictureSize = {
        0: 'gallery-item--xsmall' ,
        1: 'gallery-item--medium',
        2: 'gallery-item--xlarge'
    };

    btn.onclick= () => {
        btn.style.opacity = 0;
        loader.hidden = false;
        
        setTimeout(() => {
            
            pictureSet.forEach(item => {
                const size = Math.floor(Math.random() * Math.floor(3));
                item.classList.add(pictureSize[size]);
                
                if(size === 0) {
                    [...item.children[0].children].forEach(btn => btn.classList.add('minified'));
                }

                gallery.append(item);
            });
            masonryGallery.appended(pictureSet);
            masonryGallery.layout();
            btn.style.display = 'none';
            loader.hidden = true;
        }, 2000)   
    }

}

renderGallery();


 
