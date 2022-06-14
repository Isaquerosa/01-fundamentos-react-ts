import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"


import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1, 
    author: {
      avatarUrl: "https://github.com/isaquerosa.png",
      name: "Isaque Vieira",
      role: "Front-End Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-04 15:46:34')
  },
  {
    id: 2, 
    author: {
      avatarUrl: "https://github.com/isaquerosa.png",
      name: "Isaque Vieira",
      role: "Back-End Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋'},
      { type: 'paragraph', content: 'Acabei de descer menos um projeto no meu git. É um projeto que fiz no NLW Heat, evento da Rocketseat. O nome do projeto é NãoLembro 🚀'},
      { type: 'link', content: '👉jane.design/naolembro'},
    ],
    publishedAt: new Date('2022-06-04 15:46:34')
  }
]

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar /> 
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

