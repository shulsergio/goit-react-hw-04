import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css'

export default function ImageGallery({ photos = [], openModal }) {
        // console.log(photos);
    return (

        <ul className={css.box}>
            {photos.map((item) => (
                <li key={item.id} className={css.list}>
                    <ImageCard
                        photo={item}
                        openModal={openModal}
                    />
                </li>
            ))}
        </ul>
    );
}