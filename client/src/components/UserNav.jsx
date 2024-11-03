import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../pathConstants";

export default function UserNav() {
    const navigate = useNavigate();

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    //modify accordingly
    const onLogout = async () => {
        try {
            localStorage.removeItem("token");
            navigate("/");
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <header className="bg-white dark:bg-gray-900">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4 flex items-start gap-4">
                        <a
                            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                            href="/user/dashboard"
                        >
                            Dashboard
                        </a>

                        <a
                            className="block rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 dark:hover:bg-red-500"
                            onClick={onLogout}
                        >
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}