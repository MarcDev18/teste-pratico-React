// Avatar.jsx
import styles from "./Avatar.module.css";

export default function Avatar(props) {
    const { hasBorder } = props;
    const avatarClass = hasBorder === false ? styles.avatar : styles.avatarWithBorder;
    return (
        <img className={avatarClass} src={props.src} alt="" />
    );
}
