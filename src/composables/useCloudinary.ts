import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { lazyload, placeholder } from '@cloudinary/vue';

export default function useCloudinary() {
  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: 'dkcw58wif',
    },
  });

  const plugins = [lazyload(), placeholder()];

  const createImageInstance = (publicId: string): CloudinaryImage => {
    return cloudinary.image(publicId);
  };

  return {
    createImageInstance,
    cloudinary,
    plugins,
  };
}
