import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import BMICalculatorClient from '@/components/dashboard/BMICalculatorClient';

export default async function BMICalculatorPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userData = session?.user;

    return <BMICalculatorClient userData={userData} />;
}