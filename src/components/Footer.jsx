import PropTypes from "prop-types";
import styles from "./footer.module.css";
function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span>Completd:{completedTodos}</span>
      <span>Total:{totalTodos}</span>
    </div>
  );
}
Footer.proptypes = {
  completedTodos: PropTypes.number,
  totalTodos: PropTypes.number,
};
export default Footer;
