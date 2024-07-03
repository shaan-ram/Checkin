"use client";
import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const reimbursement = [
    {
        value: "travel",
        label: "Travel reimbursement",
    },
    {
        value: "expense",
        label: "Expense reimbursement",
    },
    {
        value: "internet",
        label: "Internet reimbursement",
    }
]

interface DropDownProps {
    value: string;
    onChange: (value: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ value, onChange }) => {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="flex flex-col w-38">
            <div className="w-full bg-white p-4">
                <h1 className="inline-block text-2xl">
                    {value ? reimbursement.find((reimbursement) => reimbursement.value === value)?.label : "New reimbursement"}
                </h1>
            </div>
            <div>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="justify-between p-2 m-5 ml-[200px] text-slate-500 w-[245px]"
                        >
                            {value
                                ? reimbursement.find((reimbursement) => reimbursement.value === value)?.label
                                : "Select reimbursement..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search reimbursement..." className="h-9" />
                            <CommandList>
                                <CommandEmpty>No reimbursement found.</CommandEmpty>
                                <CommandGroup>
                                    {reimbursement.map((reimbursement) => (
                                        <CommandItem
                                            key={reimbursement.value}
                                            value={reimbursement.value}
                                            onSelect={(currentValue) => {
                                                onChange(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                        >
                                            {reimbursement.label}
                                            <CheckIcon
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    value === reimbursement.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default DropDown;
