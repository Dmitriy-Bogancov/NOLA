import { NavLink, useParams } from "react-router-dom";
import css from "./PostDetailsPage.module.css";

const advertiser = [
  {
    id: "1",
    advertiser: "user-1",
    banner: "BANNER-1",
  },
  {
    id: "2",
    advertiser: "user-2",
    banner: "BANNER-2",
  },
  {
    id: "3",
    advertiser: "user-3",
    banner: "BANNER-3",
  },
  {
    id: "4",
    advertiser: "user-4",
    banner: "BANNER-4",
  },
  {
    id: "5",
    advertiser: "user-5",
    banner: "BANNER-5",
  },
];


const PostDetailsPage = () => {
  const { postId } = useParams();

  //  useEffect(() => {
  //  const data = http://${postId}
  // }, [])
  const data = advertiser.filter((post) => post.id === postId);

  return (
    <div>
      <h1>PostDetailsPage</h1>

      {data?.map(({ id: advertiserId }) => (
        <div key={advertiserId}>
          <NavLink to={`/${advertiserId}`}>
            Advertiser Header {`${postId}`}
          </NavLink>

          <p>BANNER {`${postId}`}</p>

          <a href="/" className={css.link}>
            Site/Profile
          </a>

          <p>Description</p>

          <img src="" alt="" className={css.img} />

          <ul>
            <li>
              <a href="/">LINK</a>
            </li>
            <li>
              <a href="/">LINK</a>
            </li>
            <li>
              <a href="/">LINK</a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PostDetailsPage;
