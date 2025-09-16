import React, { useState, useRef, useEffect } from 'react';

const ARViewer = ({ destination }) => {
  const [isARSupported, setIsARSupported] = useState(false);
  const [isARActive, setIsARActive] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check for AR support (simplified check)
    const checkARSupport = async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        setIsARSupported(true);
      }
    };
    checkARSupport();
  }, []);

  const startAR = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsARActive(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera for AR view');
    }
  };

  const stopAR = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsARActive(false);
  };

  if (!isARSupported) {
    return (
      <div className="card p-6 text-center">
        <div className="text-6xl mb-4">📱</div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          AR View Not Available
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          AR features require a device with camera support
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          AR Experience
        </h3>
        <button
          onClick={isARActive ? stopAR : startAR}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isARActive
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-primary-600 hover:bg-primary-700 text-white'
          }`}
        >
          {isARActive ? 'Stop AR' : 'Start AR'}
        </button>
      </div>

      {isARActive ? (
        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-64 object-cover rounded-lg"
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-64 rounded-lg"
            style={{ pointerEvents: 'none' }}
          />
          
          {/* AR Overlay Content */}
          <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg">
            <h4 className="font-semibold">{destination.name}</h4>
            <p className="text-sm opacity-90">{destination.region}</p>
            <div className="flex items-center mt-2">
              <span className="text-xs bg-primary-600 px-2 py-1 rounded">
                {destination.bestTime}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🎯</div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Point Your Camera
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Use AR to see {destination.name} information overlaid on your camera view
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            • Point camera at landmarks<br/>
            • Get real-time information<br/>
            • Interactive 3D elements
          </div>
        </div>
      )}
    </div>
  );
};

export default ARViewer;
