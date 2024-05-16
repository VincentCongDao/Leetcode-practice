import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { dbFirebase } from "../auth/firebase";

function ExpenseTracker() {
    const [intakeItems, setIntakeInput] = useState("");
    const [intakePrice, setIntakePrice] = useState<number>(0);
    const [userDate, setUserDate] = useState<Dayjs | null>(dayjs());
    const [moneyCategory, setMoneyCategory] = useState<string>("");
    const intakeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIntakeInput(e.currentTarget.value);
    };

    const intakePriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIntakePrice(parseFloat(e.currentTarget.value));
    };
    const moneyType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMoneyCategory(e.target.value);
    };

    const saveToFB = async (data: { item: string, price: number, type: string, date: string }) => {
        try {
            const docId = `${data.item}-${data.date}`;
            const docRef = await setDoc(doc(collection(dbFirebase, "expense"), docId), data)
            const addDb = await addDoc(collection(dbFirebase, "expense"), data)
            console.log("Form document information: ", docRef)
            console.log("Adding to the documentation: ", addDb)
        }
        catch (err) {
            console.log("Error: ", err)
        }
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
        console.log(data)
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
                        required
                    />
                </label>
                <label className="form-label">
                    What was the price of the item?
                    <input
                        type="number"
                        value={intakePrice}
                        onChange={intakePriceHandler}
                        required
                    />
                </label>
                <label>
                    <select onChange={moneyType} required>
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

