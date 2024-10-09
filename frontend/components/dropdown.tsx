"use client"
import {Select, SelectItem} from "@nextui-org/select";


const policies = [
    {key: 1, label: "apple"},
    {key: 2, label: 'google'},
    {key: 3, label: 'reddit'},
    {key: 4, label: 'proton'},
    {key: 5, label: 'openai'}
]

    export default function PolicyDropdown()
{
    return <div className="mt-8">
        <Select items={policies} placeholder="Select an option" variant="bordered" aria-label="Policy options">
            {policies.map((policy) => (
                <SelectItem key={policy.key}>{policy.label}</SelectItem>
            ))}
        </Select>
    </div>
}