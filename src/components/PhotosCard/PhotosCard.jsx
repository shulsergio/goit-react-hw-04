import css from "./PhotosCard.module.css";

export default function PhotosCard({ photo, openModal }) {
    const regular = photo.urls.regular;
    // console.log('Regular URL:', regular); 

    return (
        <div className={css.item}>
            <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className={css.img}
                onClick={() => openModal(regular, photo.alt_description)}
            />
        </div>
    );
}