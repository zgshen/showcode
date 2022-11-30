import React, {useState, useEffect} from 'react';
import {Get} from "../services/Service";
import {Navigation} from "./Navigation";
import {useNavigate} from "react-router-dom";

export function List() {

    const [result, setResult] = useState([])
    const navigate = useNavigate();
    
    useEffect(() => {
        Get("list").then((response) => {
            const dto = response.data.map((item) => ({
                "id": item.id,
                "title": item.title,
                "content": item.content,
                "tag": item.tag,
                "createdAt": new Intl.DateTimeFormat('en-US',{
                        year: 'numeric', 
                        month: '2-digit', 
                        day: '2-digit', 
                        hour: '2-digit', 
                        minute: '2-digit', 
                        second: '2-digit' })
                    .format(item.created_at*1000)
            }));

            setResult(dto)
        })
    }, [])
    
    const handleDetail = (e, id) => {
        console.log(id)
        navigate('/detail?id='+id)
    }
    
    return (
            <div>
                <Navigation/>
                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                        <div
                            className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
                        >
                            {
                                result.map((res) => {
                                    return (
                                        <div className="mb-8 sm:break-inside-avoid"
                                             onClick={(e) => {handleDetail(e, res.id)}}
                                        >
                                            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                                                <p className="leading-relaxed font-bold">
                                                    {res.title}
                                                </p>
                                                <p className="leading-relaxed text-gray-700">
                                                    {res.content}
                                                </p>
                                            </blockquote>

                                            <div className="mt-4 flex items-center gap-4">

                                                <div className="text-sm">
                                                    <p className="font-medium">{res.tag}</p>
                                                    <p className="mt-1">{res.createdAt}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
    )
} 
