import React, { useState } from "react";
import img1 from '../components/assets/plantillas/juntos-siempre/1.png'

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {selectedImage && (
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;