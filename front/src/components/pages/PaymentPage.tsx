import { useState } from "react";
import { useLocation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { router } from "@/routes/routes";

export default function PaymentPage() {
    const location = useLocation();
    const prixFromState = (location.state as number ) || 0;

    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        if (id === "cardNumber") setCardNumber(value.trim());
        else if (id === "expiryDate") setExpiryDate(value);
        else if (id === "cvv") setCvv(value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!cardNumber || !expiryDate || !cvv) {
            alert("Please fill in all payment details.");
            return;
        }  
        alert("Payment successful!");
        router.navigate("/");
    };

    return (
        <div>
            <Header />
            <form className="max-w-md mx-auto mt-10 mb-15 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                        Card Number
                    </label>
                    <input
                        className={`input validator shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white`}
                        id="cardNumber"
                        type="text"
                        inputMode="numeric"
                        required={true}
                        maxLength={19}
                        pattern="^(?:[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}|[0-9]{16})$"
                        title="must be 16 digits (spaces optional)"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <p className="validator-hint">must be 16 digits</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                        Expiry Date
                    </label>
                    <input
                        className={`input validator shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white`}
                        id="expiryDate"
                        type="date"
                        required={true}
                        min={new Date().toISOString().split("T")[0]}
                        max={new Date(new Date().setFullYear(new Date().getFullYear() + 10)).toISOString().split("T")[0]}
                        title="must be in the 1O next years "
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <p className="validator-hint">must be in the 10 next years</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                        CVV
                    </label>
                    <input
                        className={`input validator shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white`}
                        id="cvv"
                        type="number"
                        placeholder="123"
                        required={true}
                        maxLength={4}
                        pattern="\d{3,4}"
                        value={cvv}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <p className="validator-hint">must be 3 or 4 digits</p>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Pay {prixFromState} €
                </button>
            </form>
            <Footer />
        </div>
    );
}