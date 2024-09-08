import css from './Heading.module.css';


export const Heading = ({ title }) => {
  return (
    <h2
      className={css.title}>
      {title}
    </h2>
  );
};
