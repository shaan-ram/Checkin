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
    fromDate: string;
    toDate: string;
    paymentMethod: string;
    comments?: string;
    totalAmount: string;
    date?: string | null;
    category?: string;
    amount?: string;
    account_number?: string;
    merchant_name?: string;
    comment?: string;
    submission_status: PaymentStatus;
}

const invoicesData: Invoice[] = [
    {
        invoice: "INV001",
        submission_status: "Approved",
        totalAmount: "250.00",
        paymentMethod: "Credit Card",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
        comments: "An array of strings representing the given object's own enumerable string-keyed property keys."
    },
    {
        invoice: "INV002",
        submission_status: "Pending",
        totalAmount: "150.00",
        paymentMethod: "PayPal",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
        comments: "An array of strings representing the given object's own enumerable string-keyed property keys."
    },
    {
        invoice: "INV003",
        submission_status: "Paid",
        totalAmount: "350.00",
        paymentMethod: "Bank Transfer",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
        comments: "An array of strings representing the given object's own enumerable string-keyed property keys."
    },
    {
        invoice: "INV004",
        submission_status: "Pending",
        totalAmount: "450.00",
        paymentMethod: "Credit Card",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
        comments: "An array of strings representing the given object's own enumerable string-keyed property keys."
    },
    {
        invoice: "INV005",
        submission_status: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
    },
    {
        invoice: "INV006",
        submission_status: "Pending",
        totalAmount: "200.00",
        paymentMethod: "Bank Transfer",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
    },
    {
        invoice: "INV007",
        submission_status: "Approved",
        totalAmount: "300.00",
        paymentMethod: "Credit Card",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
        comments: "An array of strings representing the given object's own enumerable string-keyed property keys."
    },
];

export default function TableDemo() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);

    useEffect(() => {
        setInvoices(invoicesData);
    }, []);

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
                                <TableHead className="text-orange-700">Id</TableHead>
                                <TableHead className="text-orange-700">From Date</TableHead>
                                <TableHead className="text-orange-700">To Date</TableHead>
                                <TableHead className="text-orange-700">Method</TableHead>
                                <TableHead className="text-orange-700 w-36">Comment</TableHead>
                                <TableHead className="text-orange-700 ml-10">Amount</TableHead>
                               
                                <TableHead className="text-right text-orange-700">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                    <TableCell>{invoice.fromDate}</TableCell>
                                    <TableCell>{invoice.toDate}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell className="w-36">{invoice.comments}</TableCell>
                                    <TableCell className="ml-10">{invoice.totalAmount}</TableCell>
                                   
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
