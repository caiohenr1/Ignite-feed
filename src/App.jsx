// styles 
import './global.css'
import styles from './App.module.css'

// components
import { Header } from "./components/Header/Header"
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'

export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}