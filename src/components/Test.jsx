import React, { useState } from "react";
import img1 from '../components/assets/plantillas/juntos-siempre/1.png'

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(img1);

  return (
    <div>
      {selectedImage && (
        <img alt="not fount" width={"250px"} src={selectedImage} />
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;