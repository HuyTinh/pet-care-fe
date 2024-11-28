import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
export const NewsPage = () => {
    const { newsId } = useParams();
    const [news, setNews] = useState([]);
    const [isFetched, setIsFetched] = useState(false)
    useEffect(() => {
        if (!isFetched) {
            fetch(`http://localhost:1337/api/news/${newsId}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(response => response.json())
                .then(data => {
                    setNews(data.data);
                    setIsFetched(true);
                })
                .catch(error => console.error("Error fetching news data:", error));
        }
    }, [newsId, isFetched]);

    return (

        <div className="container mx-auto px-4 py-32 max-w-7xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {(news as any)?.titleNew}
            </h1>
            <p className="text-blue-500 text-sm mb-4">
                {(news as any)?.authorNew}
            </p>
            <p className="text-gray-700">
                <ReactMarkdown>{(news as any)?.contentNew}</ReactMarkdown>
            </p>
        </div>
    );
};
