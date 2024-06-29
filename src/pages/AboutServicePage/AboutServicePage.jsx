import css from "./AboutServicePage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const AboutServicePage = () => {
  return (
    <div>
      <div className={css.top_container}>
        <GoBackButton
          to="/setting"
          imgWidth="50px"
          imgHeight="50px"
          imgAlt="Go back"
          title="About us"
        />
      </div>
      <h2 className={`${css.title} dark:text-white`}>
        Welcome to our app for advertising placement and course listings!
      </h2>
      <p className={`${css.descr} dark:text-white`}>
        We are a team of enthusiasts who have created this app with the aim of
        making the search for courses and the placement of advertisements as
        convenient and efficient as possible for users. Our mission is to
        connect those seeking knowledge with those who provide it.
      </p>
      <h2 className={`${css.title} dark:text-white`}>What we offer:</h2>
      <p className={`${css.descr} dark:text-white`}>
        Our app allows you to quickly and easily find courses on various topics,
        difficulty levels, and locations. We work with leading educational
        institutions to provide access to the highest quality educational
        programs.
        <span className={css.empty_str}></span>
        For those offering courses or educational services, we provide the
        opportunity to effectively place advertisements and attract attention to
        your offer among our users.
        <span className={css.empty_str}></span>
        Our app has an intuitive and easy-to-use interface that allows you to
        focus on finding or placing courses without unnecessary complications.
        <span className={css.empty_str}></span>
        We believe in the importance of learning and the dissemination of
        knowledge, and we are creating this app with a love for learning and
        technology. Join our community and help us make the learning process
        even more accessible and effective for everyone! If you have any
        questions or suggestions, please feel free to contact us. We are always
        happy to receive your feedback and assist you with any inquiries.
      </p>

      <h3 className={`${css.title} dark:text-white`}>
        Thank you for choosing us!
      </h3>
      <h3 className={`${css.title} ${css.end} dark:text-white`}>
        Sincerely, NOLA Team❤️
      </h3>
    </div>
  );
};

export default AboutServicePage;
