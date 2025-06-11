import { useState, useRef } from "react";
import { motion } from "framer-motion";
import TitleHeader from "../components/TitleHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSession, useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";

const ScheduleAppointment = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        contact: "",
        description: "",
        dateTime: null,
    });
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);
    const session = useSession();
    const supabase = useSupabaseClient();
    const { isloading } = useSessionContext();

    if (isloading) {
        return <></>
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (date) => {
        setForm((prev) => ({ ...prev, dateTime: date }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/api/calendar/schedule", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                contact: form.contact,
                description: form.description,
                dateTime: form.dateTime,
                token: session?.provider_token,
            }),
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
            alert("Appointment scheduled successfully!");
            setSubmitted(true);
        } else {
            alert("Failed to schedule appointment.");
        }
    };

    const googleSignIn = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                scopes: "https://www.googleapis.com/auth/calendar",
            },
        });
        if (error) {
            console.error("Google Sign-In Error:", error.message);
        } else {
            console.log("Redirecting to Google Sign-In...");
        }
    };

    const googleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Sign Out Error:", error.message);
        } else {
            console.log("Successfully signed out");
            setForm({
                name: "",
                email: "",
                contact: "",
                dateTime: null,
            });
            setSubmitted(false);
        }
    };

    console.log(session);

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full md:px-10 px-5">
                <TitleHeader
                    title="Book an Appointment"
                    sub="📅 Schedule a call with us!"
                />
                <div className="grid-12-cols mt-16">
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-7"
                            >
                                <div>
                                    {/* {
                                        session ? (
                                            <>
                                                <p className="text-blue-300 mb-2">Logged in as: {session.user.email}</p>
                                                <button onClick={googleSignOut} className="bg-gray-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors mb-4">
                                                    Sign Out.
                                                </button>
                                            </>
                                        ) : (
                                            <button onClick={googleSignIn} className="bg-gray-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors mb-4">
                                                Sign In With Google.
                                            </button>
                                        )
                                    } */}
                                    <label htmlFor="name">Your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What’s your good name?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What’s your email address?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="description">Description</label>
                                    <input
                                        type="text"
                                        id="description"
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="Enter a brief description for the appointment"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact">Contact Number</label>
                                    <input
                                        type="tel"
                                        id="contact"
                                        name="contact"
                                        value={form.contact}
                                        onChange={handleChange}
                                        placeholder="Phone or WhatsApp number"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="dateTime">Pick a Date & Time</label>
                                    <DatePicker
                                        selected={form.dateTime}
                                        onChange={handleDateChange}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        minDate={new Date()}
                                        placeholderText="Click to select"
                                        className="w-full p-2 border rounded"
                                    />
                                </div>

                                <button type="submit">
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            Schedule Appointment
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="xl:col-span-7 min-h-96">
                        <div className="bg-[#1f1f1f] text-teal-500 w-full h-full rounded-3xl overflow-hidden p-8">
                            <h3 className="text-xl font-semibold mb-4 text-center">📆 Your Appointment Preview</h3>
                            {form.dateTime ? (
                                <div className="text-center text-lg">
                                    <p><strong>Date & Time:</strong> {form.dateTime.toLocaleString()}</p>
                                </div>
                            ) : (
                                <p className="text-center text-white">Pick a date and time from the form</p>
                            )}
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                                    className="mt-8 p-4 bg-teal-800 rounded text-white"
                                >
                                    <p>✅ Appointment Details:</p>
                                    <ul className="mt-2 list-disc pl-5">
                                        <li><strong>Name:</strong> {form.name}</li>
                                        <li><strong>Email:</strong> {form.email}</li>
                                        <li><strong>Contact:</strong> {form.contact}</li>
                                        <li><strong>Date & Time:</strong> {form.dateTime.toLocaleString()}</li>
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleAppointment;
