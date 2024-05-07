import PropTypes from "prop-types";
import { useEffect } from "react";
import css from "./AddSelectCategory.module.css";
import Select from "react-select";
import category from "../../assets/json/category.json";
import subcategory from "../../assets/json/subcategory.json";
import { useState } from "react";

export const AddSelectCategory = ({ setPost, post }) => {
  const [categorySelect, setCategorySelect] = useState("");
  const [subcategorySelect, setSubcategorySelect] = useState(
    ""
    // () => {

    //  return JSON.parse(localStorage.getItem("filterCategory")) ?? subcategory
    // }
  );
  // const [categoryOptionId, setcategoryOptionId] = useState(null)
  const [disabledSelect, setDisabledSelect] = useState(
    true
    // () => {
    // if (post.category.title !== "") {

    //     const filter = subcategory.filter(
    //    ({ categoryId }) => categoryId === categoryOptionId
    //   );
    // setSubcategorySelect(filter)
    //  return false
    // }
    // else {
    //   return true
    // }
    // }
  );
  // const [indexCategory, setIndexCategory] = useState(post.category.index)
  // const [indexSubcategory, setIndexSubcategory] = useState(post.subcategory.index)

  useEffect(() => {
    setCategorySelect(category);
    setSubcategorySelect(subcategory);

    //   if (!indexSubcategory) {
    //  setSubcategorySelect(subcategory);
    //     return
    //   }

    // setSubcategorySelect(JSON.parse(localStorage.getItem("filterCategory")));
  }, []);

  const handleSelectCategoryPost = (categoryOption) => {
    const subcategoryFilter = subcategory;

    const filter = subcategoryFilter?.filter(
      ({ categoryId }) => categoryId === categoryOption.id
    );

    const categoryIndex = category.findIndex(
      (item) => item.value === categoryOption.value
    );

    setSubcategorySelect(filter);
    setDisabledSelect(false);

    // setcategoryOptionId(categoryOption.id)
    // localStorage.setItem("filterCategory", JSON.stringify(filter))

    setPost({
      ...post,
      category: { index: categoryIndex, title: categoryOption.label },
    });
  };

  const handleSelectSubcategoryPost = (subcategoryOption) => {
    // =================
    //   const subcategoryFilter = subcategory;
    //  const filter = subcategoryFilter?.filter(
    //     ({ value }) => value === subcategoryOption.value
    //   );
    //   setSubcategorySelect(filter)
    // =================
    const subcategoryIndex = subcategorySelect.findIndex(
      (item) => item.value === subcategoryOption.value
    );

    setPost({
      ...post,
      subcategory: { index: subcategoryIndex, title: subcategoryOption.label },
    });
  };

  return (
    <>
      <label className={css.post_description}>
        Category*
        <Select
          styles={{
            control: () => ({}),
          }}
          onChange={handleSelectCategoryPost}
          // defaultValue={category[indexCategory]}
          options={categorySelect}
        />
      </label>

      <label className={css.post_description}>
        Subcategory*
        <Select
          styles={{
            control: (baseStyles, state) => ({
              padding: "8px 24px",
              backgroundColor: !state.isDisabled ? "" : "#e4e1e1",
              ...baseStyles,
            }),
          }}
          isDisabled={disabledSelect}
          // defaultValue={subcategorySelect[indexSubcategory]}
          options={subcategorySelect}
          onChange={handleSelectSubcategoryPost}
        />
      </label>
    </>
  );
};

AddSelectCategory.propTypes = {
  setPost: PropTypes.func,
  post: PropTypes.object,
};
