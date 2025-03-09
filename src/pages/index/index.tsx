import styles from "./styles/index.module.scss";

function index() {
  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      {/* 공통 네비게이션 UI 부분 */}
      <div className="{styles.page_content}"></div>
      <div className="{styles.page_content_introBox}"></div>
      <div className="{styles.wrapper}"></div>
    </div>
  );
}

export default index;
