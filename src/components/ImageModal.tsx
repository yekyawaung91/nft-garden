import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export default function ImageModal({ isOpen, onClose, imageUrl, title }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="relative max-w-4xl max-h-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Image Container */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-800">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto max-h-[90vh] object-contain"
          />
          
          {/* Title Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}