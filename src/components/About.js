import React from 'react';
import '../styles/About.css';

function AboutPage() {
  return (
    <div className="about-container">
      <h3 className="about-heading">Welcome to our page!</h3>
      <p className="about-paragraph">
        At our company, we are passionate about creating applications that
        immerse users in the exciting world of anime and manga. We strive to
        provide users with the latest information, ensuring they have access to
        up-to-date details about their favorite titles, characters, and more.
        With our applications, users can dive into the vast collection of anime
        and manga, explore new series, and stay informed about the latest
        releases and trends.
      </p>
      <p className="about-paragraph">
        Our dedicated team of developers works tirelessly to deliver a seamless
        and enjoyable experience for anime and manga enthusiasts. By leveraging
        the power of the Jikan API, we can access comprehensive data from
        MyAnimeList (MAL) and present it in user-friendly interfaces. Whether
        you are looking for recommendations, browsing through reviews, or
        managing your own watchlist, our applications have got you covered.
      </p>
    </div>
  );
}

export default AboutPage;
