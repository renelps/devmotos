import styles from "./loading.module.scss";

export default function Loading(){
  return (
    <div className={styles.container}>
      <h2>Carregando...</h2>
    </div>
  )
}