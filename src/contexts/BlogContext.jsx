import { getDatabase, onValue, query, ref } from "firebase/database";
import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

export function BlogContextProvider({ children }) {
  const [currentBlog, setCurrentBlog] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    // console.log("useEffect");
    setIsLoading(true);
    const db = getDatabase();
    const blogRef = ref(db, "connect");

    onValue(query(blogRef), (snapshot) => {
      const blogs = snapshot.val();
      const blogL = [];
      for (let id in blogs) {
        blogL.push({ id, ...blogs[id] });
      }
      setCurrentBlog(blogL);
      setIsLoading(false);
    });
  }, []);

  const getBlog = (id) => {
    const result = currentBlog?.filter((item) => item.id === id);
    return result;
  };

  return (
    <BlogContext.Provider value={{ currentBlog, isLoading, getBlog }}>
      {children}
    </BlogContext.Provider>
  );
}
