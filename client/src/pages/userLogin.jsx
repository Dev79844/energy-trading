import React from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../pathConstants";

export default function UserLogin() {

    const navigate = useNavigate();

    
    //modify accordingly
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    //modify accordingly
    const onLogin = async () => {
        try {
            const response = await axios.post(`${BASE_URL[0]}/api/auth/user/login`, user);

            if (response.status === 200)
            {
                console.log("Login success", response.data);
                localStorage.setItem("token", response.data.token);
                navigate("/user/dashboard");
            }
            else
            {
                console.log("Login failed!");
                alert("Login unsuccessful!");
            }
        } catch (error) {
            console.log("login failed", error.message);
            alert("Login unsuccessful!");
        }
    }
    
    return (
        <section className="min-h-screen flex items-stretch text-white">
            <div className="lg:flex w-1/2 hidden bg-black bg-no-repeat bg-cover relative items-center">
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-left tracking-wide text-white">Finding stalls made easy!</h1>
                    <p className="text-3xl my-4 text-white">Find the most phenomenal street food in a few clicks!</p>
                </div>
            </div>
            {/* style={{backgroundColor: "#161616"}} */}
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-orange-700" >
                <div className="w-full py-6 z-20">
                    <h1 className="my-6">
                        <a href="/"className="text-5xl font-bold tracking-wide text-gray-100 hover:text-gray-300">Laari Khojo</a>
                    </h1>
                    <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <div className="pb-2 pt-4">
                            <input type="email" name="email" id="email" placeholder="Email" value={user.email}
                                    onChange={(e) => setUser({...user, email: e.target.value})}
                                    className="block w-full p-4 text-lg rounded-sm bg-black"/>
                        </div>
                        <div className="pb-2 pt-4">
                            <input className="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" value={user.password}
                                    onChange={(e) => setUser({...user, password: e.target.value})}
                                    placeholder="Password"/>
                        </div>
                        <div className="px-4 pb-2 pt-4">
                            <button onClick={onLogin} className="uppercase block w-full p-4 text-lg rounded-full bg-blue-600  focus:outline-none">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}