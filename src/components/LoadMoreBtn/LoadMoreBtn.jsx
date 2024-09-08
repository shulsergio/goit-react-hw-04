import Button from '../Button/Button'
import css from './LoadMoreBtn.module.css'
export default function LoadMoreBtn({onLoadMoreBtn}) {
    return (
        <>
            <div className={css.loadBtn}>
<Button type={'click'} onClick={onLoadMoreBtn} text={'Load more' } />                
            </div>
    </>
    )
}