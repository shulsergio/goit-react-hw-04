import css from './Button.module.css'

export default function Button({onClick=null, type, text}){
    
return(
    <>
        <button onClick={onClick} type={type} className={css.allButtons}>{text}</button>
    </>
);
    
};