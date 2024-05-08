import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

function ExpenseTracker() {
    const [intakeItems, setIntakeInput] = useState("");
    const [intakePrice, setIntakePrice] = useState("");
    const [userDate, setUserDate] = useState<Dayjs | null>(dayjs());

    const intakeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIntakeInput(e.currentTarget.value);
    };

    const intakePriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIntakePrice(Number(e.currentTarget.value).toFixed(2));
    };

    const saveToMongo = (data: { item: string, price: string, date: string }) => {
        console.log("Data Saved to mongo", data);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            item: intakeItems,
            price: intakePrice,
            date: userDate ? userDate.format("MM/DD/YYYY") : ""
        };
        saveToMongo(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-wrapper">
                <label className="form-label">
                    What is the item?
                    <input
                        type="text"
                        value={intakeItems}
                        onChange={intakeInputHandler}
                    />
                </label>
                <label className="form-label">
                    What was the price of the item?
                    <input
                        type="number"
                        value={intakePrice}
                        onChange={intakePriceHandler}
                    />
                </label>
                <label className="form-label">
                    Date:{" "}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Select Date"
                            value={userDate}
                            onChange={(newDate) => setUserDate(newDate)}
                        />
                    </LocalizationProvider>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ExpenseTracker;

