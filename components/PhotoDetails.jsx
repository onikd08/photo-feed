import Image from "next/image";

const PhotoDetails = ({ dict, photo }) => {
  const { url, title, views, share, uploaded, author, likes, tags } = photo;
  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        <Image
          className="max-w-full h-full max-h-[70vh] mx-auto"
          src={url}
          alt={title}
          height={500}
          width={900}
        />
      </div>

      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">{title}</h2>
        <div className="text-xs lg:text-sm text-black/60 mb-6">
          {tags.map((tag, idx) => (
            <span key={idx}>#{tag} </span>
          ))}
        </div>

        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          <div className="flex justify-between">
            <span>{dict.views}</span>
            <span className="font-bold">{views}</span>
          </div>

          <div className="flex justify-between">
            <span>{dict.share}</span>
            <span className="font-bold">{share}</span>
          </div>

          <div className="flex justify-between">
            <span>{dict.uploadedAt}</span>
            <span className="font-bold">{uploaded}</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <Image
                className="size-12 lg:size-14 rounded-full border"
                src={author.avatar}
                alt="avatar"
                width={100}
                height={100}
              />
              <div className="spacy-y-3">
                <h6 className="lg:text-lg font-bold">{author.name}</h6>
                <p className="text-black/60 text-xs lg:text-sm">
                  {author.followers} {dict.followers}
                </p>
              </div>
            </div>

            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image
                src="/assets/icons/follow.svg"
                className="w-5 h-5"
                alt="follow"
                height={20}
                width={20}
              />
              {dict.follow}
            </button>
          </div>

          <p className="text-xs lg:text-sm text-black/60">{author.bio}</p>
        </div>

        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/assets/icons/heart.svg"
                className="w-5 h-5"
                alt="heart"
                height={20}
                width={20}
              />
              {likes}
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/assets/icons/save.svg"
                className="w-5 h-5"
                alt="save"
                height={20}
                width={20}
              />
              {dict.save}
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/assets/icons/share.svg"
                className="w-5 h-5"
                alt="share"
                height={20}
                width={20}
              />
              {dict.share}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
