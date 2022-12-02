import {PostData} from "../services/Service";
import {useNavigate} from "react-router-dom";

export function Create() {
    const navigate = useNavigate();
    const handlePost = (e) => {
        e.preventDefault()//阻止表单提交的时候重新加载页面
        const data = form2kv(e.target)
        if (!data.title || !data.tag || !data.content) {
            return alert('input require values.')
        }
        
        PostData(data).then((response) => {
            if (response.status === 200) {
                navigate('/list')
            } else {
                alert(response.statusText)
                return
            }
        }).catch(err => {
            alert(err)
        })
    }

    const form2kv = (form) => {
        const fd = new FormData(form);
        const ret = {};
        for (let key of fd.keys()) {
            ret[key] = fd.get(key);
        }
        return ret;
    }
    
    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form onSubmit={handlePost} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="title">Title</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Title"
                                    type="text"
                                    id="title"
                                    name="title"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="tag">Tag</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Tag, separated by commas"
                                        type="tag"
                                        id="tag"
                                        name="tag"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="content">Content</label>
                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Content"
                                    rows="20"
                                    id="content"
                                    name="content"
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                                >
                                    <span className="font-medium"> Submit </span>

                                </button>
                            </div>
                        </form>
                    </div>
            </div>
        </section>
    )
}