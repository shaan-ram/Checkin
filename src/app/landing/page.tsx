"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { TabsDemo } from "../components/tabmenu"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

type PaymentStatus = 'Approved' | 'Pending' | 'Rejected' | 'Paid';

interface Invoice {
    date: string;
    category: string;
    amount: string;
    comment: string;
    account_number: string;
    merchant_name: string;
    submission_status: PaymentStatus;
    manager_name: string;
}

const statusClasses: { [key in PaymentStatus]: string } = {
    Approved: "bg-blue-500 text-white",
    Pending: "bg-orange-500 text-white",
    Rejected: "bg-red-500 text-white",
    Paid: "bg-green-500 text-white",
};

export default function Landing() {

    const [invoices, setInvoices] = useState<Invoice[]>([]);

    const fetchTableData = async () => {
        try {
            const response = await fetch(`https://checkin-ui-seven.vercel.app/api/claim/findbystatus`, {
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

    return (<>
        <Navbar />
        <div className="py-10 mt-[96px]">
            <TabsDemo />
        </div>
        <div>
            <Navbar />
            <div className="flex flex-col m-10 mt-24">
                <div className="m-14">
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
    </>)
}