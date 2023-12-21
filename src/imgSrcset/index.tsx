import "./styles.css";

const ImgSrcset = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default ImgSrcset;
