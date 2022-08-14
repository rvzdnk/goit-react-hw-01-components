import PropTypes from "prop-types";
import styles from './Statistics.module.css';
import { getRandomHexColor } from '../../js/getRandomHexColor';

export const Statistics = ({title, stats}) =>{

    const {statistics, statistics__item, statistics__label, statistics__list, statistics__percentage, 
        statistics__title} = styles;

    return (
<section className={statistics}>
  {{title} && <h2 className={statistics__title}>{title}</h2>}
  <ul className={statistics__list}>
{stats.map(({id, percentage, label}) => (
        <li key={id} style={{backgroundColor: getRandomHexColor()}} className={statistics__item}>
            <span className={statistics__label}>{label}</span>
            <span className={statistics__percentage}>{percentage}%</span>
        </li>
        ))}
  </ul>
</section>
    );
};

Statistics.propTypes ={
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}