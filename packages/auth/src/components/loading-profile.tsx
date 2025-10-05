import { Loader } from "lucide-react";

export default function LoadingProfile() {
    return (
        <div className={"h-full w-full flex flex-col items-center gap-4"}>
            <p>Loading your Profile</p>
            <Loader></Loader>
        </div>
    );
}
