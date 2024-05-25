import PropTypes from "prop-types";
import { useEffect } from "react";
import css from "./AddSelectCategory.module.css";
import Select from "react-select";
import category from "../../assets/json/category.json";
import subcategory from "../../assets/json/subcategory.json";
import { useState } from "react";

import { useCustomContext } from "../../services/Context/Context";

export const AddSelectCategory = ({ setPost, post }) => {
  const { theme } = useCustomContext();

  const [categorySelect, setCategorySelect] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(null);
  const [findCategory, setFindCategory] = useState(() => {
    return (
      post.category ?? JSON.parse(localStorage.getItem("previewPost"))?.category
    );
  });

  const [subcategorySelect, setSubcategorySelect] = useState(
    // []
    () => {
      return JSON.parse(localStorage.getItem("filterCategory")) || subcategory;
    }
  );
  const [subcategoryIndex, setSubcategoryIndex] = useState(null);
  const [findSubcategory, setFindSubcategory] = useState(() => {
    return (
      post.subcategory ??
      JSON.parse(localStorage.getItem("previewPost"))?.subcategory
    );
  });

  const [disabledSelect, setDisabledSelect] = useState(true);

  useEffect(() => {
    setCategorySelect(category);
     setSubcategorySelect(
      JSON.parse(localStorage.getItem("filterCategory")) || []
    );

    if (
      !JSON.parse(localStorage.getItem("filterCategory")) &&
      post.subcategory
    ) {
      const findCategoryIndex = categorySelect?.findIndex(
        ({ label }) => label === findCategory
      );

      setCategoryIndex(findCategoryIndex);

      const findSubcategoryIndex = subcategorySelect.findIndex(
        ({ label }) => label === post?.subcategory
      );

      setSubcategoryIndex(findSubcategoryIndex);

      setSubcategorySelect(subcategorySelect);

      return;
    }

    const findCategoryIndex = categorySelect?.findIndex(
      ({ label }) => label === findCategory
    );
    setCategoryIndex(findCategoryIndex);

    const findSubcategoryIndex = subcategorySelect?.findIndex(
      ({ label }) => label === findSubcategory
    );
    setSubcategoryIndex(findSubcategoryIndex);
    // eslint-disable-next-line
  }, [categorySelect, findCategory, findSubcategory]);

  const handleSelectCategoryPost = (categoryOption) => {
    const subcategoryFilter = subcategory;

    const filterCategoryId = subcategoryFilter?.filter(
      ({ categoryId }) => categoryId === categoryOption.id
    );

    const categoryFindIndex = categorySelect?.findIndex(
      (item) => item.label === categoryOption.label
    );

    setPost({
      ...post,
      category: categoryOption.label,
    });

    setCategoryIndex(categoryFindIndex);
    setSubcategorySelect(filterCategoryId);

    setDisabledSelect(false);

    localStorage.setItem("filterCategory", JSON.stringify(filterCategoryId));
  };

  const handleSelectSubcategoryPost = (subcategoryOption) => {
    const subcategoryIndex = subcategorySelect.findIndex(
      (item) => item.value === subcategoryOption.value
    );

    setPost({
      ...post,
      subcategory: subcategoryOption.label,
    });

    setSubcategoryIndex(subcategoryIndex);
  };

  const themeSelect = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "transparent",
      primary: "#ECCD43",
    },
  });

  const selected_categotyOption = categorySelect[categoryIndex];
  const selected_subCategotyOption = subcategorySelect[subcategoryIndex];

  return (
    <>
      <label className={`${css.post_description} dark:text-white`}>
        Category*
        {theme === "dark" ? (
          <Select
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                padding: "8px 24px",
                backgroundColor: "rgb(30 28 28)",
              }),
              menuList: (styles) => ({
                ...styles,
                backgroundColor: "rgb(137 132 132)",
                color: "white",
              }),
            }}
            theme={themeSelect}
            onChange={handleSelectCategoryPost}
            value={selected_categotyOption}
            options={categorySelect}
          />
        ) : (
          <Select
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                padding: "8px 24px",
              }),
            }}
            theme={themeSelect}
            onChange={handleSelectCategoryPost}
            value={selected_categotyOption}
            options={categorySelect}
          />
        )}
      </label>
      <label className={`${css.post_description} dark:text-white`}>
        Subcategory*
        {theme === "dark" ? (
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                padding: "8px 24px",
                backgroundColor: !state.isDisabled ? "" : "#363232",
              }),
              menuList: (styles) => ({
                ...styles,
                backgroundColor: "rgb(137 132 132)",
                color: "white",
              }),
            }}
            theme={themeSelect}
            isDisabled={disabledSelect}
            value={selected_subCategotyOption}
            options={subcategorySelect}
            onChange={handleSelectSubcategoryPost}
          />
        ) : (
          <Select
            styles={{
              control: (baseStyles, state) => ({
                padding: "8px 24px",
                backgroundColor: !state.isDisabled ? "" : "#e4e1e1",
                ...baseStyles,
              }),
            }}
            theme={themeSelect}
            isDisabled={disabledSelect}
            value={selected_subCategotyOption}
            options={subcategorySelect}
            onChange={handleSelectSubcategoryPost}
          />
        )}
      </label>
    </>
  );
};

AddSelectCategory.propTypes = {
  setPost: PropTypes.func,
  post: PropTypes.object,
};
