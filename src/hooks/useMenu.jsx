import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ["menuData"],
    queryFn: () =>
      fetch("http://localhost:5000/menu").then((res) => {
        return res.json().then((data) => {
          setMenu(data);
        });
      }),
  });
  

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get("menu.json");
//       setMenu(response.data);
//     };
//     fetchData();
//   }, []);

  return [menu, isLoading];
};

export default useMenu;
