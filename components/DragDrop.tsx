import useFileDrop from "@/hooks/useFileDrop";
import React, { useEffect } from "react";

const App = () => {
  const { inputRef, labelRef, files, isDragActive } = useFileDrop();

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <div>
      <input ref={inputRef} id="upload" />
      <label ref={labelRef} htmlFor="upload">
        {isDragActive ? (
          <span>Drop the file!</span>
        ) : (
          <span>Drag and drop the file.</span>
        )}
      </label>
    </div>
  );
};

export default App;
