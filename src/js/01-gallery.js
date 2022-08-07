import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery')
const cardGallety = createGalleryItem(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend' ,cardGallety )

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview , original , description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>`
    })
    .join('')
}

let gallery = new SimpleLightbox('.gallery a');