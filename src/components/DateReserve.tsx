"use client"
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import dayjs, { Dayjs } from "dayjs";


export default function LocationDateReserve(){

    const [reserveDate, setReserveDate] = useState<Dayjs | null>(null)
    const[venue, setVenue] = useState('Bloom')

    return(
        <div className = "bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="bg-white" value={reserveDate} onChange={(value) => {setReserveDate(value); alert(value)}}/>
            </LocalizationProvider>

            <Select variant="standard" name="venue" id="venue" value={venue} onChange={(e) => setVenue(e.target.value)} className="h-[2em] w-[200px]">
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
        </div>
    )
}