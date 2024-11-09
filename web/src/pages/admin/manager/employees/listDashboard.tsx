import React, { useState } from 'react';

export const EmployeesManager = () => {
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const employees = [
        { id: 1, name: 'Nguyen Tinh', phone: '0112233554', email: 'tinhnguyen01@gmail.com', role: 'DOCTOR' },
        { id: 2, name: 'Duong Tan', phone: '0315489511', email: 'tanduong01@gmail.com', role: 'DOCTOR' },
        { id: 3, name: 'Tong Hoang', phone: '0215894234', email: 'hoangtong@gmail.com', role: 'WAREHOUSE_MANAGER' },
        { id: 4, name: 'Ha Hieu', phone: '0866315455', email: 'hieuha@gmail.com', role: 'DOCTOR' },
        { id: 5, name: 'Le Bao', phone: '0994452135', email: 'bao0023@gmail.com', role: 'RECEPTIONIST' },
        { id: 6, name: 'Nguyen Dat', phone: '0998721345', email: 'datnmxod1@gmail.com', role: 'DOCTOR' },
        { id: 7, name: 'Nguyen An', phone: '0385213148', email: 'annguyen0034@gmail.com', role: 'PHARMACIST' },
        { id: 8, name: 'Tran Binh', phone: '0587944133', email: 'binhtran00421@gmail.com', role: 'PHARMACIST' },
        { id: 9, name: 'Tran Thanh', phone: '0487954321', email: 'thanhtran@gmail.com', role: 'RECEPTIONIST' },
        { id: 10, name: 'Pham Quang', phone: '0978456123', email: 'quangpham@gmail.com', role: 'DOCTOR' },
        { id: 11, name: 'Bui Minh', phone: '0881234567', email: 'minhbui@gmail.com', role: 'DOCTOR' },
        { id: 12, name: 'Le Thanh', phone: '0789456123', email: 'thanhle@gmail.com', role: 'PHARMACIST' },
        { id: 13, name: 'Nguyen Khoa', phone: '0671234567', email: 'khoanguyen@gmail.com', role: 'WAREHOUSE_MANAGER' },
        { id: 14, name: 'Dang Anh', phone: '0598456321', email: 'anhdang@gmail.com', role: 'DOCTOR' },
        { id: 15, name: 'Hoang Phuc', phone: '0478956123', email: 'phuchoang@gmail.com', role: 'RECEPTIONIST' },
    ];

    const itemsPerPage = 10;
    const totalPages = Math.ceil(employees.length / itemsPerPage);
    const currentEmployees = employees.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleDeleteClick = (employee) => {
        setSelectedEmployee(employee);
        setShowDeletePopup(true);
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <div className="w-full max-w-7xl bg-white shadow-md p-6 flex justify-between items-center rounded-lg mb-6">
                <h1 className="text-2xl font-bold text-blue-500">List Employees</h1>
                <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center"
                    onClick={() => setShowAddPopup(true)}
                >
                    Create +
                </button>
            </div>
            <div className="w-full max-w-7xl mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by Name, Phone Number, Email, Role,…"
                        className="w-full p-3 pl-10 border rounded-lg outline-none focus:border-blue-500"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        🔍
                    </span>
                </div>
            </div>
            <div className="w-full max-w-7xl bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="p-3">#</th>
                            <th className="p-3">Full Name</th>
                            <th className="p-3">Phone Number</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEmployees.map((employee, index) => (
                            <tr key={employee.id} className="border-b">
                                <td className="p-3">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                <td className="p-3">{employee.name}</td>
                                <td className="p-3">{employee.phone}</td>
                                <td className="p-3">{employee.email}</td>
                                <td className="p-3">{employee.role}</td>
                                <td className="p-3 text-center">
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleDeleteClick(employee)}
                                    >
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center items-center mt-4 space-x-4">
                <button
                    className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="font-semibold">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>

            {showAddPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full">
                        <h2 className="text-lg font-semibold mb-4 text-center">Add New Employee</h2>
                        <input type="text" placeholder="Full Name" className="w-full p-2 mb-3 border rounded-lg" />
                        <input type="text" placeholder="Phone Number" className="w-full p-2 mb-3 border rounded-lg" />
                        <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded-lg" />
                        <input type="text" placeholder="Role" className="w-full p-2 mb-3 border rounded-lg" />
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                onClick={() => setShowAddPopup(false)}
                            >
                                Add
                            </button>
                            <button
                                className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                                onClick={() => setShowAddPopup(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showDeletePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
                        <p className="mb-4 text-center text-gray-800 font-semibold">
                            Are you sure you want to delete
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                onClick={() => {
                                    setShowDeletePopup(false);
                                }}
                            >
                                Yes, Delete
                            </button>
                            <button
                                className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                                onClick={() => setShowDeletePopup(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

