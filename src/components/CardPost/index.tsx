import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from "./cardpost.module.css";

interface Author {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

interface Post {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: Author;
}

export const CardPost = ({ post }: { post: Post }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure>
          <Image src={post.cover} width={438} height={133} alt={`Imagem do post ${post.title}`} />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer className={styles.footer}>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
