import { useState } from "react";

function PhotographySection() {
    const photos = [
        {
            src: "photos/sample 8.jpg",
            alt: "Sample 8",
            caption: "Motion portrait shot",
            category: "Nature",
        },
        {
            src: "photos/IMG_3349_edited_1.jpg",
            alt: "IMG_3349 Edited",
            caption: "Casual style photographed at night",
            category: "Nature",
        },
        {
            src: "photos/sample7.jpg",
            alt: "Sample 7",
            caption: "Freshly picked avocados",
            category: "Nature",
        },
        {
            src: "photos/yuchengco.jpg",
            alt: "Yuchengco",
            caption: "Quiet day in Carvajal Street, Bindondo",
            category: "Urban",
        },
        {
            src: "photos/sample 5.jpg",
            alt: "Sample 5",
            caption: "Streetwear look shot somewhere in Cubao",
            category: "Urban",
        },
        {
            src: "photos/IMG_1300_edited.jpg",
            alt: "IMG_1300 Edited",
            caption: "UST Paskuhan 2019",
            category: "Urban",
        },
        {
            src: "photos/IMG_3273_edited_2.jpg",
            alt: "IMG_3273 Edited",
            caption: "Makati CBD’s underground walkway",
            category: "People",
        },
        {
            src: "photos/IMG_7097_edited.jpg",
            alt: "IMG_7097 Edited",
            caption: "Morning at Mamao Beach",
            category: "Nature",
        },
        {
            src: "photos/IMG_3248_edited.jpg",
            alt: "IMG_3248 Edited",
            caption: "Rice fields in Quezon Province",
            category: "People",
        },
    ];

  // manage captions visibility
  const [visibleCaptions, setVisibleCaptions] = useState(
    Array(photos.length).fill(false)
  );

  const toggleCaption = (index) => {
    setVisibleCaptions((prev) => {
      const newVisibility = [...prev];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  return (
    <section className="section photography">
      <h2>Photography</h2>
      <p>In this section, you'll discover a curated selection of my photography work. Every moment is worth capturing because stories can be shared through the lens.
        </p>
      <div className="photo-grid">
        {photos.map(({ src, alt, caption }, i) => (
          <figure key={i} className="photo-card">
            <img
              src={src}
              alt={alt}
              onClick={() => toggleCaption(i)}
              style={{ cursor: "pointer" }}
            />
            {visibleCaptions[i] && (
              <figcaption>
                <p>{caption}</p>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

export default PhotographySection;