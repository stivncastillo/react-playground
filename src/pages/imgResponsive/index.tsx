import { useState } from "react";
import "./styles.css";

const ImgResponsive = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="container">
      <div className="tabs">
        <button className={tab === 0 ? "active" : ""} onClick={() => setTab(0)}>
          SRCSET
        </button>
        <button className={tab === 1 ? "active" : ""} onClick={() => setTab(1)}>
          PICTURE
        </button>
      </div>

      {tab === 0 && (
        <>
          <h1>Srcset to Increased Performance</h1>
          <div className="image-wrapper">
            <img
              srcSet="
            /images/image-640.jpg 640w,
            /images/image-1280.jpg 1280w,
            /images/image-1920.jpg 1920w
          "
              sizes="
            (max-width: 500px) calc(100vw - 1rem),
            (max-width: 700px) calc(100vw - 2rem),
            calc(100vw - 2rem - 200px)
          "
              src="/images/image-640.jpg"
              alt="Responsive Image"
            />
          </div>
        </>
      )}

      {tab === 1 && (
        <>
          <h1>Picture to Design Control</h1>
          <div className="card">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/up.png" />
              <img
                src="/images/left.png"
                style={{ width: "100%" }}
                alt="Responsive Image"
              />
            </picture>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              explicabo quae quod dolorem accusamus, facere deserunt eius
              obcaecati fuga magni quasi expedita itaque aut nobis cumque nemo?
              Recusandae, vitae. Aliquam.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ImgResponsive;
