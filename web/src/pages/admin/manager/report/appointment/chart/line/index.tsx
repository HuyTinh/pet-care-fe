import React, { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useGetAppointmentsReportByYearQuery } from '../../../report.service'
import _ from "lodash"

function toReportAppointmentData(val: any) {
    return {
        name: val.month,
        "Total": val.total_appointment,
        "Scheduled": val.number_of_scheduled,
        "Approved": val.number_of_approved,
        "Cancelled": val.number_of_cancelled,
        "No Show": val.number_of_no_show
    }
}

function getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
        month: 'long',
    });
}

function toReportAppointmentCompareData(arr1: any, arr2: any) {
    let minArr = () => {
        let returnArr = []

        if (arr1?.length - arr2?.length >= 0) {
            returnArr = arr2;
        } else {
            returnArr = arr1;
        }
        return returnArr?.map((val: any) => {
            let dateArr = val.name?.split("-");
            return {
                ...val,
                year: dateArr[1],
                name: getMonthName(dateArr[0])
            }
        })
    }

    let maxArr = () => {
        let returnArr = []

        if (arr1?.length - arr2?.length < 0) {
            returnArr = arr2;
        } else {
            returnArr = arr1;
        }
        return returnArr?.map((val: any) => {
            let dateArr = val.name?.split("-");
            return {
                ...val,
                year: dateArr[1],
                name: getMonthName(dateArr[0])
            }
        })
    }

    return minArr()?.map((val: any) => {
        return {
            name: val.name,
            [val.year]: _.omit(val, ["year", "name"]),
            [maxArr()[0].year]: _.omit(maxArr().find((v: any) => v.name === val.name), ["year", "name"])
        }
    })
}

const LineChartReportApointment = () => {
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear() - 1)

    const [selectedStatus, setSelectedStatus] = useState<string>("Total")
    const [appointmentReportByYearData, setAppointmentReportByYearData] = useState()
    const [appointmentReportByYearCompareData, setAppointmentReportByYearCompareData] = useState()
    const { data: appointmentsReportByYearResponse } = useGetAppointmentsReportByYearQuery({ year: new Date().getFullYear() })
    const { data: appointmentsReportByYearCompareResponse } = useGetAppointmentsReportByYearQuery({ year: selectedYear })

    useEffect(() => {
        if (appointmentsReportByYearResponse?.data) {

            setAppointmentReportByYearData(appointmentsReportByYearResponse?.data.map((val: any) => toReportAppointmentData(val)))
        }
    }, [appointmentsReportByYearResponse])


    useEffect(() => {
        if (appointmentsReportByYearCompareResponse?.data) {

            setAppointmentReportByYearCompareData(appointmentsReportByYearCompareResponse?.data.map((val: any) => toReportAppointmentData(val)))
        }
    }, [appointmentsReportByYearCompareResponse])

    return (
        <div className="mt-7 w-full px-5 h-96">
            <div className="flex w-full space-x-5 h-full">
                <div className="w-full bg-white px-7 py-7 rounded-lg">
                    <div className="flex justify-center gap-x-2">
                        <span className=" flex justify-center font-bold text-lg">Appointment Report
                            <span className="mx-2 px-2 bg-blue-300 rounded-lg">
                                {new Date().getFullYear()}
                            </span> compare to </span>
                        <select className="select select-bordered select-sm"
                            onChange={(e: any) => setSelectedYear(e.target.value)}
                        >
                            {
                                [...Array(4)].map((_, index) =>
                                    <option value={new Date().getFullYear() - index - 1}>{new Date().getFullYear() - index - 1}</option>)
                            }
                        </select>
                        <span className=" flex justify-center font-bold text-lg">
                            of </span>
                        <select className="select select-bordered select-sm"
                            onChange={(e) => setSelectedStatus(e.target.value)}>
                            {
                                [
                                    "Total",
                                    "Scheduled",
                                    "Approved",
                                    "Cancelled",
                                    "No Show"
                                ].map((val, index) =>
                                    <option key={index} value={val}>{val}</option>)
                            }
                        </select>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={400}
                            data={toReportAppointmentCompareData(appointmentReportByYearData, appointmentReportByYearCompareData)}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey={new Date().getFullYear() + "." + selectedStatus} name={new Date().getFullYear() as any} stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                            <Area type="monotone" dataKey={selectedYear + "." + selectedStatus} name={selectedYear as any} stroke="#00C49F" fill="#00C49F" fillOpacity={0.3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default LineChartReportApointment