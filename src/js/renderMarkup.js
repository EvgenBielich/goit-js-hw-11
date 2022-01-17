import { refs } from './refs';

export function imagesListMarkup(imagesData) {
  const markup = imagesData
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<div class="photo-card gallery__item">
        <a class="gallery__link" href='${largeImageURL}'>
            <img
                class="gallery__image"
                src="${webformatURL}"
                alt="${tags}"
                loading="lazy" />
        </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>${likes}
                </p>
                <p class="info-item">
                    <b>Views</b>${views}
                </p>
                <p class="info-item">
                    <b>Comments</b>${comments}
                </p>
                <p class="info-item">
                    <b>Downloads</b>${downloads}
                </p>
            </div>
    </div>`,
    )
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
