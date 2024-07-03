"use client";
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
    invoice: string;
    paymentStatus: PaymentStatus;
    totalAmount: string;
    paymentMethod: string;
    fromDate: string;
    toDate: string;
    Comments?: string;
}

const invoices: Invoice[] = [
    {
        invoice: "INV001",
        paymentStatus: "Approved",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
        Comments: "An array of strings representing the given object's own enumerable string-keyed property keys."
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
        Comments: "An array of strings representing the given object's own enumerable string-keyed property keys."
    },
    {
        invoice: "INV003",
        paymentStatus: "Paid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
        Comments: "An array of strings representing the given object's own enumerable string-keyed property keys."

    },
    {
        invoice: "INV004",
        paymentStatus: "Pending",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
        Comments: "An array of strings representing the given object's own enumerable string-keyed property keys."
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",

    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",

    },
    {
        invoice: "INV007",
        paymentStatus: "Approved",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
        fromDate: "22-06-2024",
        toDate: "22-06-2024",
        Comments: "An array of strings representing the given object's own enumerable string-keyed property keys."
    },
]

const statusClasses = {
    Approved: "bg-blue-500 text-white",
    Pending: "bg-orange-500 text-white",
    Rejected: "bg-red-500 text-white",
    Paid: "bg-green-500 text-white",
};

export default function Landing() {
    return(<>
        <Navbar/>
        <div className="py-10 mt-[96px]">
        <TabsDemo />
        </div>
        <div>
            <Navbar />
            <div className="flex flex-col m-10">
                <div className="m-14">
                    <Table>
                        <TableHeader className="sticky top-24 bg-gray-100 z-10">
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
                                    <TableCell className="w-36">{invoice.Comments}</TableCell>
                                    <TableCell className="ml-10">{invoice.totalAmount}</TableCell>
                                    <TableCell className="text-right">
                                        <span className={`px-2 py-1 rounded ${statusClasses[invoice.paymentStatus]}`}>
                                            {invoice.paymentStatus}
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