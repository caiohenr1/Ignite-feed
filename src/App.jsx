// styles 
import './global.css'
import styles from './App.module.css'

// components
import { Header } from "./components/Header/Header"
import { Sidebar } from './components/Sidebar/Sidebar'

export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi totam aut officia debitis nesciunt placeat corporis nobis, magni impedit voluptatum. Quam libero commodi amet similique possimus? Aliquid, illum saepe.</p>
        </main>
      </div>
    </div>
  )
}