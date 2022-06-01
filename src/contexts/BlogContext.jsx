import { getDatabase, onValue, query, ref, update } from "firebase/database";
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

  function getBlog(id) {
    const result = currentBlog?.filter((item) => item.id === id);
    return result;
  };

  function updateBlog(id, data) {
    const db = getDatabase();
    // const newUserKey=push(child(ref(db),"blogs/")).key;
    const updates={};
    updates["connect/"+id]=data;
    return update(ref(db),updates)
  }

  function deleteBlog(id) {
    const db = getDatabase();
    const updates={};
    updates["connect/"+id]=null;
    return update(ref(db),updates)
  }

  return (
    <BlogContext.Provider value={{ currentBlog, isLoading, getBlog ,updateBlog, deleteBlog}}>
      {children}
    </BlogContext.Provider>
  );
}
