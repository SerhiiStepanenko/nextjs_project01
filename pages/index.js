import Heading from "../components/Heading"
import styles from '../styles/Home.module.scss'
import Head from "next/head"
import Socials from "../components/Socials"
import Image from "next/image"
import homePage from "../public/homePage.jpg"

export const getStaticProps = async () => {
  try{
    const response = await fetch(`${process.env.API_HOST}/socials/`)
    const data = await response.json()
  
    if (!data) {
        return {
            notFound: true
        }
    }
  
    return {
        props: { socials: data }
    }

    }catch{
      return {
        props: { socials: null }
    }
  }
  
}

const Home = ({socials}) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>
          Home
        </title>
      </Head>
      <Heading text='Home Page' />
      <Socials socials={socials}/>
      <Image
        src={homePage}
        width='1000'
        alt='prew'
        placeholder='blur'
      />
    </div>
  )

}

export default Home
