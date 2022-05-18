import React, { useEffect, useState } from "react";
import { client } from "../client";
import { useParams } from "react-router-dom";

const CaseStudy = () => {
  const [works, setWorks] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
              title,
              slug,
           }`,
        { slug }
      )
      .then((data) => setWorks(data[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <div>
      <p>{works.title}</p>
    </div>
  );
};

export default CaseStudy;
