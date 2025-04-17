
interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Restaurant ${index + 1}`} className="rounded-lg shadow-md" />
      ))}
    </div>
  );
};
