import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INew } from "../../../types/new.type";
import newFetch from "../../../hooks/newFecth";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { displayCustomDate } from "../../../utils/date";
export const NewContent = () => {
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
                    <p>{displayCustomDate(new Date((news as any)?.createDate))}</p>
                </p>
                
                <p className="text-gray-700">
                    <ReactMarkdown>{(news as any)?.contentNew}</ReactMarkdown>
                </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg w-1/4 mb-8 hover:cursor-pointer">
                {newss.map((newSet: INew) => (
                    <div className="hover:bg-blue-300 hover:rounded p-2 transition-all duration-300 flex justify-start gap-2" onClick={() => handleNew(newSet.documentId)}>
                        <div className="w-[400px]">
                            <img
                                src={`http://localhost:1337${(newSet?.imageNew as any)?.url}`}
                                alt="Article banner"
                                className="w-[500px] h-[100px] rounded-lg"
                            />
                        </div>
                        <div>
                        <p className="text-sm font-bold" >{newSet?.titleNew}</p>
                        <p>{displayCustomDate(new Date(newSet.createDate))}</p>
                        </div>
                       
                        
                    </div>
                ))}
            </div>

        </div>
    );
};
