import React, { useState } from "react";
import axios from "axios";
import { LuDownload, LuUpload } from "react-icons/lu";

const UploadForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleAction = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const apiUrl =
          "https://id-to-json-api-flask-d9ac907a081b.herokuapp.com/";

        const response = await axios.post(apiUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const modifiedJson = response.data.modified_json;
        const blob = new Blob([modifiedJson], { type: "application/json" });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "modified_data.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (error) {
        console.error("Erreur lors de l'envoi du fichier", error);
      }
    }
  };
  return (
    <>
      <div className="lg:flex lg:justify-center lg:items-center gap-8 space-y-4 lg:space-y-0 mx-8">
        <div className="flex items-center bg-yellow-300 rounded-lg p-2 gap-2 cursor-pointer">
          <input
            type={"file"}
            accept={".json"}
            onChange={handleFileChange}
            placeholder="Choose a file"
            className="items-center file:bg-yellow-500 file:rounded-lg file:border-none"
          />
          <LuUpload className="w-6 h-6" />
        </div>
        <button
          onClick={handleAction}
          className="bg-blue-300 rounded-lg p-2 w-full lg:w-1/5 flex items-center justify-center gap-4"
        >
          Transform & download
          <LuDownload className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default UploadForm;
