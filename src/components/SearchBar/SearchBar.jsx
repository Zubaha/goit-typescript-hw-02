import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") {
      toast("Enter text to search for images", {
        icon: "❌",
        style: {
          borderRadius: "5px",
          background: "white",
          color: "black",
        },
      });
    }
    onSubmit(value);
  }

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
}

export default SearchBar;
