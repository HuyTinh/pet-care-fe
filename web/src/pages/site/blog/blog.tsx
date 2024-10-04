import { useState } from "react";

export const Blog = () => {
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
        <div className="flex flex-col items-center p-6">
            <div className="flex space-x-8 mb-6">
                {/* <h3>Trang Blog</h3> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-gray-800 text-white rounded-xl p-4 flex flex-col w-[350px]" onClick={() => document.getElementById('my_modal_blog').showModal()}>
                    <img
                        src="https://pethouse.com.vn/wp-content/uploads/2024/03/hinh-anh-minh-hoa-giun-san-o-cho.jpg"
                        alt="All-Access Pass"
                        className="w-full h-56 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-bold mt-4">Tẩy giun tại nhà</h3>
                    <div className="flex-grow"></div>
                    <div className='flex justify-between'>
                        <p className="text-gray-400 mt-2">Dr.Tan</p>
                        <p className="text-gray-400 mt-2">5 lượt xem</p>
                    </div>

                    <dialog id="my_modal_blog" className="modal *:text-black">
                        <div className="modal-box h-full max-w-7xl">
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full">
                                    <h2 className="text-3xl font-bold mb-4 text-center">Tẩy giun tại nhà</h2>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img
                                                src="https://bazaarvietnam.vn/wp-content/uploads/2021/12/phim-cua-kim-da-mi-dong-d_a___m_i-1.jpg"
                                                alt="Project Image"
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />
                                            <div>
                                                <p className='mx-3'>Dr.Tan</p>
                                                <p className='mx-3'>Bác sĩ chuyên chữa bệnh sĩ</p>
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
                                        src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/x-rays-image-big.jpg"
                                        alt="Kitten with bubbles"
                                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                                    <h2 className="text-3xl font-bold mb-4">Tẩy giun</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        <ul>
                                            <li>
                                                <b>1. Chọn loại thuốc tẩy giun phù hợp</b>
                                                <p>Thuốc tẩy giun dạng viên hoặc lỏng: Phổ biến nhất và dễ sử dụng. Có thể mua từ các cửa hàng thú y hoặc bác sĩ thú y sẽ kê đơn cho bạn.</p>
                                                <p>Thuốc tẩy giun theo độ tuổi và trọng lượng: Hãy đọc kỹ hướng dẫn để đảm bảo liều lượng phù hợp với cân nặng và tuổi của thú cưng.</p>
                                            </li>
                                            <li>
                                                <b>2. Chuẩn bị trước khi tẩy giun</b>
                                                <p>Tuyệt đối tuân thủ liều lượng: Sử dụng theo đúng chỉ dẫn từ bác sĩ thú y hoặc trên nhãn thuốc.</p>
                                                <p>Tạo môi trường thoải mái: Chọn nơi yên tĩnh và thoải mái để giúp chó mèo không bị căng thẳng trong quá trình uống thuốc.</p>
                                                <p>Hãy cho thú cưng ăn nhẹ: Điều này có thể giúp tránh việc dạ dày khó chịu khi dùng thuốc.</p>
                                            </li>
                                            <li>
                                                <b>3. Vệ sinh môi trường sống</b>
                                                <p>Dọn dẹp và khử trùng nơi ở của thú cưng thường xuyên.</p>
                                                <p>Vệ sinh sạch sẽ khu vực ăn uống, giường ngủ và đồ chơi của chúng để tránh sự lây lan của giun.</p>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className=" text-black p-4">
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
                                            <img src={comment.avatar}
                                                alt=""
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />

                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <p className="font-semibold">{comment.user}</p>
                                                    <span className="text-gray-400 text-sm">{comment.time}</span>
                                                </div>

                                                <p className="whitespace-pre-line mt-2">{comment.content}</p>

                                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                                                    <button className="hover:text-white">
                                                        👍 {comment.likes} lượt thích
                                                    </button>
                                                    {comment.replies > 0 && (
                                                        <button className="hover:text-white">
                                                            {comment.replies} phản hồi
                                                        </button>
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

                <div className="bg-gray-800 text-white rounded-xl p-4 flex flex-col w-[350px]" onClick={() => document.getElementById('my_modal_blog1').showModal()}>
                    <img
                        src="https://petshopsaigon.vn/wp-content/uploads/2019/12/cham-soc-meo-con-moi-de-2.png"
                        alt="All-Access Pass"
                        className="w-full h-56 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-bold mt-4">Chăm sóc thú sơ sinh tại nhà</h3>
                    <div className="flex-grow"></div>
                    <div className='flex justify-between'>
                        <p className="text-gray-400 mt-2">Dr.Hiu</p>
                        <p className="text-gray-400 mt-2">5 lượt xem</p>
                    </div>
                    <dialog id="my_modal_blog1" className="modal *:text-black">
                        <div className="modal-box h-full max-w-7xl">
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full">
                                    <h2 className="text-3xl font-bold mb-4 text-center">Chăm sóc thú sơ sinh tại nhà</h2>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img
                                                src="https://www.elle.vn/wp-content/uploads/2024/01/21/567142/HIEUTHUHAI-9-scaled.jpg"
                                                alt="Project Image"
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />
                                            <div>
                                                <p className='mx-3'>Dr.Hiu</p>
                                                <p className='mx-3'>Bác sĩ thực tập</p>
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
                                        src="https://petshopsaigon.vn/wp-content/uploads/2019/12/cham-soc-meo-con-moi-de-2.png"
                                        alt="Kitten with bubbles"
                                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                                    <h2 className="text-3xl font-bold mb-4">HƯỚNG DẪN</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        <ul>
                                            <li>
                                                <b>1. Cung cấp nhiệt độ ấm áp</b>
                                                <p>Thú sơ sinh chưa thể tự điều chỉnh nhiệt độ cơ thể, vì vậy bạn cần đảm bảo môi trường sống của chúng ấm áp.</p>
                                                <p>Sử dụng đèn sưởi, túi nước nóng bọc khăn, hoặc thảm sưởi để tạo nhiệt, nhưng hãy chắc chắn không để nhiệt quá cao.</p>
                                                <p>Theo dõi nhiệt độ chuồng hoặc không gian sống của thú sơ sinh, nên giữ ở mức khoảng 30-35°C.</p>
                                            </li>
                                            <li>
                                                <b>2. Kích thích đi vệ sinh</b>
                                                <p>Thú sơ sinh chưa thể tự đi vệ sinh, nên bạn cần dùng bông ẩm hoặc khăn ấm nhẹ nhàng xoa vào vùng bụng dưới và hậu môn của chúng sau mỗi lần ăn để kích thích tiểu tiện và đại tiện.</p>
                                            </li>
                                            <li>
                                                <b>3. Tạo không gian yên tĩnh và an toàn</b>
                                                <p>Tránh tiếng ồn lớn và không gian ồn ào để thú sơ sinh không bị căng thẳng.</p>
                                                <p>Đảm bảo khu vực sống của thú sạch sẽ, không có đồ vật nguy hiểm hoặc dễ gây tổn thương.</p>
                                            </li>
                                            <li>
                                                <b>4. Giữ vệ sinh sạch sẽ</b>
                                                <p>Lau chùi cơ thể thú sơ sinh sau khi bú bằng khăn mềm, ẩm và ấm để giữ cơ thể sạch sẽ.</p>
                                                <p>Vệ sinh chuồng hoặc ổ ngủ của thú thường xuyên để tránh vi khuẩn phát triển.</p>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className=" text-black p-4">
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
                                            <img src={comment.avatar}
                                                alt=""
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />

                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <p className="font-semibold">{comment.user}</p>
                                                    <span className="text-gray-400 text-sm">{comment.time}</span>
                                                </div>

                                                <p className="whitespace-pre-line mt-2">{comment.content}</p>

                                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                                                    <button className="hover:text-white">
                                                        👍 {comment.likes} lượt thích
                                                    </button>
                                                    {comment.replies > 0 && (
                                                        <button className="hover:text-white">
                                                            {comment.replies} phản hồi
                                                        </button>
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

                <div className="bg-gray-800 text-white rounded-xl p-4 flex flex-col w-[350px]" onClick={() => document.getElementById('my_modal_blog2').showModal()}>
                    <img
                        src="https://www.petmom.vn/uploads/contents/cham-soc-thu-cung-la-gi_1612258862.jpg"
                        alt="All-Access Pass"
                        className="w-full h-56 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-bold mt-4">Mẹo vặt cho các Sen để thú cưng của mình luôn khỏe mạnh</h3>
                    <div className="flex-grow"></div>
                    <p className="text-gray-400 mt-2">Dr.Hon</p>
                    <dialog id="my_modal_blog2" className="modal *:text-black">
                        <div className="modal-box h-full max-w-7xl">
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full">
                                    <h2 className="text-3xl font-bold mb-4 text-center">Mẹo vặt cho các Sen để thú cưng của mình luôn khỏe mạnh</h2>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img
                                                src="https://cdn3.ivivu.com/2015/09/12-hon-dao-tu-nhien-co-hinh-dang-khong-binh-thuong-tren-the-gioi-ivivu-3.jpg"
                                                alt="Project Image"
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />
                                            <div>
                                                <p className='mx-3'>Dr.Hon</p>
                                                <p className='mx-3'>Bác sĩ ngoài đảo làm việc luôn hoàn hảo</p>
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
                                        src="https://www.petmom.vn/uploads/contents/cham-soc-thu-cung-la-gi_1612258862.jpg"
                                        alt="Kitten with bubbles"
                                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                                    <h2 className="text-3xl font-bold mb-4">HƯỚNG DẪN</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        <ul>
                                            <li>
                                                <b>1. Dinh dưỡng cân đối</b>
                                                <p>Thức ăn chất lượng: Chọn thức ăn phù hợp với loài và độ tuổi của thú cưng, tốt nhất là các sản phẩm có nguồn gốc rõ ràng. Đảm bảo chế độ ăn uống cân bằng, đầy đủ chất dinh dưỡng, đặc biệt là protein và vitamin.</p>
                                                <p>Không cho ăn thức ăn của người: Một số thức ăn của người như chocolate, hành tây, nho, hay đồ ăn nhiều gia vị có thể gây hại cho thú cưng.</p>
                                                <p>Nước uống sạch: Luôn đảm bảo thú cưng có nước sạch và thay nước hàng ngày để tránh vi khuẩn phát triển.</p>
                                            </li>
                                            <li>
                                                <b>2. Môi trường sống an toàn và thoải mái</b>
                                                <p>Chỗ ngủ ấm áp: Cung cấp chỗ ngủ sạch sẽ, ấm áp và thoải mái cho thú cưng. Đảm bảo khu vực sống của chúng không quá nóng hay quá lạnh.</p>
                                                <p>Giữ không gian sống sạch sẽ: Vệ sinh chuồng trại, giường ngủ và khu vực vui chơi thường xuyên để tránh các bệnh về da và ký sinh trùng.</p>
                                            </li>
                                            <li>
                                                <b>3. Quan sát hành vi lạ</b>
                                                <p>Nhận biết dấu hiệu bất thường: Quan sát hành vi của thú cưng để nhận biết sớm các dấu hiệu bất thường như bỏ ăn, mệt mỏi, nôn mửa hay tiêu chảy. Đây có thể là dấu hiệu của các vấn đề sức khỏe nghiêm trọng.</p>
                                            </li>
                                            <li>
                                                <b>4. Giữ tinh thần thư giãn và giảm stress</b>
                                                <p>Thú vui chơi đùa: Dành thời gian chơi đùa, vuốt ve, hoặc chỉ đơn giản là ở bên thú cưng. Việc này giúp thú cưng cảm thấy an toàn, ít bị căng thẳng.</p>
                                                <p>Âm nhạc nhẹ nhàng: Nhiều thú cưng cảm thấy thư giãn khi nghe nhạc nhẹ nhàng, bạn có thể thử bật nhạc êm dịu khi ở nhà.</p>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className=" text-black p-4">
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
                                            <img src={comment.avatar}
                                                alt=""
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />

                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <p className="font-semibold">{comment.user}</p>
                                                    <span className="text-gray-400 text-sm">{comment.time}</span>
                                                </div>

                                                <p className="whitespace-pre-line mt-2">{comment.content}</p>

                                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                                                    <button className="hover:text-white">
                                                        👍 {comment.likes} lượt thích
                                                    </button>
                                                    {comment.replies > 0 && (
                                                        <button className="hover:text-white">
                                                            {comment.replies} phản hồi
                                                        </button>
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

                <div className="bg-gray-800 text-white rounded-xl p-4 flex flex-col w-[350px]" onClick={() => document.getElementById('my_modal_blog3').showModal()}>
                    <img
                        src="https://fagopet.vn/tassets/images/mrgv6s1rurlpo796f63ukrvtr1sa.webp"
                        alt="All-Access Pass"
                        className="w-full h-56 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-bold mt-4">Giải trí cho Pet "iu"</h3>
                    <div className="flex-grow"></div>
                    <p className="text-gray-400 mt-2">Dr.Beo</p>
                    <dialog id="my_modal_blog3" className="modal *:text-black">
                        <div className="modal-box h-full max-w-7xl">
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full">
                                    <h2 className="text-3xl font-bold mb-4 text-center">Giải trí cho Pet "iu"</h2>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img
                                                src="https://media.istockphoto.com/id/528312899/vi/anh/c%C3%A2y-c%E1%BB%8D-tr%C3%AAn-c%C3%A1nh-%C4%91%E1%BB%93ng-l%C3%BAa-b%E1%BB%8B-ng%E1%BA%ADp-l%E1%BB%A5t.jpg?s=612x612&w=0&k=20&c=00Pe1x3iOJwRedciD3uPBsqyYAwSTulV8Xd4bNdt0AY="
                                                alt="Project Image"
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />
                                            <div>
                                                <p className='mx-3'>Dr.Beo</p>
                                                <p className='mx-3'>Bác sĩ An Giang làm việc gì chưa nghĩ ra</p>
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
                                        src="https://fagopet.vn/tassets/images/mrgv6s1rurlpo796f63ukrvtr1sa.webp"
                                        alt="Kitten with bubbles"
                                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                                    <h2 className="text-3xl font-bold mb-4">HƯỚNG DẪN</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        <ul>
                                            <li>
                                                <b>1. Đồ chơi tương tác (Interactive Toys)</b>
                                                <p>Đồ chơi thông minh: Các món đồ chơi có thể tự di chuyển hoặc phát ra âm thanh sẽ kích thích sự tò mò của thú cưng. Ví dụ như quả bóng tự động lăn, đồ chơi có kẹo bên trong khiến thú cưng phải vận động trí óc và cơ thể để lấy kẹo ra.</p>
                                                <p>Puzzle toys: Đồ chơi đòi hỏi thú cưng tìm cách mở để nhận thưởng giúp kích thích sự thông minh và nhạy bén. Đặc biệt là với những chú chó hay mèo, trò chơi này rất thú vị.</p>
                                            </li>
                                            <li>
                                                <b>2. Sử dụng Laser Pointer</b>
                                                <p>Mèo và chó đều có thể thích thú khi đuổi theo đốm sáng nhỏ từ đèn laser. Tuy nhiên, bạn nên cẩn thận và tránh chiếu trực tiếp vào mắt của thú cưng. Đây là cách tuyệt vời để thú cưng giải phóng năng lượng mà không cần quá nhiều không gian.</p>
                                            </li>
                                            <li>
                                                <b>3. Chơi trò đuổi bắt (Chase and Fetch)</b>
                                                <p>Đối với chó: Đây là trò chơi cổ điển mà hầu hết các chú chó đều yêu thích. Dùng một quả bóng, một chiếc gậy hoặc đồ chơi để ném ra xa, sau đó khuyến khích chó chạy theo nhặt về. Trò chơi này vừa giúp thú cưng vận động, vừa giúp rèn luyện kỹ năng.</p>
                                                <p>Đối với mèo: Sử dụng đồ chơi có lông hoặc gắn lông vũ để kéo trên sàn nhà, kích thích mèo săn đuổi và vồ lấy.</p>
                                            </li>
                                            <li>
                                                <b>4. Bể bơi nhỏ hoặc chơi với nước</b>
                                                <p>Cho chó: Nhiều chú chó yêu thích nước, vì vậy một bể bơi nhỏ ngoài sân hoặc trong nhà có thể mang lại niềm vui lớn. Bạn có thể thả bóng hoặc đồ chơi vào nước để chúng lặn tìm.</p>
                                                <p>Cho mèo (cẩn thận): Mặc dù đa số mèo không thích nước, nhưng có một số mèo rất thích chơi đùa với nước, như nghịch vòi nước chảy hoặc những vũng nước nhỏ.</p>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className=" text-black p-4">
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
                                            <img src={comment.avatar}
                                                alt=""
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />

                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <p className="font-semibold">{comment.user}</p>
                                                    <span className="text-gray-400 text-sm">{comment.time}</span>
                                                </div>

                                                <p className="whitespace-pre-line mt-2">{comment.content}</p>

                                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                                                    <button className="hover:text-white">
                                                        👍 {comment.likes} lượt thích
                                                    </button>
                                                    {comment.replies > 0 && (
                                                        <button className="hover:text-white">
                                                            {comment.replies} phản hồi
                                                        </button>
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

                <div className="bg-gray-800 text-white rounded-xl p-4 flex flex-col w-[350px]" onClick={() => document.getElementById('my_modal_blog4').showModal()}>
                    <img
                        src="https://sudospaces.com/happyvet-com-vn/2019/05/bieu-hien-cho-sap-de-4.jpg"
                        alt="All-Access Pass"
                        className="w-full h-56 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-bold mt-4">Chăm sóc Pet sau sinh</h3>
                    <div className="flex-grow"></div>
                    <div className='flex justify-between'>
                        <p className="text-gray-400 mt-2">Dr.Tan</p>
                        <p className="text-gray-400 mt-2">5 lượt xem</p>
                    </div>

                    <dialog id="my_modal_blog4" className="modal *:text-black">
                        <div className="modal-box h-full max-w-7xl">
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full">
                                    <h2 className="text-3xl font-bold mb-4 text-center">Chăm sóc Pet sau sinh</h2>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img
                                                src="https://sudospaces.com/happyvet-com-vn/2019/05/bieu-hien-cho-sap-de-4.jpg"
                                                alt="Project Image"
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />
                                            <div>
                                                <p className='mx-3'>Dr.Tan</p>
                                                <p className='mx-3'>Bác sĩ chuyên chữa bệnh sĩ</p>
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
                                        src="https://sudospaces.com/happyvet-com-vn/2019/05/bieu-hien-cho-sap-de-4.jpg"
                                        alt="Kitten with bubbles"
                                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                                    <h2 className="text-3xl font-bold mb-4">Tẩy giun</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        <ul>
                                            <li>
                                                <b>1. Chuẩn bị không gian yên tĩnh và ấm áp</b>
                                                <p>Chỗ ngủ ấm áp: Đảm bảo rằng mẹ và các con non có một chỗ ngủ ấm áp, sạch sẽ và yên tĩnh. Có thể sử dụng đệm ấm, khăn mềm hoặc hộp lót vải để tạo cảm giác an toàn và thoải mái.</p>
                                                <p>Nhiệt độ: Trong những ngày đầu tiên, nhiệt độ chuồng hoặc khu vực sinh cần được giữ ấm, khoảng 30-32°C để đảm bảo con non không bị lạnh.</p>
                                            </li>
                                            <li>
                                                <b>2. Chế độ dinh dưỡng cho mẹ</b>
                                                <p>Thức ăn giàu dinh dưỡng: Sau khi sinh, mẹ cần một chế độ ăn giàu protein, canxi và các dưỡng chất để hồi phục sức khỏe và sản xuất sữa cho con. Bạn có thể cho mẹ ăn thức ăn chuyên dụng cho thú cưng đang cho con bú hoặc tăng cường các loại thức ăn giàu chất đạm như thịt, cá.</p>
                                                <p>Nước sạch: Mẹ cần nước nhiều hơn bình thường để sản xuất đủ sữa, vì vậy hãy đảm bảo nước luôn sạch và có sẵn.</p>
                                            </li>
                                            <li>
                                                <b>3. Theo dõi tình trạng sức khỏe của mẹ</b>
                                                <p>Kiểm tra dấu hiệu nhiễm trùng: Theo dõi các dấu hiệu như sốt, mất sữa, sưng vú, hoặc hành vi bất thường. Nếu mẹ có dấu hiệu mệt mỏi, bỏ ăn hoặc có các vết sưng đỏ quanh vùng vú, hãy đưa mẹ đi khám thú y ngay lập tức.</p>
                                                <p>Hỗ trợ vệ sinh vùng sinh sản: Sau khi sinh, mẹ có thể không tự làm sạch hoàn toàn, bạn có thể nhẹ nhàng dùng khăn ấm lau sạch vùng bụng và cơ quan sinh sản của mẹ.</p>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className=" text-black p-4">
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
                                            <img src={comment.avatar}
                                                alt=""
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />

                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <p className="font-semibold">{comment.user}</p>
                                                    <span className="text-gray-400 text-sm">{comment.time}</span>
                                                </div>

                                                <p className="whitespace-pre-line mt-2">{comment.content}</p>

                                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                                                    <button className="hover:text-white">
                                                        👍 {comment.likes} lượt thích
                                                    </button>
                                                    {comment.replies > 0 && (
                                                        <button className="hover:text-white">
                                                            {comment.replies} phản hồi
                                                        </button>
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

                <div className="bg-gray-800 text-white rounded-xl p-4 flex flex-col w-[350px]" onClick={() => document.getElementById('my_modal_blog1').showModal()}>
                    <img
                        src="https://petshopsaigon.vn/wp-content/uploads/2019/12/cham-soc-meo-con-moi-de-2.png"
                        alt="All-Access Pass"
                        className="w-full h-56 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-bold mt-4">Chăm sóc thú sơ sinh tại nhà</h3>
                    <div className="flex-grow"></div>
                    <div className='flex justify-between'>
                        <p className="text-gray-400 mt-2">Dr.Hiu</p>
                        <p className="text-gray-400 mt-2">5 lượt xem</p>
                    </div>
                    <dialog id="my_modal_blog1" className="modal *:text-black">
                        <div className="modal-box h-full max-w-7xl">
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full">
                                    <h2 className="text-3xl font-bold mb-4 text-center">Chăm sóc thú sơ sinh tại nhà</h2>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img
                                                src="https://www.elle.vn/wp-content/uploads/2024/01/21/567142/HIEUTHUHAI-9-scaled.jpg"
                                                alt="Project Image"
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />
                                            <div>
                                                <p className='mx-3'>Dr.Hiu</p>
                                                <p className='mx-3'>Bác sĩ thực tập</p>
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
                                        src="https://petshopsaigon.vn/wp-content/uploads/2019/12/cham-soc-meo-con-moi-de-2.png"
                                        alt="Kitten with bubbles"
                                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                                    <h2 className="text-3xl font-bold mb-4">HƯỚNG DẪN</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        <ul>
                                            <li>
                                                <b>1. Cung cấp nhiệt độ ấm áp</b>
                                                <p>Thú sơ sinh chưa thể tự điều chỉnh nhiệt độ cơ thể, vì vậy bạn cần đảm bảo môi trường sống của chúng ấm áp.</p>
                                                <p>Sử dụng đèn sưởi, túi nước nóng bọc khăn, hoặc thảm sưởi để tạo nhiệt, nhưng hãy chắc chắn không để nhiệt quá cao.</p>
                                                <p>Theo dõi nhiệt độ chuồng hoặc không gian sống của thú sơ sinh, nên giữ ở mức khoảng 30-35°C.</p>
                                            </li>
                                            <li>
                                                <b>2. Kích thích đi vệ sinh</b>
                                                <p>Thú sơ sinh chưa thể tự đi vệ sinh, nên bạn cần dùng bông ẩm hoặc khăn ấm nhẹ nhàng xoa vào vùng bụng dưới và hậu môn của chúng sau mỗi lần ăn để kích thích tiểu tiện và đại tiện.</p>
                                            </li>
                                            <li>
                                                <b>3. Tạo không gian yên tĩnh và an toàn</b>
                                                <p>Tránh tiếng ồn lớn và không gian ồn ào để thú sơ sinh không bị căng thẳng.</p>
                                                <p>Đảm bảo khu vực sống của thú sạch sẽ, không có đồ vật nguy hiểm hoặc dễ gây tổn thương.</p>
                                            </li>
                                            <li>
                                                <b>4. Giữ vệ sinh sạch sẽ</b>
                                                <p>Lau chùi cơ thể thú sơ sinh sau khi bú bằng khăn mềm, ẩm và ấm để giữ cơ thể sạch sẽ.</p>
                                                <p>Vệ sinh chuồng hoặc ổ ngủ của thú thường xuyên để tránh vi khuẩn phát triển.</p>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className=" text-black p-4">
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
                                            <img src={comment.avatar}
                                                alt=""
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />

                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <p className="font-semibold">{comment.user}</p>
                                                    <span className="text-gray-400 text-sm">{comment.time}</span>
                                                </div>

                                                <p className="whitespace-pre-line mt-2">{comment.content}</p>

                                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                                                    <button className="hover:text-white">
                                                        👍 {comment.likes} lượt thích
                                                    </button>
                                                    {comment.replies > 0 && (
                                                        <button className="hover:text-white">
                                                            {comment.replies} phản hồi
                                                        </button>
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

                <div className="bg-gray-800 text-white rounded-xl p-4 flex flex-col w-[350px]" onClick={() => document.getElementById('my_modal_blog2').showModal()}>
                    <img
                        src="https://www.petmom.vn/uploads/contents/cham-soc-thu-cung-la-gi_1612258862.jpg"
                        alt="All-Access Pass"
                        className="w-full h-56 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-bold mt-4">Mẹo vặt cho các Sen để thú cưng của mình luôn khỏe mạnh</h3>
                    <div className="flex-grow"></div>
                    <p className="text-gray-400 mt-2">Dr.Hon</p>
                    <dialog id="my_modal_blog2" className="modal *:text-black">
                        <div className="modal-box h-full max-w-7xl">
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full">
                                    <h2 className="text-3xl font-bold mb-4 text-center">Mẹo vặt cho các Sen để thú cưng của mình luôn khỏe mạnh</h2>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img
                                                src="https://cdn3.ivivu.com/2015/09/12-hon-dao-tu-nhien-co-hinh-dang-khong-binh-thuong-tren-the-gioi-ivivu-3.jpg"
                                                alt="Project Image"
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />
                                            <div>
                                                <p className='mx-3'>Dr.Hon</p>
                                                <p className='mx-3'>Bác sĩ ngoài đảo làm việc luôn hoàn hảo</p>
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
                                        src="https://www.petmom.vn/uploads/contents/cham-soc-thu-cung-la-gi_1612258862.jpg"
                                        alt="Kitten with bubbles"
                                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                                    <h2 className="text-3xl font-bold mb-4">HƯỚNG DẪN</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        <ul>
                                            <li>
                                                <b>1. Dinh dưỡng cân đối</b>
                                                <p>Thức ăn chất lượng: Chọn thức ăn phù hợp với loài và độ tuổi của thú cưng, tốt nhất là các sản phẩm có nguồn gốc rõ ràng. Đảm bảo chế độ ăn uống cân bằng, đầy đủ chất dinh dưỡng, đặc biệt là protein và vitamin.</p>
                                                <p>Không cho ăn thức ăn của người: Một số thức ăn của người như chocolate, hành tây, nho, hay đồ ăn nhiều gia vị có thể gây hại cho thú cưng.</p>
                                                <p>Nước uống sạch: Luôn đảm bảo thú cưng có nước sạch và thay nước hàng ngày để tránh vi khuẩn phát triển.</p>
                                            </li>
                                            <li>
                                                <b>2. Môi trường sống an toàn và thoải mái</b>
                                                <p>Chỗ ngủ ấm áp: Cung cấp chỗ ngủ sạch sẽ, ấm áp và thoải mái cho thú cưng. Đảm bảo khu vực sống của chúng không quá nóng hay quá lạnh.</p>
                                                <p>Giữ không gian sống sạch sẽ: Vệ sinh chuồng trại, giường ngủ và khu vực vui chơi thường xuyên để tránh các bệnh về da và ký sinh trùng.</p>
                                            </li>
                                            <li>
                                                <b>3. Quan sát hành vi lạ</b>
                                                <p>Nhận biết dấu hiệu bất thường: Quan sát hành vi của thú cưng để nhận biết sớm các dấu hiệu bất thường như bỏ ăn, mệt mỏi, nôn mửa hay tiêu chảy. Đây có thể là dấu hiệu của các vấn đề sức khỏe nghiêm trọng.</p>
                                            </li>
                                            <li>
                                                <b>4. Giữ tinh thần thư giãn và giảm stress</b>
                                                <p>Thú vui chơi đùa: Dành thời gian chơi đùa, vuốt ve, hoặc chỉ đơn giản là ở bên thú cưng. Việc này giúp thú cưng cảm thấy an toàn, ít bị căng thẳng.</p>
                                                <p>Âm nhạc nhẹ nhàng: Nhiều thú cưng cảm thấy thư giãn khi nghe nhạc nhẹ nhàng, bạn có thể thử bật nhạc êm dịu khi ở nhà.</p>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className=" text-black p-4">
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
                                            <img src={comment.avatar}
                                                alt=""
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />

                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <p className="font-semibold">{comment.user}</p>
                                                    <span className="text-gray-400 text-sm">{comment.time}</span>
                                                </div>

                                                <p className="whitespace-pre-line mt-2">{comment.content}</p>

                                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                                                    <button className="hover:text-white">
                                                        👍 {comment.likes} lượt thích
                                                    </button>
                                                    {comment.replies > 0 && (
                                                        <button className="hover:text-white">
                                                            {comment.replies} phản hồi
                                                        </button>
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

                <div className="bg-gray-800 text-white rounded-xl p-4 flex flex-col w-[350px]" onClick={() => document.getElementById('my_modal_blog3').showModal()}>
                    <img
                        src="https://fagopet.vn/tassets/images/mrgv6s1rurlpo796f63ukrvtr1sa.webp"
                        alt="All-Access Pass"
                        className="w-full h-56 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-bold mt-4">Giải trí cho Pet "iu"</h3>
                    <div className="flex-grow"></div>
                    <p className="text-gray-400 mt-2">Dr.Beo</p>
                    <dialog id="my_modal_blog3" className="modal *:text-black">
                        <div className="modal-box h-full max-w-7xl">
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full">
                                    <h2 className="text-3xl font-bold mb-4 text-center">Giải trí cho Pet "iu"</h2>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img
                                                src="https://media.istockphoto.com/id/528312899/vi/anh/c%C3%A2y-c%E1%BB%8D-tr%C3%AAn-c%C3%A1nh-%C4%91%E1%BB%93ng-l%C3%BAa-b%E1%BB%8B-ng%E1%BA%ADp-l%E1%BB%A5t.jpg?s=612x612&w=0&k=20&c=00Pe1x3iOJwRedciD3uPBsqyYAwSTulV8Xd4bNdt0AY="
                                                alt="Project Image"
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />
                                            <div>
                                                <p className='mx-3'>Dr.Beo</p>
                                                <p className='mx-3'>Bác sĩ An Giang làm việc gì chưa nghĩ ra</p>
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
                                        src="https://fagopet.vn/tassets/images/mrgv6s1rurlpo796f63ukrvtr1sa.webp"
                                        alt="Kitten with bubbles"
                                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                                    <h2 className="text-3xl font-bold mb-4">HƯỚNG DẪN</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        <ul>
                                            <li>
                                                <b>1. Đồ chơi tương tác (Interactive Toys)</b>
                                                <p>Đồ chơi thông minh: Các món đồ chơi có thể tự di chuyển hoặc phát ra âm thanh sẽ kích thích sự tò mò của thú cưng. Ví dụ như quả bóng tự động lăn, đồ chơi có kẹo bên trong khiến thú cưng phải vận động trí óc và cơ thể để lấy kẹo ra.</p>
                                                <p>Puzzle toys: Đồ chơi đòi hỏi thú cưng tìm cách mở để nhận thưởng giúp kích thích sự thông minh và nhạy bén. Đặc biệt là với những chú chó hay mèo, trò chơi này rất thú vị.</p>
                                            </li>
                                            <li>
                                                <b>2. Sử dụng Laser Pointer</b>
                                                <p>Mèo và chó đều có thể thích thú khi đuổi theo đốm sáng nhỏ từ đèn laser. Tuy nhiên, bạn nên cẩn thận và tránh chiếu trực tiếp vào mắt của thú cưng. Đây là cách tuyệt vời để thú cưng giải phóng năng lượng mà không cần quá nhiều không gian.</p>
                                            </li>
                                            <li>
                                                <b>3. Chơi trò đuổi bắt (Chase and Fetch)</b>
                                                <p>Đối với chó: Đây là trò chơi cổ điển mà hầu hết các chú chó đều yêu thích. Dùng một quả bóng, một chiếc gậy hoặc đồ chơi để ném ra xa, sau đó khuyến khích chó chạy theo nhặt về. Trò chơi này vừa giúp thú cưng vận động, vừa giúp rèn luyện kỹ năng.</p>
                                                <p>Đối với mèo: Sử dụng đồ chơi có lông hoặc gắn lông vũ để kéo trên sàn nhà, kích thích mèo săn đuổi và vồ lấy.</p>
                                            </li>
                                            <li>
                                                <b>4. Bể bơi nhỏ hoặc chơi với nước</b>
                                                <p>Cho chó: Nhiều chú chó yêu thích nước, vì vậy một bể bơi nhỏ ngoài sân hoặc trong nhà có thể mang lại niềm vui lớn. Bạn có thể thả bóng hoặc đồ chơi vào nước để chúng lặn tìm.</p>
                                                <p>Cho mèo (cẩn thận): Mặc dù đa số mèo không thích nước, nhưng có một số mèo rất thích chơi đùa với nước, như nghịch vòi nước chảy hoặc những vũng nước nhỏ.</p>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className=" text-black p-4">
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
                                            <img src={comment.avatar}
                                                alt=""
                                                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                                            />

                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <p className="font-semibold">{comment.user}</p>
                                                    <span className="text-gray-400 text-sm">{comment.time}</span>
                                                </div>

                                                <p className="whitespace-pre-line mt-2">{comment.content}</p>

                                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                                                    <button className="hover:text-white">
                                                        👍 {comment.likes} lượt thích
                                                    </button>
                                                    {comment.replies > 0 && (
                                                        <button className="hover:text-white">
                                                            {comment.replies} phản hồi
                                                        </button>
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
        </div>
    );
};
