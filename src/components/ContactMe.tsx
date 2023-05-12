'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { PageInfo } from "@/typings";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {
    pageInfo: PageInfo
}

function ContactMe({ pageInfo }: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:sambithrey@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
    };

    return (
        <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="sectionHeading">
                Contact
            </h3>
            <div className="flex flex-col space-y-10 top-32">
                <h4 className="text-4xl font-semibold text-center">
                    Have I got what you need? 
                    <span className="underline decoration-[#e84118]/50"> Lets talk</span>
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#e84118] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">{pageInfo.phoneNumber}</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#e84118] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">{pageInfo.address}</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#e84118] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">{pageInfo.email}</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit mx-auto"
                >
                    <div className="space-x-2">
                        <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                        <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                    </div>
                    <input {...register('subject')} placeholder="Subject" className="contactInput" type="text"/>
                    <textarea {...register('message')} placeholder="Message" className="contactInput" />
                    <button
                        type="submit"
                        className="bg-[#e84118] py-5 px-10 rounded-md text-black font-bold text-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe