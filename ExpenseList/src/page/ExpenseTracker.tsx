import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";


function ExpenseTracker() {
    const [intakeItems, setIntakeInput] = useState("");
    const [intakePrice, setIntakePrice] = useState("");
    const [userDate, setUserDate] = useState<Dayjs | null>(dayjs());
    const [moneyCategory, setMoneyCategory] = useState<string>("");
    const intakeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIntakeInput(e.currentTarget.value);
    };

    const intakePriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIntakePrice(Number(e.currentTarget.value).toFixed(2));
    };
    const moneyType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMoneyCategory(e.target.value);
    };

    const saveToFB = (data: { item: string, price: string, type: string, date: string }) => {
        console.log("Data save to Firebase", data);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            item: intakeItems,
            price: intakePrice,
            type: moneyCategory,
            date: userDate ? userDate.format("MM/DD/YYYY") : ""
        };
        saveToFB(data);
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
                <label>
                    <select onChange={moneyType} value={moneyType}>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                        <option value="Saving">Saving</option>
                    </select>
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

