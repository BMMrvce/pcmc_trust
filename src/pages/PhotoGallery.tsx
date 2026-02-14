import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Camera, Eye, Heart, BookOpen, Microscope, Users, Briefcase, Droplet, Stethoscope, Maximize2 } from 'lucide-react';

interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  folder: string;
  images: string[];
  icon: any;
  color: string;
}

const PhotoGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<{ src: string }[]>([]);
  const [hoveredGallery, setHoveredGallery] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const galleries: GalleryCategory[] = [
    {
      id: 'eye-camps',
      title: 'Eye Camps',
      description: 'Free eye examinations, treatments, and cataract surgeries provided to rural communities',
      folder: '29th-march-11-sat-ec',
      images: [
        '/wp-content/gallery/29th-march-11-sat-ec/dsc00173.jpg',
        '/wp-content/gallery/29th-march-11-sat-ec/dsc00181.jpg',
        '/wp-content/gallery/29th-march-11-sat-ec/dsc00177.jpg',
        '/wp-content/gallery/29th-march-11-sat-ec/dsc00171.jpg',
        '/wp-content/gallery/29th-march-11-sat-ec/dsc00168.jpg',
        '/wp-content/gallery/29th-march-11-sat-ec/dsc00183.jpg',
        '/wp-content/gallery/29th-march-11-sat-ec/dsc00164.jpg',
        '/wp-content/gallery/29th-march-11-sat-ec/dsc00172.jpg',
        '/wp-content/gallery/29th-march-11-sat-ec/dsc00175.jpg',
        '/wp-content/gallery/29th-march-11-sat-ec/dsc00174.jpg'
      ],
      icon: Eye,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'dental-camp',
      title: 'Dental Camps',
      description: 'Comprehensive dental check-ups and treatments for underprivileged communities',
      folder: 'dental-camp',
      images: [
        '/wp-content/gallery/dental-camp/img_5527.jpg',
        '/wp-content/gallery/dental-camp/img_6999.jpg',
        '/wp-content/gallery/dental-camp/photo0883.jpg',
        '/wp-content/gallery/dental-camp/photo0888.jpg',
        '/wp-content/gallery/dental-camp/photo0885.jpg',
        '/wp-content/gallery/dental-camp/photo0899.jpg',
        '/wp-content/gallery/dental-camp/img_6965.jpg',
        '/wp-content/gallery/dental-camp/img_7006.jpg',
        '/wp-content/gallery/dental-camp/img_5493.jpg',
        '/wp-content/gallery/dental-camp/img_6731.jpg'
      ],
      icon: Stethoscope,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'blood-camps',
      title: 'Blood Donation Camps',
      description: 'Voluntary blood donation drives saving countless lives in our community',
      folder: 'blood-camp-7th-sep-10',
      images: [
        '/wp-content/gallery/blood-camp-7th-sep-10/img_6216.jpg',
        '/wp-content/gallery/blood-camp-7th-sep-10/img_6041.jpg',
        '/wp-content/gallery/blood-camp-7th-sep-10/img_6131.jpg',
        '/wp-content/gallery/blood-camp-7th-sep-10/img_6070.jpg',
        '/wp-content/gallery/blood-camp-7th-sep-10/img_6202.jpg',
        '/wp-content/gallery/blood-camp-7th-sep-10/img_6218.jpg',
        '/wp-content/gallery/blood-camp-7th-sep-10/mg_6057.jpg',
        '/wp-content/gallery/blood-camp-7th-sep-10/img_6040.jpg'
      ],
      icon: Droplet,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'veterinary-camps',
      title: 'Veterinary Camps',
      description: 'Free veterinary services for livestock and pets in rural areas',
      folder: 'vaterinary-camp',
      images: [
        '/wp-content/gallery/vaterinary-camp/dsc03899.jpg',
        '/wp-content/gallery/vaterinary-camp/img_1798.jpg',
        '/wp-content/gallery/vaterinary-camp/img_1821.jpg',
        '/wp-content/gallery/vaterinary-camp/dsc03903.jpg',
        '/wp-content/gallery/vaterinary-camp/dsc03942.jpg'
      ],
      icon: Heart,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'books-distribution',
      title: 'Books Distribution',
      description: 'Providing educational materials and books to underprivileged students',
      folder: 'books-distribution',
      images: [
        '/wp-content/gallery/books-distribution/img_2422.jpg',
        '/wp-content/gallery/books-distribution/copy_0_copy_0_img_2422.jpg',
        '/wp-content/gallery/books-distribution/copy_0_copy_0_img_2375.jpg',
        '/wp-content/gallery/books-distribution/copy_0_img_2422.jpg',
        '/wp-content/gallery/books-distribution/img_2375.jpg',
        '/wp-content/gallery/books-distribution/copy_0_img_2375.jpg',
        '/wp-content/gallery/books-distribution/copy_0_copy_0_img_2340.jpg',
        '/wp-content/gallery/books-distribution/copy_0_img_2340.jpg',
        '/wp-content/gallery/books-distribution/img_2340.jpg',
        '/wp-content/gallery/books-distribution/copy_0_copy_0_img_2399.jpg'
      ],
      icon: BookOpen,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'computer-donation',
      title: 'Computer Donation',
      description: 'Donating computers to schools and training centers for digital literacy',
      folder: 'computer-donation',
      images: [
        '/wp-content/gallery/computer-donation/dsc_0287.jpg',
        '/wp-content/gallery/computer-donation/dsc_0282.jpg',
        '/wp-content/gallery/computer-donation/dsc_0284.jpg',
        '/wp-content/gallery/computer-donation/dsc_0289.jpg',
        '/wp-content/gallery/computer-donation/dsc_0286.jpg'
      ],
      icon: Briefcase,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'cloth-distribution',
      title: 'Cloth Distribution',
      description: 'Distributing clothes to needy families and individuals',
      folder: 'cloth-distribution',
      images: [
        '/wp-content/gallery/cloth-distribution/dsc_0312.jpg',
        '/wp-content/gallery/cloth-distribution/dsc00121.jpg',
        '/wp-content/gallery/cloth-distribution/dsc00120.jpg',
        '/wp-content/gallery/cloth-distribution/dsc_0325.jpg',
        '/wp-content/gallery/cloth-distribution/dsc_0308.jpg',
        '/wp-content/gallery/cloth-distribution/dsc_0317.jpg',
        '/wp-content/gallery/cloth-distribution/dsc00086.jpg',
        '/wp-content/gallery/cloth-distribution/dsc00087.jpg',
        '/wp-content/gallery/cloth-distribution/dsc00093.jpg',
        '/wp-content/gallery/cloth-distribution/dsc_0299.jpg',
        '/wp-content/gallery/cloth-distribution/dsc_0297.jpg',
        '/wp-content/gallery/cloth-distribution/dsc_0310.jpg',
        '/wp-content/gallery/cloth-distribution/dsc_0319.jpg',
        '/wp-content/gallery/cloth-distribution/dsc_0315.jpg',
        '/wp-content/gallery/cloth-distribution/dsc_0314.jpg'
      ],
      icon: Users,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'aids-awareness',
      title: 'AIDS Awareness Programs',
      description: 'Educational programs spreading awareness about HIV/AIDS prevention',
      folder: 'aids-awareness',
      images: [
        '/wp-content/gallery/aids-awareness/img_4224.jpg',
        '/wp-content/gallery/aids-awareness/img_4198_0.jpg',
        '/wp-content/gallery/aids-awareness/img_4235.jpg',
        '/wp-content/gallery/aids-awareness/img_4200.jpg',
        '/wp-content/gallery/aids-awareness/img_4198.jpg'
      ],
      icon: Microscope,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'rural-schools',
      title: 'Rural Schools Visiting',
      description: 'Outreach programs supporting rural schools with resources and guidance',
      folder: 'rural-schools-visiting',
      images: ['/wp-content/gallery/rural-schools-visiting/img_0554.jpg'],
      icon: BookOpen,
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const openLightbox = (images: string[]) => {
    setCurrentImages(images.map(src => ({ src })));
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-orange-50 py-10 border-b border-orange-100 text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Photo Gallery</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Capturing moments of service, compassion, and community impact
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <p className="text-lg text-gray-700 text-center leading-relaxed mb-12 max-w-3xl mx-auto">
            Browse through our collection of photographs showcasing our various programs, events, 
            and the lives we've touched through our charitable activities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery) => {
              const IconComponent = gallery.icon;
              
              return (
                <div 
                  key={gallery.id} 
                  className="glass-card group relative overflow-hidden"
                  onMouseEnter={() => setHoveredGallery(gallery.id)}
                  onMouseLeave={() => setHoveredGallery(null)}
                >
                  <div className="relative rounded-xl mb-6 h-64 bg-gradient-to-br shadow-lg overflow-hidden">
                    <Carousel
                      autoPlay={isMobile || hoveredGallery === gallery.id}
                      infiniteLoop
                      interval={3000}
                      showThumbs={false}
                      showStatus={false}
                      showIndicators={true}
                      stopOnHover={false}
                      swipeable={true}
                      className="h-full"
                    >
                      {gallery.images.map((image, idx) => (
                        <div key={idx} className="h-64">
                          <img
                            src={image}
                            alt={`${gallery.title} ${idx + 1}`}
                            className="w-full h-64 object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5HYWxsZXJ5IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                            }}
                          />
                        </div>
                      ))}
                    </Carousel>
                    
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg z-10">
                      <IconComponent className="w-6 h-6 text-gray-800" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-10">
                      {gallery.images.length} photos
                    </div>
                    <button
                      onClick={() => openLightbox(gallery.images)}
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg z-10 hover:bg-white transition-colors"
                      aria-label="View fullscreen"
                    >
                      <Maximize2 className="w-5 h-5 text-gray-800" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{gallery.title}</h3>
                  <p className="text-gray-600 mb-4">{gallery.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={currentImages}
      />
    </div>
  );
};

export default PhotoGallery;
