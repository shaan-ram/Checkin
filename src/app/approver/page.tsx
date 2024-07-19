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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import * as React from "react";
import { Button } from "@/components/ui/button";

type PaymentStatus = 'Approved' | 'Pending' | 'Rejected';

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
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/claim/findbystatus?status=Pending`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data: Invoice[] = await response.json();
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

    const handleStatusChange = (invoiceId: string, newStatus: PaymentStatus) => {
        setInvoices((prevInvoices) =>
            prevInvoices.map((invoice) =>
                invoice.invoice === invoiceId ? { ...invoice, submission_status: newStatus } : invoice
            )
        );
    };

    const saveApproverRequest = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/claim/submitclaim`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(invoices),
            });

            if (!response.ok) {
                console.error('Error submitting claims:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

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

    return (
        <div>
            <Navbar />
            <div className="mt-28 flex justify-end mr-10">
                <Button onClick={saveApproverRequest}>Submit</Button>
            </div>
            <div className="flex flex-col m-10">
                <div className="">
                    <Table>
                        <TableHeader className="sticky top-24 bg-white z-10">
                            <TableRow>
                                <TableHead className="text-orange-700">Date</TableHead>
                                <TableHead className="text-orange-700">Category</TableHead>
                                <TableHead className="text-orange-700">Amount</TableHead>
                                <TableHead className="text-orange-700">Account Number</TableHead>
                                <TableHead className="text-orange-700">Merchant Name</TableHead>
                                <TableHead className="text-orange-700">Comment</TableHead>
                                <TableHead className="text-right text-orange-700">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium">{invoice.date}</TableCell>
                                    <TableCell>{invoice.category}</TableCell>
                                    <TableCell>{invoice.amount}</TableCell>
                                    <TableCell className="">{invoice.account_number}</TableCell>
                                    <TableCell className="w-36">{invoice.merchant_name}</TableCell>
                                    <TableCell>{invoice.comment}</TableCell>
                                    <TableCell className="flex justify-end">
                                        <Select
                                            onValueChange={(value) => handleStatusChange(invoice.invoice, value as PaymentStatus)}
                                            defaultValue={invoice.submission_status}
                                        >
                                            <SelectTrigger className={`w-[180px]`}>
                                                <SelectValue placeholder={invoice.submission_status} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="Approved">Approved</SelectItem>
                                                    <SelectItem value="Pending">Pending</SelectItem>
                                                    <SelectItem value="Rejected">Rejected</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
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
