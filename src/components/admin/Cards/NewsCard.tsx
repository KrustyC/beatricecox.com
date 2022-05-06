import { News } from "@/types/global";

interface NewsCardProps {
  news: News;
  onWantToRemoveNews: VoidFunction;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  news,
  onWantToRemoveNews,
}) => (
  <div className="bg-white shadow rounded-lg p-4 ">
    <div className="flex flex-col">
      <span className="text-xl font-bold text-gray-900">{news.title}</span>

      <div className="flex items-end mr-4 mb-2 text-sm text-gray-600">
        Expire after: {news.expirationDate}
      </div>

      <div className="flex items-end justify-end mt-2 w-100">
        <div>
          <a
            href={`/admin/news/${news._id}`}
            className="btn-admin btn-primary btn-sm text-base uppercase mr-2"
          >
            Edit
          </a>

          <button
            className="btn-admin btn-danger btn-sm text-base uppercase"
            onClick={onWantToRemoveNews}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
);
