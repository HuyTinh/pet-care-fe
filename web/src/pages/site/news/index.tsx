import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import newFetch from "../../../shared/hooks/newFecth";
import { INews } from "../../../@types/new.type";
export const NewsPage = () => {
    const { documentId } = useParams();
    const [documentIdSecond, setDocumentIdSecond] = useState(documentId);
    console.log(documentId)
    console.log(documentIdSecond)
    const [news, setNews] = useState([]);
    const [isFetched, setIsFetched] = useState(false)
    const { newData } = newFetch('http://localhost:1337/api/news?populate=*')
    const newss = (newData as any)?.data || [];

    useEffect(() => {
        if (documentIdSecond) {
            fetch(`http://localhost:1337/api/news/${documentIdSecond}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(response => response.json())
                .then(data => {
                    setNews(data.data);
                    console.log("dataa: ", data.data
                    )

                })
                .catch(error => console.error("Error fetching news data:", error));
        }
    }, [documentIdSecond]);

    const navigate = useNavigate()
    function handleNew(documentId: any) {
        setDocumentIdSecond(documentId)
        navigate(`/new/${documentId}`)
    }

    console.log(news)
    return (

        <div className="container mx-auto px-4 py-32 flex justify-start gap-4">
            <div className="w-3/4">
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
            <div className="bg-gray-200 p-6 rounded-lg w-1/4 mb-8 hover:cursor-pointer">
                {newss.map((newSet: INews) => (
                    <div className="hover:bg-blue-300 hover:rounded p-2 transition-all duration-300">
                        <p className="text-sm font-bold" onClick={() => handleNew(newSet.documentId)}>{newSet?.titleNew}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};
