const Hero = () => {
  return (
    <div
      className={`pointer-events-none flex h-2/3 items-center justify-center`}
    >
      <video
        src="./hero_video.mp4"
        autoPlay
        muted
        controls={false}
        loop
        className="object-cover"
      />
    </div>
  );
};

export default Hero;
