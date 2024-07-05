"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import * as React from "react";

type PaymentStatus = 'Approved' | 'Pending' | 'Rejected' | 'Paid';

interface Invoice {
    invoice: string;
    date: string | null;
    category: string;
    amount: string;
    comment: string | null;
    account_number: string;
    merchant_name: string;
    submission_status: PaymentStatus;
    manager_name: string;
}

export default function TableDemo() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);

    const fetchTableData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/claim/findbystatus`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();

            if (Array.isArray(data)) {
                setInvoices(data);
            } else {
                console.error('Error: API response is not an array');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchTableData();
    }, []);

    const getStatusColor = (status: PaymentStatus) => {
        switch (status) {
            case 'Approved':
                return 'bg-blue-500 text-white';
            case 'Pending':
                return 'bg-orange-500 text-white';
            case 'Rejected':
                return 'bg-red-500 text-white';
            default:
                return '';
        }
    };

    const statusClasses: { [key in PaymentStatus]: string } = {
        Approved: "bg-blue-500 text-white",
        Pending: "bg-orange-500 text-white",
        Rejected: "bg-red-500 text-white",
        Paid: "bg-green-500 text-white",
    };

    return (
        <div>
            <Navbar />
            <div className="flex flex-col mt-28 m-10">
                <div className="">
                <Table>
                        <TableHeader className="sticky top-24 bg-white z-10">
                            <TableRow>
                                <TableHead className="text-orange-700">Date</TableHead>
                                <TableHead className="text-orange-700">Category</TableHead>
                                <TableHead className="text-orange-700">Amount</TableHead>
                                <TableHead className="text-orange-700 ml-10">Account Number</TableHead>
                                <TableHead className="text-orange-700 w-36">Merchant Name</TableHead>
                                <TableHead className="text-orange-700">Comments</TableHead>
                                <TableHead className="text-right text-orange-700">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.date}>
                                    <TableCell className="font-medium">{invoice.date}</TableCell>
                                    <TableCell>{invoice.category}</TableCell>
                                    <TableCell>{invoice.amount}</TableCell>
                                    <TableCell className="ml-10">{invoice.account_number}</TableCell>
                                    <TableCell className="w-36">{invoice.merchant_name}</TableCell>
                                    <TableCell>{invoice.comment}</TableCell>
                                    <TableCell className="text-right">
                                        <span className={`px-2 py-1 rounded ${statusClasses[invoice.submission_status]}`}>
                                            {invoice.submission_status}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
