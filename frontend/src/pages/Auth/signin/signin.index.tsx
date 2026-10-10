import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import CustomButton from "../../../components/button";

const schema = z.object({
    email: z.email(),
    password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 text-sm"
        >
            <div className="flex flex-col mb-2">
                <label htmlFor="email" className="cursor-pointer w-fit mb-1">
                    Email
                </label>
                <input
                    {...register("email")}
                    className="outline outline-border border-2 border-border py-1.5 px-2.5 rounded-lg text-black-1"
                    placeholder="you@example.com"
                    id="email"
                />
                {errors.email && (
                    <p className="text-black-1 pl-1.5 mt-1.5">
                        - {errors.email.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col mb-5">
                <label htmlFor="password" className="cursor-pointer w-fit mb-1">
                    Password
                </label>
                <input
                    type="password"
                    {...register("password")}
                    className="outline outline-border border-2 border-border py-1.5 px-2.5 rounded-lg text-black-1"
                    placeholder="at least 6 characters"
                    id="password"
                />
                {errors.password && (
                    <p className="text-black-1 pl-1.5 mt-1.5">
                        - {errors.password.message}
                    </p>
                )}
            </div>
            <CustomButton type="submit" className="pb-3 text-sm">
                Sign in
            </CustomButton>
        </form>
    );
};
export default SignIn;
