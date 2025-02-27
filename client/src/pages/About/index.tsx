import { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../../components/Heading";

const About = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/about").then((response) => {
      if (response.data) {
        setContent(response.data.content);
      }
    });
  }, []);

  return (
    <div>
      <Heading title="about" />
      <div className="container mx-auto p-4 flex justify-center items-center">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default About;
