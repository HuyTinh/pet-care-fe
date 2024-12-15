import React, { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import _ from "lodash"
import { useGetPrescriptionsReportByYearQuery } from '../../../../report.service';

function toReportPrescriptionData(val: any) {
    return {
        name: val.month,
        "Total": val.total_prescriptions,
        "Processing": val.number_of_processing,
        "Approved": val.number_of_approved,
        "Cancelled": val.number_of_cancelled
    }
}

function getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
        month: 'long',
    });
}

function toReportPrescriptionCompareData(arr1: any, arr2: any) {
    const minArr = () => {
        let returnArr = []

        if (arr1?.length - arr2?.length >= 0) {
            returnArr = arr2;
        } else {
            returnArr = arr1;
        }
        return returnArr?.map((val: any) => {
            const dateArr = val.name?.split("-");
            return {
                ...val,
                year: dateArr[1],
                name: getMonthName(dateArr[0])
            }
        })
    }

    const maxArr = () => {
        let returnArr = []

        if (arr1?.length - arr2?.length < 0) {
            returnArr = arr2;
        } else {
            returnArr = arr1;
        }
        return returnArr?.map((val: any) => {
            const dateArr = val.name?.split("-");
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

const LineChartReportPrescription = () => {
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear() - 1)

    const [selectedStatus, setSelectedStatus] = useState<string>("Total")
    const [prescriptionReportByYearData, setPrescriptionReportByYearData] = useState()
    const [prescriptionReportByYearCompareData, setPrescriptionReportByYearCompareData] = useState()
    const { data: prescriptionsReportByYearResponse } = useGetPrescriptionsReportByYearQuery({ year: new Date().getFullYear() })
    const { data: prescriptionsReportByYearCompareResponse } = useGetPrescriptionsReportByYearQuery({ year: selectedYear })

    useEffect(() => {
        if (prescriptionsReportByYearResponse?.data) {

            setPrescriptionReportByYearData(prescriptionsReportByYearResponse?.data.map((val: any) => toReportPrescriptionData(val)))
        }
    }, [prescriptionsReportByYearResponse])


    useEffect(() => {
        if (prescriptionsReportByYearCompareResponse?.data) {

            setPrescriptionReportByYearCompareData(prescriptionsReportByYearCompareResponse?.data.map((val: any) => toReportPrescriptionData(val)))
        }
    }, [prescriptionsReportByYearCompareResponse])

    return (
        <div className="w-full h-96">
            <div className="flex w-full space-x-5 h-full">
                <div className="w-full bg-white px-3 py-7 rounded-lg">
                    <div className="flex justify-center gap-x-2">
                        <span className=" flex justify-center font-bold text-lg">Prescription Report
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
                                    "Processing",
                                    "Approved",
                                    "Cancelled",
                                ].map((val, index) =>
                                    <option key={index} value={val}>{val}</option>)
                            }
                        </select>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={400}
                            data={toReportPrescriptionCompareData(prescriptionReportByYearData, prescriptionReportByYearCompareData)}
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

export default LineChartReportPrescription