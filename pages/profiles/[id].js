import Layout from '../../components/layout'
import { getAllProfileIds, getProfileData } from '../../lib/posts'
import Image from 'next/image'
import styles from '../../components/layout.module.css'

export default function Profile({ profileData }) {
  return (
    <Layout>
      <div className={styles.setProfile}>
        <Image
          src="/images/tenplete.png"
          height={682}
          width={1024}
        />
        <div className={styles.setName}>
          {profileData.allData.name}
        </div>
        <div className={styles.setCallName}>
          {profileData.allData.callName}
        </div>
        <div className={styles.setYear}>
          {profileData.allData.year}
        </div>
        <div className={styles.setMonth}>
          {profileData.allData.month}
        </div>
        <div className={styles.setDay}>
          {profileData.allData.day}
        </div>
        <div className={styles.setAge}>
          {profileData.allData.age}
        </div>
        <div className={styles.setBloodType}>
          {profileData.allData.bloodType}
        </div>
        <div className={styles.setPersonality}>
          {profileData.allData.personality}
        </div>
        <div className={styles.setMyPersonality}>
          {profileData.allData.myPersonality}
        </div>
        <div className={styles.setHobby}>
          {profileData.allData.hobby}
        </div>
        <div className={styles.setrecently}>
          {profileData.allData.recently}
        </div>
        <div className={styles.setSpecialSkill}>
          {profileData.allData.specialSkill}
        </div>
        <div className={styles.setEveryTime}>
          {profileData.allData.everyTime}
        </div>
        <div className={styles.setEmoji}>
          {profileData.allData.emoji}
        </div>
        <div className={styles.setEat}>
          {profileData.allData.eat}
        </div>
        <div className={styles.setAnimal}>
          {profileData.allData.animal}
        </div>
        <div className={styles.setYoutube}>
          {profileData.allData.Youtube}
        </div>
        <div className={styles.setArtist}>
          {profileData.allData.artist}
        </div>
        <div className={styles.setGame}>
          {profileData.allData.game}
        </div>
        <div className={styles.setAnime}>
          {profileData.allData.anime}
        </div>
        <div className={styles.setCharacter}>
          {profileData.allData.character}
        </div>
        <div className={styles.setColor}>
          {profileData.allData.color}
        </div>
        <div className={styles.setMyBest3}>
          {profileData.allData.myBest3}
        </div>
        <div className={styles.setBest1}>
          {profileData.allData.best1}
        </div>
        <div className={styles.setBest2}>
          {profileData.allData.best2}
        </div>
        <div className={styles.setBest3}>
          {profileData.allData.best3}
        </div>
        <div className={styles.setPhone}>
          {profileData.allData.phone}
        </div>
        <div className={styles.setFree}>
          {profileData.allData.free}
        </div>
        <div className={styles.setLonging}>
          {profileData.allData.longing}
        </div>
        <div className={styles.setLikePerson}>
          {profileData.allData.likePerson}
        </div>
        <div className={styles.setRecentlyHappy}>
          {profileData.allData.recentlyHappy}
        </div>
        <div className={styles.setFreeSpace}>
          {profileData.allData.freeSpace}
        </div>
        <div className={styles.setNowYear}>
          {profileData.allData.nowYear}
        </div>
        <div className={styles.setNowMonth}>
          {profileData.allData.nowMonth}
        </div>
        <div className={styles.setNowDay}>
          {profileData.allData.nowDay}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllProfileIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const profileData = getProfileData(params.id)

  return {
    props: {
      profileData
    }
  }
}
