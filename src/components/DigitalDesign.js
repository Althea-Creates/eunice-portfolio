import { useEffect } from "react";
import "../App.css"; 

const DigitalDesign = () => {
  useEffect(() => {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";

    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.className = "lightbox-close";

    const overlayImg = document.createElement("img");

    overlay.appendChild(closeBtn);
    overlay.appendChild(overlayImg);
    document.body.appendChild(overlay);

    const openLightbox = (e, link) => {
      e.preventDefault();
      overlayImg.src = link.href;
      overlay.classList.add("active");
    };

    const closeLightbox = () => {
      overlay.classList.remove("active");
    };

    document.querySelectorAll(".lightbox").forEach(link => {
      link.addEventListener("click", (e) => openLightbox(e, link));
    });

    closeBtn.addEventListener("click", closeLightbox);

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeLightbox();
      }
    });

    // Cleanup
    return () => {
      document.querySelectorAll(".lightbox").forEach(link => {
        link.removeEventListener("click", (e) => openLightbox(e, link));
      });
      closeBtn.removeEventListener("click", closeLightbox);
      overlay.removeEventListener("click", closeLightbox);
      document.body.removeChild(overlay);
    };
  }, []);

  return (
    <section className="section digital">
      <h2>Digital Design</h2>
      <p>
        In this section, it shows some of my digital/social media projects. Each of my works reflects my creativity and inspiring connections with others.
      </p>
        <div className="digital-gallery">

          <div className="project-group">
            <p className="caption"><strong>Logo variations and YouTube banner made on Adobe Photoshop</strong></p>
            <div className="project-group-images">
              <a href="digital/EVERy Good Things ICON.jpg" className="lightbox">
                <img src="digital/EVERy Good Things ICON.jpg" alt="EVERy Good Things ICON" />
              </a>
              <a href="digital/EVERy Good Things ICON new.jpg" className="lightbox">
                <img src="digital/EVERy Good Things ICON new.jpg" alt="EVERy Good Things ICON new" />
              </a>
              <a href="digital/EVERY Good Things Banner FINAL NA FINAL.jpg" className="lightbox">
                <img src="digital/EVERY Good Things Banner FINAL NA FINAL.jpg" alt="EVERY Good Things Banner FINAL NA FINAL" />
              </a>
            </div>
          </div>

          <div className="project-group">
            <p className="caption"><strong>Logo and X (Twitter) cover made on Canva</strong></p>
            <div className="project-group-images">
              <a href="digital/FINAL LOGO.png" className="lightbox">
                <img src="digital/FINAL LOGO.png" alt="FINAL LOGO" />
              </a>
              <a href="digital/FINAL COVER.png" className="lightbox">
                <img src="digital/FINAL COVER.png" alt="FINAL COVER" />
              </a>
            </div>
          </div>

          <div className="project-group">
            <p className="caption"><strong>Logo variations for an Anchor podcast</strong></p>
            <div className="project-group-images">
              <a href="digital/podcast cover.png" className="lightbox">
                <img src="digital/podcast cover.png" alt="Podcast Cover" />
              </a>
              <a href="digital/Podcast Cover eps.png" className="lightbox">
                <img src="digital/Podcast Cover eps.png" alt="Podcast Cover eps" />
              </a>
            </div>
          </div>

        </div>

    </section>
  );
};

export default DigitalDesign;