import CardItem from "./CardItem";
import styles from "../../styles/Cards.module.css";
import Link from "next/link";

function Cards() {
  return (
    <div className={styles.cards}>
      <h1 className={styles.heading}>Check out our EPIC Stories!</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          <ul className={styles.cardsItems}>
            <a href="posts/post1" className={styles.cardsItems}>
              <CardItem
                src="/images/img-9.jpg"
                text="Explore the hidden waterfall in Panvel Navi Mumbai"
                label="Adventure"
                path="/services"
              />
            </a>
            <a href="posts/post1" className={styles.cardsItems}>
              <CardItem
                src="/images/img-2.jpg"
                text="Travel through the mountains of kalyan in a Cruise"
                label="Luxury"
                path="/services"
              />
            </a>
          </ul>
          <ul className={styles.cardsItems}>
            <a href="posts/post1" className={styles.cardsItems}>
              <CardItem
                src="/images/img-3.jpg"
                text="Set Sail in the Indian Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/services"
              />
            </a>
            <a href="posts/post1" className={styles.cardsItems}>
              <CardItem
                src="/images/img-4.jpg"
                text="Experience Football on Top of the Karnala Mountains"
                label="Adventure"
                path="/products"
              />
            </a>
            <a href="posts/post1" className={styles.cardsItems}>
              <CardItem
                src="/images/img-8.jpg"
                text="Ride through the Thar Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
