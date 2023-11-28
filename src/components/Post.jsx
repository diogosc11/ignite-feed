import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/diogosc11.png' />
          <div className={styles.authorInfo}>
            <strong>Diogo Scheffer</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem minima. Beatae qui esse nemo ab consectetur, cum, reiciendis numquam necessitatibus consequuntur minus dolore ullam! Reiciendis, iusto. Ratione, pariatur ex?
      </div>
    </article>
  )
}