
import { Spinner } from "@heroui/react";

export default function loading() {
    return (
        <div className="flex items-center justify-center gap-8 h-screen">

            <div className="flex flex-col items-center gap-2 justify-center">
                <Spinner size="lg" color={'[#16423C]'} />

            </div>

        </div>
    );
}