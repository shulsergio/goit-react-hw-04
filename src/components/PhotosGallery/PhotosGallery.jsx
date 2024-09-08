import PhotosCard from '../PhotosCard/PhotosCard';
import css from './PhotosGallery.module.css'

export default function PhotosGallery({ photos = [], openModal }) {
        // console.log(photos);
    return (

        <ul className={css.box}>
            {photos.map((item) => (
                <li key={item.id} className={css.list}>
                    <PhotosCard
                        photo={item}
                        openModal={openModal}
                    />
                </li>
            ))}
        </ul>
    );
}