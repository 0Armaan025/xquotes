import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import './image-gen.css';
import { Upload, Download, Copy } from "lucide-react";

const ImageGeneratorPart = () => {
  const [text, setText] = useState("Your Text Here");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [fontStyle, setFontStyle] = useState("Arial");
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

  const downloadImage = () => {
    html2canvas(previewRef.current, { backgroundColor: null }).then((canvas) => {
      // Remove or comment out the extra watermark drawing code:
      // const context = canvas.getContext("2d");
      // context.font = "16px Arial";
      // context.fillStyle = "rgba(255, 255, 255, 0.5)";
      // context.fillText("by XQuotes", 10, canvas.height - 10);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "generated-image.png";
      link.click();
    });
  };

  const copyImage = () => {
    html2canvas(previewRef.current, { backgroundColor: null }).then((canvas) => {
      // Remove or comment out the extra watermark drawing code:
      // const context = canvas.getContext("2d");
      // context.font = "16px Arial";
      // context.fillStyle = "rgba(255, 255, 255, 0.5)";
      // context.fillText("by XQuotes", 10, canvas.height - 10);

      canvas.toBlob((blob) => {
        navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        
      });
    });
  };

  return (
    <>
      <div className="imageGenHere flex flex-col lg:flex-row justify-center items-center gap-10 p-8" id="customizeHere">
        {/* Customization Panel */}
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customize Your Image</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4"
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
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
          </select>
          <label className="text-sm font-medium mt-2">Upload Background Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full p-2 border rounded-lg" />

          {/* Text Style Options */}
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => setIsBold((prev) => !prev)}
              className={`p-2 ${isBold ? "bg-gray-800 text-white" : "bg-gray-200"} rounded-lg`}
            >
              Bold
            </button>
            <button
              onClick={() => setIsItalic((prev) => !prev)}
              className={`p-2 ${isItalic ? "bg-gray-800 text-white" : "bg-gray-200"} rounded-lg`}
            >
              Italic
            </button>
            <button
              onClick={() => setIsUnderline((prev) => !prev)}
              className={`p-2 ${isUnderline ? "bg-gray-800 text-white" : "bg-gray-200"} rounded-lg`}
            >
              Underline
            </button>
          </div>

          {/* Text Alignment Options */}
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => setTextAlign("left")}
              className={`p-2 ${textAlign === "left" ? "bg-gray-800 text-white" : "bg-gray-200"} rounded-lg`}
            >
              Left
            </button>
            <button
              onClick={() => setTextAlign("center")}
              className={`p-2 ${textAlign === "center" ? "bg-gray-800 text-white" : "bg-gray-200"} rounded-lg`}
            >
              Center
            </button>
            <button
              onClick={() => setTextAlign("right")}
              className={`p-2 ${textAlign === "right" ? "bg-gray-800 text-white" : "bg-gray-200"} rounded-lg`}
            >
              Right
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div
          className="relative w-[600px] h-[550px] flex justify-center items-start border border-gray-300 rounded-lg shadow-lg"
          style={{ backgroundColor }}
          ref={previewRef}
        >
          {bgImage && (
            <img
              src={bgImage}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          )}
          <p
            className="absolute p-4"
            style={{
              color: textColor,
              fontSize: `${fontSize}px`,
              fontFamily: fontStyle,
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textDecoration: isUnderline ? "underline" : "none",
              textAlign,
              width: "100%",
              display: "flex",
              justifyContent:
                textAlign === "left"
                  ? "flex-start"
                  : textAlign === "right"
                  ? "flex-end"
                  : "center",
              alignItems: "flex-start",
            }}
          >
            {text}
          </p>

          {/* Watermark is now visible in the preview */}
          <div className="absolute bottom-0 left-0 p-2 bg-white text-black text-opacity-50">
            by XQuotes
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row justify-center items-center mb-4 gap-4 mt-4">
        <button
          onClick={downloadImage}
          className="p-3 bg-blue-500 text-white rounded-lg flex items-center gap-2"
        >
          <Download size={20} /> Download
        </button>
        <button
          onClick={copyImage}
          className="p-3 bg-green-500 text-white rounded-lg flex items-center gap-2"
        >
          <Copy size={20} /> Copy
        </button>
      </div>
    </>
  );
};

export default ImageGeneratorPart;
