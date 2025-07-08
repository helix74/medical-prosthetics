'use client';

import { memo, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { twMerge } from 'tailwind-merge';
import { Badge } from '@/components/ui/base/Badge';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const stats = [
  { label: "Années d'expérience", value: '10+' },
  { label: 'Centres partenaires', value: '10+' },
  { label: 'Composants prothétiques', value: '10000+' },
  { label: 'Fournisseurs internationaux', value: '20+' }
];

const Hero = memo(function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(59); // Hardcoded duration as fallback (59 seconds)
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Format time in minutes:seconds
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Get video duration more reliably
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Function to set duration
    const setVideoDuration = () => {
      // Only update if we got a valid duration
      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        setDuration(video.duration);
      }
    };

    // Try multiple approaches to get the duration
    video.addEventListener('loadedmetadata', setVideoDuration);
    video.addEventListener('durationchange', setVideoDuration);
    
    // Try to get duration immediately if video is already loaded
    if (video.readyState >= 2 && video.duration && !isNaN(video.duration)) {
      setDuration(video.duration);
    }

    // Cleanup
    return () => {
      video.removeEventListener('loadedmetadata', setVideoDuration);
      video.removeEventListener('durationchange', setVideoDuration);
    };
  }, []);

  // Update current time as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const replay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !videoRef.current) return;
    
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = offsetX / rect.width;
    
    if (videoRef.current.duration) {
      videoRef.current.currentTime = percentage * videoRef.current.duration;
    }
  };

  return (
    <BackgroundLayers variant="frost" className={twMerge(
      'min-h-screen flex items-center',
      'pt-16 lg:pt-0',
      'pb-8 md:pb-8 lg:pb-8'
    )}>
      <div className={CONTAINER_STYLES.variants.default}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={STAGGER_CHILDREN}
            initial="initial"
            animate="animate"
            className="lg:col-span-6"
          >
            {/* Badge */}
            <motion.div
              variants={FADE_IN_UP}
              className={twMerge(
                'inline-flex items-center px-3 py-1.5 rounded-full mb-6 mt-4',
                'bg-[#e8f4f9] text-[#187baa]',
                'border border-[#187baa]/10',
                'backdrop-blur-sm',
                'text-sm',
                EFFECTS_STYLES.base.transition.base
              )}
            >
              <FontAwesomeIcon icon={faHospital} className="mr-1.5 text-[#187baa]" />
              <span className="font-medium">Solutions Orthopédiques Innovantes</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getHeading(1),
                'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent',
                'font-bold mb-6 leading-tight',
                'text-center lg:text-justify'
              )}
            >
              Des produits de qualité pour les spécialistes de la mobilité
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 mt-4 mb-8',
                'leading-relaxed',
                'text-center lg:text-justify mx-auto',
                'max-w-md lg:max-w-2xl'
              )}
            >
              Delta Med Plus s'engage à fournir des solutions orthopédiques de haute qualité, 
              adaptées aux besoins spécifiques de chaque patient, tout en offrant un support 
              technique expert à nos partenaires de santé.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={FADE_IN_UP}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <Link href="/produits">
                <button className={twMerge(
                  'px-8 py-4 rounded-xl',
                  'bg-[#187baa] text-white',
                  'shadow-lg shadow-[#187baa]/20',
                  'hover:bg-[#156a93]',
                  'transition duration-200',
                  'flex items-center gap-2'
                )}>
                  Découvrir nos produits
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
              <Link href="/contact">
                <button className={twMerge(
                  'px-8 py-4 rounded-xl',
                  'bg-white text-[#187baa]',
                  'border border-[#187baa]/20',
                  'shadow-lg shadow-[#187baa]/10',
                  'hover:bg-[#187baa]/10',
                  'transition duration-200'
                )}>
                  Nous contacter
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={FADE_IN_UP}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={twMerge(
                    'text-2xl font-bold text-[#187baa] mb-1',
                    'bg-white rounded-lg p-3',
                    'shadow-lg shadow-[#187baa]/10',
                    'border border-[#187baa]/10'
                  )}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            variants={FADE_IN_UP}
            initial="initial"
            animate="animate"
            className="lg:col-span-6 relative w-full max-w-2xl mx-auto lg:max-w-none flex items-center"
          >
            <div className={twMerge(
              'relative w-full overflow-hidden rounded-2xl',
              'aspect-[16/9] sm:aspect-[16/9] lg:aspect-[16/9]',
              'bg-white',
              'shadow-xl shadow-[#187baa]/15',
              'border border-[#187baa]/10',
              'group'
            )}>
              {/* Added clickable overlay */}
              <div 
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={togglePlay}
              ></div>

              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted={isMuted}
                className="absolute inset-0 w-full h-full object-cover object-center"
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause icon overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className={twMerge(
                    'p-4 rounded-full',
                    'bg-white/80 text-[#187baa]',
                    'flex items-center justify-center',
                    'w-16 h-16',
                    'animate-pulse'
                  )}>
                    {currentTime >= duration - 0.5 ? (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                      </svg>
                    ) : (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </div>
                </div>
              )}

              {/* Enhanced Video Controls */}
              <div className={twMerge(
                'absolute bottom-0 left-0 right-0',
                'p-4',
                'bg-gradient-to-t from-black/60 to-transparent',
                'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                'z-20'
              )}>
                {/* Progress bar */}
                <div 
                  ref={progressBarRef}
                  className="h-2.5 w-full bg-white/30 rounded-full mb-3 cursor-pointer relative overflow-hidden"
                  onClick={handleProgressBarClick}
                >
                  {/* Background track */}
                  <div className="absolute inset-0 bg-gray-200/30 rounded-full"></div>
                  
                  {/* Progress fill */}
                  <div 
                    className="absolute top-0 left-0 h-full bg-[#187baa] rounded-full"
                    style={{ width: `${Math.min((currentTime / (duration || 1)) * 100, 100)}%` }}
                  ></div>
                  
                  {/* Handle indicator - even smaller and better positioned */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-sm border border-[#187baa] pointer-events-none"
                    style={{ 
                      left: `calc(${Math.min((currentTime / (duration || 1)) * 100, 100)}%)`,
                      transform: 'translate(-50%, -50%)',
                      display: currentTime > 0 ? 'block' : 'none',
                      boxShadow: '0 1px 2px rgba(24, 123, 170, 0.3)'
                    }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Play/Pause or Replay button */}
                    <button
                      onClick={currentTime >= duration - 0.5 ? replay : togglePlay}
                      className={twMerge(
                        'p-2 rounded-full',
                        'bg-white/90 text-[#187baa]',
                        'hover:bg-white',
                        'transition-colors duration-200',
                        'flex items-center justify-center',
                        'w-10 h-10'
                      )}
                    >
                      {currentTime >= duration - 0.5 ? (
                        // Replay icon
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                        </svg>
                      ) : isPlaying ? (
                        // Pause icon
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                      ) : (
                        // Play icon
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      )}
                    </button>

                    {/* Time display with guaranteed duration */}
                    <span className="text-white text-xs font-medium bg-black/20 px-2 py-1 rounded-md">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Mute button */}
                  <button
                    onClick={toggleMute}
                    className={twMerge(
                      'p-2 rounded-full',
                      'bg-white/90 text-[#187baa]',
                      'hover:bg-white',
                      'transition-colors duration-200',
                      'flex items-center justify-center',
                      'w-10 h-10'
                    )}
                  >
                    {isMuted ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3 3v-6.7l2.29 2.29c-.13.09-.23.2-.34.31H12c-.55 0-1 .45-1 1s.45 1 1 1h.34L15.63 20c-.39.39-.38 1.01 0 1.41.39.39 1.02.39 1.41 0l.7-.7-13.41-13.41a.996.996 0 00-1.41 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </BackgroundLayers>
  );
});

export default Hero; 