import {Navigation} from "./Navigation";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {GetOne} from "../services/Service";
import ReactMarkdown from "react-markdown";
import GitHubCSS from "github-markdown-css"
import '../css/markdown.css'

export function Detail() {
    if (GitHubCSS) console.log('use github-markdown-css.')
    const [result, setResult] = useState([])
    const {id} = useParams();
    useEffect(() => {
        GetOne(id).then((response) => {
            response.data.createTime = convertTimestamp(response.data.created_at)
            setResult(response.data)
        })
    }, [id])
    
    const convertTimestamp = (time) => {
        return new Intl.DateTimeFormat('en-US',{
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit' })
            .format(time*1000)
    }
    
    return (
        <div>
            <Navigation/>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg mx-auto w-3/4 mt-8">

                <div className="bg-white p-4 sm:p-6">

                        <h3 className="mt-0.5 text-lg text-gray-900">
                            {result.title}
                        </h3>

                    <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                        {result.createTime}
                    </time>
                    
                    <div className="mt-2  leading-relaxed text-gray-500 line-clamp-3 markdown-body">
                        <ReactMarkdown>{result.content}</ReactMarkdown>
                    </div>
                    
                </div>
            </article>
        </div>
        
    )
}
