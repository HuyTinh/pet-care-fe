import { useState } from "react";
import useFetch from "../../../hooks/useFecth";
import { IBlog } from "../../../types/blog.type"
import ReactMarkdown from 'react-markdown';
import { displayCustomDate } from "../../../utils/date";

export const Blog = () => {
    const { loading, error, data } = useFetch('http://localhost:1337/api/blogs?populate=*')

    const blogs = (data as any)?.data || [];

    const [blog, setBlog] = useState<IBlog>();

    const [comments] = useState([
        {
            id: 1,
            avatar: "https://vnn-imgs-f.vgcloud.vn/2022/01/18/18/kim-da-mi-our-beloved-summer-dep-me-hon-thoi-chua-ra-mat-11.jpg",
            user: '@kimdami',
            time: '2 giờ trước',
            content:
                'rất hữu ích, cảm ơn cám vị bác sĩ có tâm như này',
            likes: 769,
            replies: 27,
        },
        {
            id: 2,
            avatar: "https://image.tienphong.vn/w1000/Uploaded/2024/neg-sleclyr/2023_02_05/kim-yoo-jung5-2416.jpeg",
            user: '@kimyouyoung',
            time: '2 phút trước',
            content:
                'Ai đọc được bình luận này thì mình: Chúc gia đình bạn bình an và luôn may mắn',
            likes: 2700,
            replies: 119,
        },
        {
            id: 3,
            avatar: "https://upload.wikimedia.org/wikipedia/commons/0/08/240314_Kim_Ji-won.jpg",
            user: '@kimjiwon',
            time: '15 phút trước',
            content:
                'có cách nào cho mèo ăn Bánh Bao khong ạ',
            likes: 208,
            replies: 0,
        },
        {
            id: 4,
            avatar: "https://i.mydramalist.com/4epPyY_5c.jpg",
            user: '@goyounjung',
            time: '15 phút trước',
            content:
                'Sống ngoài đảo làm việc luôn hoàn hảo',
            likes: 208,
            replies: 0,
        },
    ]);
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

                        <div className="text-black p-4">
                            <h2 className="text-lg font-semibold mb-4">2,973 bình luận</h2>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="Viết bình luận..."
                                    className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none"
                                />
                            </div>

                            {comments.map((comment) => (
                                <div key={comment.id} className="mb-6">
                                    <div className="flex items-start space-x-4">
                                        <img src={comment.avatar} alt="" className="rounded-[50%] object-cover w-[50px] h-[50px]" />
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <p className="font-semibold">{comment.user}</p>
                                                <span className="text-gray-400 text-sm">{comment.time}</span>
                                            </div>
                                            <p className="whitespace-pre-line mt-2">{comment.content}</p>
                                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                                                <button className="hover:text-white">👍 {comment.likes} lượt thích</button>
                                                {comment.replies > 0 && (
                                                    <button className="hover:text-white">{comment.replies} phản hồi</button>
                                                )}
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
