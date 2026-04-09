import { Heading, Input, Button } from "../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const disabled = !email || !password;

    function handleSubmit(e) {
        e.preventDefault();

        navigate("/profile");
    }

    return (
        <div className="min-h-screen w-full flex items-start justify-start bg-body p-5 md:items-center md:justify-center">
            <div className="w-full md:max-w-83.75">
                <Heading content={"Signin to your\nPopX account"} className="leading-9 pr-25 whitespace-pre-line" />
                <p className="text-primary opacity-[.6] pr-21.25 mt-2 text-[18px] leading-6.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <form className="text-[13px]" onSubmit={handleSubmit}>
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter email address"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />

                    <Button
                        name="Login"
                        type="submit"
                        category="primary"
                        disabled={disabled}
                        className="mt-3.5 text-[16px]"
                    />
                </form>
            </div>
        </div>
    );
}