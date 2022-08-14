import PropTypes from "prop-types";
import styles from './Profile.modules.scss';

export const Profile = ({username, tag, location, avatar,stats,}) => {

const {followers, views, likes} = stats;
const {profile, description, description__avatar, description__location, description__name,
    description__tag, stats, stats__label, stats__quantity} = styles;

return(
    <div className={profile}>
        <div className={description}>
            <img
            src={avatar}
            alt="User avatar"
            className={description__avatar}
            />
            <p className={description__name}>{username}</p>
            <p className={description__tag}>{tag}</p>
            <p className={description__location}>{location}</p>
        </div>

        <ul className={stats}>
            <li>
                <span className={stats__label}>Followers</span>
                <span className={stats__quantity}>{followers}</span>
            </li>
            <li>
                <span className={stats__label}>Views</span>
                <span className={stats__quantity}>{views}</span>
            </li>
            <li>
                <span className={stats__label}>Likes</span>
                <span className={stats__quantity}>{likes}</span>
            </li>
        </ul>
    </div>
);
};


Profile.propTypes ={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
};