import { useEffect } from "react";

const useScript = (src,integrity,crossorigin = "anonymous") => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
        script. integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p";
        script.crossorigin="anonymous";
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, [src,integrity,crossorigin]);
};

export default useScript;