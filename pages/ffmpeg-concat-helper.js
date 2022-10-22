import { useState } from "react";

export default function Ffmpeg() {
  const [files, setFiles] = useState([]);
  const handleChange = (ev) => {
    console.log(ev.target.files);
    setFiles(ev.target.files);
  };
  return (
    <div>
      <input type="file" id="fileInput" multiple onChange={handleChange} />
      <pre>
        {Array.from(files)
          .map((file) => `file './${file.name}'`)
          .reverse()
          .join("\n")}
      </pre>
    </div>
  );
}
