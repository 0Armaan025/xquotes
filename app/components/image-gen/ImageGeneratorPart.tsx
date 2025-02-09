import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import './image-gen.css';
import { Upload, Download, Copy, Share2 } from "lucide-react";

const ImageGeneratorPart = () => {
  const [text, setText] = useState("Your Text Here");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [fontStyle, setFontStyle] = useState("Montserrat");
  const [fontSize, setFontSize] = useState(32);
  const [textAlign, setTextAlign] = useState("center");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [bgImage, setBgImage] = useState(null);
  const previewRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setBgImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const generateImage = async () => {
    return await html2canvas(previewRef.current, { backgroundColor: null });
  };

  const downloadImage = async () => {
    const canvas = await generateImage();
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "generated-image.png";
    link.click();
  };

  const copyImage = async () => {
    const canvas = await generateImage();
    canvas.toBlob((blob) => {
      navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    });
  };

  return (
    <>
      <div className="imageGenHere flex flex-col lg:flex-row justify-center items-center gap-10 p-8">
        {/* Customization Panel */}
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customize Your Image</h2>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4 h-24 resize-none"
            placeholder="Enter your text"
          />
          <label className="text-sm font-medium">Text Color</label>
          <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-full" />
          <label className="text-sm font-medium mt-2">Background Color</label>
          <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} className="w-full" />
          <label className="text-sm font-medium mt-2">Font Size: {fontSize}px</label>
          <input type="range" min="16" max="100" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="w-full" />
          <label className="text-sm font-medium mt-2">Font Style</label>
          <select value={fontStyle} onChange={(e) => setFontStyle(e.target.value)} className="w-full p-2 border rounded-lg">
            <option value="Montserrat">Montserrat</option>
            <option value="Lora">Lora</option>
            <option value="Playfair Display">Playfair Display</option>
            <option value="Poppins">Poppins</option>
            <option value="Roboto">Roboto</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Source Sans 3">Source Sans 3</option>
          </select>
          <label className="text-sm font-medium mt-2">Upload Background Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full p-2 border rounded-lg" />

          {/* Text Alignment Options */}
          <div className="mt-4">
            <label className="text-sm font-medium">Text Alignment</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="textAlign"
                  value="left"
                  checked={textAlign === "left"}
                  onChange={() => setTextAlign("left")}
                />
                Left
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="textAlign"
                  value="center"
                  checked={textAlign === "center"}
                  onChange={() => setTextAlign("center")}
                />
                Center
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="textAlign"
                  value="right"
                  checked={textAlign === "right"}
                  onChange={() => setTextAlign("right")}
                />
                Right
              </label>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div
          className="relative w-[600px] h-[575px] flex justify-center items-start border border-gray-300 rounded-lg shadow-lg"
          style={{ backgroundColor }}
          ref={previewRef}
        >
          {bgImage && <img src={bgImage} alt="Background" className="absolute inset-0 w-full h-full object-cover rounded-lg" />}
          <p className="absolute p-4" style={{
            color: textColor,
            fontSize: `${fontSize}px`,
            fontFamily: fontStyle,
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
            textDecoration: isUnderline ? "underline" : "none",
            textAlign,
            width: "100%",
            display: "flex",
            justifyContent: textAlign === "left" ? "flex-start" : textAlign === "right" ? "flex-end" : "center",
            alignItems: "flex-start",
          }}>
            {text}
          </p>

          {/* Watermark in Preview */}
          <p className="absolute bottom-2 right-2 text-xs text-gray-500 opacity-70" style={{ fontFamily: "Poppins, serif" }}>
            Generated by XQuotes
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row justify-center items-center mb-4 gap-4 mt-4">
        <button onClick={downloadImage} className="p-3 bg-blue-500 text-white rounded-lg flex items-center gap-2"><Download size={20} /> Download</button>
        <button onClick={copyImage} className="p-3 bg-green-500 text-white rounded-lg flex items-center gap-2"><Copy size={20} /> Copy</button>
      </div>
    </>
  );
};

export default ImageGeneratorPart;
