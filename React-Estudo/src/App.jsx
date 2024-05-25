// App.js
import { Post } from './components/Post/Post';
import { Comment } from './components/Comment/Comment'; // Importe o componente Comment
import './global.css';
import { Header } from './components/Header/Header';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
        {/* Renderize os comentários aqui, após os posts */}
       
      </div>
    </div>
  );
}
