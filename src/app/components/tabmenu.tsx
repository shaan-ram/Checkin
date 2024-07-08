"use client";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TabsDemo() {
    return (
        <div className="flex px-44">
            <div>
                <Tabs defaultValue="account" className="w-[800px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Reimbursement</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card className="w-full">
                            <div className="flex justify-between items-center">
                                <CardHeader className="w-[600px]">
                                    <CardTitle>Travel reimbursement</CardTitle>
                                    <CardDescription>
                                        Track and manage travel expenses with our Employee Reimbursement App for streamlined approvals and faster reimbursements.
                                    </CardDescription>
                                </CardHeader>
                            </div>
                            <CardFooter>
                                <Button>
                                    <Link href="/dashboard">Add new reimbursement</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
            <Avatar className="w-[18%] h-[40%] ml-32">
        <AvatarImage src="https://github.com/shadcn.png"  />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
        </div>

    )
}
