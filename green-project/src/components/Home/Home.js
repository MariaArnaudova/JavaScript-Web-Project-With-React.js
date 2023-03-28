import styles from "./Home.module.css";
import image from "../../public/images/ddla-design-turtle-creek_garden_lower_lawn_steps_retaining_wall.jpg"


export const Home =()=> {
    return(
        <section className={styles["home-section"]}>
        <h2 className={styles["home-title"]}>Green Designs And Decor</h2>
        <div className={styles["home-divider"]}></div>
        <div className={styles["home-details"]}>
            <img className={styles["home-image"]} src={image} alt=""/>
            <div className={styles["home-info"]}>
                <h2>
                    About Green Designs
                </h2>
                <div className={styles["home-divider"]}></div>
                <p className={styles["info"]}>
                    Our landscape designers continuously utilize modern techniques and materials based on proven
                    methods, to deliver results that will stand the test of time and protect your investment. Our
                    attention to detail and careful precision allows us to properly plan, build, and maintain your
                    property.
                </p>
            </div>
        </div>
    </section>
    )
}