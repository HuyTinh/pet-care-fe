import { useState } from "react";
import useFetch from "../../../hooks/useFecth";
import { IBlog } from "../../../types/blog.type"

import { IComment } from "../../../types/comment.type"
import ReactMarkdown from 'react-markdown';
import { displayCustomDate } from "../../../utils/date";

export const Blog = () => {

    const { data } = useFetch('http://localhost:1337/api/blogs?populate=*')
    const blogs = (data as any)?.data || [];
    const [blog, setBlog] = useState<IBlog>();
    const user_id = 2;

    const [content, setContent] = useState<string>("");
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState<number | null>(null);

    function postComments(comment: IComment) {

        fetch(`http://localhost:1337/api/blogs/${blog?.documentId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: { comments: [...(blog as any)?.comments || [], comment] } })
        })
            .then(response => response.json()).then(data => setBlog((prevState: any) => {

                return { ...prevState, comments: data.data?.comments }
            }));
    }

    function eidtComments(comment: IComment) {

        fetch(`http://localhost:1337/api/blogs/${blog?.documentId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: {
                    comments: [...(blog as any)?.comments.map((c: any) => {
                        if (c.id == comment.id) {
                            return comment
                        }
                        return c
                    })]
                }
            })
        })
            .then(response => response.json()).then(data => setBlog((prevState: any) => {

                return { ...prevState, comments: data.data.comments }
            }));

    }
    return (
        <div className="relative">
            <div
                className="h-[42rem] w-full bg-cover mb-5"
                style={{
                    backgroundImage: "url(/src/assets/images/booking_banner.jpg)",
                }}
            ></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-24 space-y-5 text-3xl text-white">
                <div className="text-center text-5xl font-bold">Blog</div>
                <div className="text-xl">
                    Where pets and owners live happily together
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-5 p-5 *:text-[#0d74b1]">
                {blogs.map((blog: IBlog) => (
                    <div
                        key={blog.id}
                        className="bg-base-300 text-white rounded-xl p-4 flex flex-col w-[350px]"
                        onClick={() => {
                            setBlog(blog);
                            (document.getElementById('my_modal_blog') as any)?.showModal();
                        }}
                    >
                        <div>
                            <img
                                src={`http://localhost:1337${(blog?.blogImage as any)?.url}`}
                                alt="All-Access Pass"
                                className="w-full h-56 object-cover rounded-lg"
                            />
                            <h3 className="text-lg font-bold mt-4">{blog.blogTitle}</h3>
                            <div className="flex-grow"></div>
                            <div className="text-sm">{displayCustomDate(new Date(blog.dateCreateBlog))}</div>
                            <div className='flex justify-between'>
                                <p className="text-gray-700 mt-2">{blog.blogAuthor}</p>
                                <p className="text-gray-700 mt-2">5 lượt xem</p>
                            </div>
                        </div>
                    </div>
                ))}
                <dialog id="my_modal_blog" className="modal *:text-black">
                    <div className="modal-box h-full max-w-7xl">
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full">
                                {blog ? (
                                    <h2 className="text-3xl font-bold mb-4 text-center">{blog.blogTitle}</h2>
                                ) : (
                                    <h2 className="text-3xl font-bold mb-4 text-center">Bài viết không tồn tại</h2>
                                )}
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <img
                                            src={`http://localhost:1337${(blog?.authorImage as any)?.url}`}
                                            alt="Project Image"
                                            className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                        />
                                        <div>
                                            <p className='mx-3'>{blog?.blogAuthor}</p>
                                            <p className='mx-3'>{blog?.slogan}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-6 space-x-4">
                                        <button className="bg-gray-200 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-300">
                                            Like
                                        </button>
                                        <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700">
                                            Save to favorites
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row items-center py-16 px-8">
                            <div className="w-full md:w-1/2">
                                <img
                                    src={`http://localhost:1337${(blog?.blogImage as any)?.url}`}
                                    alt="Kitten with bubbles"
                                    className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                                />
                            </div>

                            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                                <h2 className="text-3xl font-bold mb-4">HƯỚNG DẪN</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    <ReactMarkdown>{blog?.blogInstruct || ''}</ReactMarkdown>
                                </p>
                            </div>

                        </div>
                        <div>
                            {blog?.blogVideo &&
                                <video
                                    src={`http://localhost:1337${(blog?.blogVideo as any)?.url}`}
                                    controls
                                    className="rounded-lg shadow-2xl w-full h-[500px]"
                                />}
                        </div>


                        <div className="text-black p-4">
                            <h2 className="text-lg font-semibold mb-4">2,973 bình luận</h2>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="Viết bình luận..."
                                    className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                                <div className="flex items-center mt-3">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className={`w-4 h-4 cursor-pointer ${(hover || rating) > index
                                                ? 'text-yellow-500'
                                                : 'text-gray-400'
                                                }`}
                                            onClick={() => setRating(index + 1)}
                                            onMouseEnter={() => setHover(index + 1)}
                                            onMouseLeave={() => setHover(null)}
                                        >
                                            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.984L19.336 24 12 20.186 4.664 24 6 15.734 0 9.75l8.332-1.595L12 .587z" />
                                        </svg>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <p></p>
                                    <button
                                        className="border w-[100px] rounded shadow text-[18px] hover:bg-slate-300 hover:border hover:border-gray-600 mt-3"
                                        onClick={() => {
                                            if (!content || content.trim() === "") {
                                                alert("Comments cannot be empty!");
                                                return;
                                            }
                                            postComments({
                                                avatar: "a",
                                                content: content as any,
                                                time: "2024-10-13",
                                                user: "dua",
                                                user_id: user_id,
                                                id: self.crypto.randomUUID() as any,
                                                rating: rating,
                                            });
                                        }}
                                    >
                                        Comment
                                    </button>
                                </div>
                            </div>

                            {(blog as any)?.comments?.map((comment: IComment) => (
                                <div key={comment.id} className="mb-6 *:text-black">
                                    <div className="flex items-start space-x-4">
                                        <img
                                            src={`${(comment?.avatar as any)}`}
                                            className="rounded-full object-cover w-[50px] h-[50px]"
                                        />
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <p className="font-semibold">{comment.user}</p>
                                                <span className="text-gray-400 text-sm">{comment.time}</span>
                                            </div>
                                            <div >
                                                <div>
                                                    <textarea
                                                        className="whitespace-pre-line mt-2 w-[800px] h-[auto] mb-2"
                                                        disabled={(comment as any)?.user_id != user_id} onChange={(e) => setContent(e.target.value as any)} >{comment.content}
                                                    </textarea>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="flex items-center space-x-1">
                                                        {[...Array(5)].map((_, index) => (
                                                            <svg
                                                                key={index}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor"
                                                                viewBox="0 0 24 24"
                                                                className={`w-3 h-3 ${index < comment.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                                                            >
                                                                <path d="M12 .587l3.668 7.568L24 9.75l-6 5.984L19.336 24 12 20.186 4.664 24 6 15.734 0 9.75l8.332-1.595L12 .587z" />
                                                            </svg>
                                                        ))}
                                                        <span className="text-gray-500 text-sm">({comment.rating}/5)</span>
                                                    </div>
                                                </div>
                                                <button
                                                    className="w-[80px] shadow rounded text-[12px] hover:bg-slate-300 hover:border hover:border-gray-600 "
                                                    onClick={() => eidtComments({
                                                        avatar: comment.avatar,
                                                        content: content as any,
                                                        time: "2024-10-13",
                                                        user: "dua",
                                                        user_id: (comment as any)?.user_id,
                                                        id: comment.id,
                                                        rating: 5
                                                    })}>Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    );
};
