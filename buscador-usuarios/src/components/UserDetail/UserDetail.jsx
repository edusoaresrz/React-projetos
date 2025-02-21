import styles from "./UserDetail.module.css";
import PropTypes from "prop-types";

const UserDetail = ({ user }) => {
  return (
    <div className={styles.container_details}>
      <div className={styles.user_presentation}>
        <h2>{user.name}</h2>
        <div className={styles.user_img}>
          <img src={user.avatar_url} alt={user.name} />
        </div>
      </div>
      <div className={styles.user_details}>
        <p>Repositórios públicos: {user.public_repos}</p>
        <p>Número de seguidores: {user.followers}</p>
        <p>Número de seguindos: {user.following}</p>
        <p>Link para perfil: {user.html_url}</p>
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  user: PropTypes.object,
};

export default UserDetail;
