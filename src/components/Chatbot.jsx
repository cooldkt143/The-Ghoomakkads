import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Inject Botpress Webchat script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2024/11/22/05/20241122051132-APT5R8G1.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      // Cleanup scripts if component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // No visible UI, only scripts
};

export default Chatbot;
