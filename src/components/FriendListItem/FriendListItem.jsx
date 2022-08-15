import PropTypes from "prop-types";
import styles from './FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {

    const {item, available, disabled, item__avatar, item__name} = styles;

    return (
        <li className={item}>
            <span className={isOnline ? available : disabled}></span>
            <img className={item__avatar} src={avatar} alt="User avatar" width="48" />
            <p className={item__name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
}