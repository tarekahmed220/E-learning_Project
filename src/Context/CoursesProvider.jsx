import { createContext } from "react";

function CoursesProvider({ children }) {
  // const [courses, setCourses] = useState(() => {});

  const coursesContext = createContext();

  return <coursesContext.Provider>{children}</coursesContext.Provider>;
}

export default CoursesProvider;

// https://www.udemy.com/api-2.0/courses/?page=1&page_size=10&language=en&category=development
