import { Heading, Input, Button } from "../components";
import { useNavigate } from "react-router-dom";

export function Registration() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        navigate("/profile");
    }
    return (
        <div className="w-full min-h-screen flex p-5">
            <div className="w-full flex flex-col">
                <Heading content={"Create your\nPopX account"} className="leading-9 pr-32.5 whitespace-pre-line" />
                <form className="flex-1 flex flex-col text-[13px]" onSubmit={handleSubmit}>
                    <div>
                        <Input label="Full Name" type="text" placeholder="Enter full name" required={true} />
                        <Input label="Phone number" type="number" placeholder="Enter phone number" required={true} />
                        <Input label="Email address" type="email" placeholder="Enter email address" required={true} />
                        <Input label="Password" type="password" placeholder="Enter password" required={true} />
                        <Input label="Company name" type="text" placeholder="Enter company name" required={false} />
                        <div className="relative mt-4">
                            <div className="mb-1">Are you an Agency?<span className="text-warning">*</span></div>
                            <div className="flex gap-3">
                                <label htmlFor="radio-yes" className="flex items-center gap-1 cursor-pointer">
                                    <input type="radio" id="radio-yes" name="agency" value="Yes" className="scale-125 accent-blue" required /> Yes
                                </label>
                                <label htmlFor="radio-no" className="flex items-center gap-1 cursor-pointer">
                                    <input type="radio" id="radio-no" name="agency" value="No" className="scale-125 accent-blue" required /> No
                                </label>
                            </div>
                        </div>
                    </div>
                    <Button name="Create Account" type="submit" category="primary" disabled={false} className="mt-auto pt-0 mb-8 text-[16px]" />
                </form>
            </div>
        </div>
    );
}