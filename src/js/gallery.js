import { galleryItems } from './gallery-items';
const galleryList = document.querySelector('.gallery-hero');

const galleryItem = galleryItems
  .map(
    item =>
      `<li class="gallery_item">
  <a class="gallery_link" href="#">
  <img class="gallery_image" src="${item.icon}" alt="${item.alt}" width="200"/>
  </a>
  </li>`
  )
  .join('');

galleryList.innerHTML = galleryItem;
