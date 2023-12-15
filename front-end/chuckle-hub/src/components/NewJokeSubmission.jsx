import { useState, useEffect } from "react";
import { api } from "../utilities";

const NewJokeSubmission = ({ client }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await api.get("categories/all_categories");
        // console.log((await response).data);
        setCategories(response.data);
      } catch (error) {
        console.error("something went wrong getting categories:", error);
      }
    };
    // console.log(client)
    getCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: title,
      content: content,
      category: parseInt(selectedCategory),
      author: client.client.id,
    };

    try {
      console.log(payload);
      const response = await api.post("jokes/create_joke/", payload);
      if (response.status === 201) {
        console.log("Joke posted successfully!");
      }
    } catch (error) {
      console.error("something went wrong creating joke:", error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>

          <label>
            Category:
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewJokeSubmission;
