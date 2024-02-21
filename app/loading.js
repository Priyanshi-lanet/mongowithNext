import styles from "@/app/styles/common.module.css";
const Loading = () => {
  return (
    <section className={styles.loading_section}>
      <div className={styles.loader}></div>
    </section>
  );
};

export default Loading;
