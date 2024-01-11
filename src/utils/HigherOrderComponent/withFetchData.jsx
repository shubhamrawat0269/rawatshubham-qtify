import { useEffect, useState } from "react";

export const withFetchData = (OriginalComponent, fetchData) => {
  return function (props) {
    const [data, setData] = useState([]);
    const fetchComponentData = async () => {
      try {
        const res = await fetchData();
        setData(res.data.data);
      } catch (error) {
        console.log(error);
        return null;
      }
    };

    useEffect(() => {
      fetchComponentData();
    }, [props]);

    return <OriginalComponent {...props} data={data} />;
  };
};
