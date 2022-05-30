import { getDatabase, onValue, query, ref } from "firebase/database";
import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

export function BlogContextProvider({ children }) {
  const [currentBlog, setCurrentBlog] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
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

  return (
    <BlogContext.Provider value={{ currentBlog, isLoading }}>
      {children}
    </BlogContext.Provider>
  );
}


