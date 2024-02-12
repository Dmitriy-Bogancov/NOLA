import { NavLink, useLocation } from "react-router-dom";

const AddPostPage = () => {
  const location = useLocation();
  return (
    <div>
      <form>
        <NavLink to="/main/accountAdverticer">
          <button type="button">Add Bunner</button>
        </NavLink>

        <input type="text" name="name" />
        <textarea name="textarea" cols="30" rows="10"></textarea>
        <div>
          <ul>
            <li>
              <NavLink
                to="/main/accountAdverticer/adverticerEdit/links/addLinks"
                state={location}
              >
                Link
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/main/accountAdverticer/adverticerEdit/links/addLinks"
                state={location}
              >
                Link
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/main/accountAdverticer/adverticerEdit/links/addLinks"
                state={location}
              >
                Link
              </NavLink>
            </li>
          </ul>

          <button>Confirm </button>
        </div>
      </form>
      <button type="button">Cancel </button>
    </div>
  );
};

export default AddPostPage;
