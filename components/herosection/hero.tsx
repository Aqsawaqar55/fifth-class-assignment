import Image  from "next/image"
import styles from "../herosection/hero.module.css"

export default function Hero(){
    return( <>
    <div className={styles.main}>
        <Image src="/images/MANZZARI.png"
         alt="logo"
          height={100}
        width={100}
        className={styles.img}></Image>
    </div>
    <h1 className={styles.h}>IMPECCABLE CRAFTSMANSHIP AND FINESSE
    </h1>
    <div className={styles.p}><p >An example of intricate workmanship and detail, elegant<br/> necklaces and long and short chains form a part of our<br/> desirable collection.</p></div>
    <button className={styles.btn}><div className={styles.text}>Explore Now</div></button>
    <div className={styles.image}>
    <Image src="/images/main-img.png"
         alt="logo"
          height={100}
        width={100}
        className={styles.img1}></Image>
    </div>
    </>)
}


