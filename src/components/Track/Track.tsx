const Track = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 px-4 md:px-10 lg:px-12">
      <div className="rounded-md">
        <video
          src="/track.mp4"
          autoPlay
          muted
          controls={false}
          loop
          className="h-[500px] w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Track;
