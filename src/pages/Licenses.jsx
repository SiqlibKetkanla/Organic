import React from "react";

const LicenseInfo = () => {
  return (
    <div className="max-w-6xl mx-auto p-10 space-y-16 text-gray-700">
      
      
      <div className="grid grid-cols-3 gap-10">
        <h2 className="text-3xl font-bold text-gray-800">Icon & Graphics</h2>

        <div className="col-span-2 space-y-4 text-sm leading-relaxed">
          <p>
            Icons and Graphics are manually designed by the{" "}
            <span className="text-teal-600 font-semibold">
              VictorFlow
            </span>{" "}
            Templates team. You may download these and edit them to fit your
            website without asking for permission or providing credit.
          </p>

          <p>
            Upon purchasing Software UI Kit Template our team grants you a
            nonexclusive, worldwide copyright license to download, copy,
            modify, and use the icons.
          </p>
        </div>
      </div>

  
      <div className="grid grid-cols-3 gap-10">
        <h2 className="text-3xl font-bold text-gray-800">Photography</h2>

        <div className="col-span-2 space-y-6 text-sm leading-relaxed">
          <p>
            All images used in the Organick Webflow Template are licensed for
            free personal and commercial use. If you'd like to use any specific
            image, you can check the licenses and download the images for free
            on Unsplash, Pexels and Freepik.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Unsplash
            </h3>
            <p className="text-teal-600">
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
              Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14,
              Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image
              21, Image 22, Image 23, Image 24, Image 25
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Pixel
            </h3>
            <p className="text-teal-600">
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
              Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
              14, Image 15, Image 16, Image 17
            </p>
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-3 gap-10">
        <h2 className="text-3xl font-bold text-gray-800">Font</h2>

        <div className="col-span-2 text-sm leading-relaxed">
          <p>
            Organick template uses free licensed Google Fonts. Please check{" "}
            <span className="text-teal-600 font-semibold">Roboto</span>,{" "}
            <span className="text-teal-600 font-semibold">Yellowtail</span> and{" "}
            <span className="text-teal-600 font-semibold">Open Sans</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LicenseInfo;