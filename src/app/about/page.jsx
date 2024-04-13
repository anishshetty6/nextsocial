import Image from "next/image"
import styles from "./about.module.css"
const AboutPage = () => {
    return (
        <div className="{styles.imgContainer"> 
            <Image src="/about.png" alt="" width={400} height={400}></Image>
        </div>
    )
}

export default AboutPage