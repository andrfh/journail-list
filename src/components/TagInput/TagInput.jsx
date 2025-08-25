import React, { useState, forwardRef } from "react";
import "./TagInput.css";

const TAGS = [
  "Спорт",
  "Туризм",
  "Новости",
  "Телевидение",
  "Кино",
  "Музыка",
  "Литература",
  "Наука",
  "Техника",
  "История",
  "Политика",
  "Экономика",
  "Образование",
  "Здоровье",
  "Путешествия",
  "Кулинария",
  "Автомобили",
  "Природа",
  "Фотография",
  "Искусство",
];

const TagInput = forwardRef(({ isValid, values, dispatchForm }, ref) => {
    const [inputValue, setInputValue] = useState("");
    const [focused, setFocused] = useState(false);
    const filteredTags = TAGS.filter(
        (tag) =>
        tag.toLowerCase().includes(inputValue.toLowerCase()) &&
        !values?.includes(tag)
    );

    const addTag = (tag) => {
        dispatchForm({
        type: "SET_VALUE",
        payload: { tags: [...values, tag] },
        });
        setInputValue("");
    };

    const removeTag = (tag) => {
        dispatchForm({
        type: "SET_VALUE",
        payload: { tags: values.filter((t) => t !== tag) },
        });
    };

    return (
        <div className="tag-input-wrapper">
        <div className="tag-input-box" onClick={() => setFocused(true)}>
            {values?.map((tag) => (
            <div key={tag} className="tag-chip">
                {tag}
                <button
                type="button"
                onClick={() => removeTag(tag)}
                className="tag-remove"
                >
                ✕
                </button>
            </div>
            ))}
            <input
            ref={ref}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            className={`tag-input-field ${!isValid ? "invalid" : ""}`}
            placeholder="Начните вводить..."
            />
        </div>

        {focused && filteredTags.length > 0 && (
            <div className="tag-suggestions">
            {filteredTags?.map((tag) => (
                <div
                key={tag}
                className="tag-suggestion"
                onMouseDown={(e) => {
                    e.preventDefault();
                    addTag(tag);
                }}
                >
                {tag}
                </div>
            ))}
            </div>
        )}
        </div>
    );
});

export default TagInput;
