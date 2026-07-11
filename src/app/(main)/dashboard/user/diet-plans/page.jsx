import Image from 'next/image';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import {
    MdRestaurantMenu,
    MdTrackChanges,
    MdSignalCellularAlt,
} from 'react-icons/md';
import { IoLeafSharp } from 'react-icons/io5';
import DietPlanCard from '@/components/dashboard/DietPlanCard';

export default async function DietPlansPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userData = session?.user;

    const goalLabels = {
        'build-muscle': 'Build Muscle',
        'lose-weight': 'Lose Weight',
        'stay-fit': 'Stay Fit',
    };

    const activityLabels = {
        beginner: 'Beginner',
        moderate: 'Moderate',
        active: 'Active',
    };

    const dietPlans = [
        {
            id: 1,
            title: 'Beginner Muscle Gain Diet',
            goal: 'build-muscle',
            badge: 'Build Muscle',
            level: 'beginner',
            calories: '2200 - 2400 kcal',
            meals: '4 meals/day',
            foodFocus: 'High Protein',
            thumbnail: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop',
            description: 'A simple high-protein meal plan for beginners who want to build muscle.',
            foods: ['Eggs', 'Chicken Breast', 'Brown Rice', 'Greek Yogurt'],
        },
        {
            id: 2,
            title: 'Intermediate Muscle Gain Diet',
            goal: 'build-muscle',
            badge: 'Build Muscle',
            level: 'moderate',
            calories: '2500 - 2700 kcal',
            meals: '5 meals/day',
            foodFocus: 'Protein + Carbs',
            thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop',
            description: 'A balanced meal plan with more protein, carbs, and healthy calories.',
            foods: ['Oats', 'Fish', 'Sweet Potato', 'Cottage Cheese'],
        },
        {
            id: 3,
            title: 'Advanced Muscle Gain Diet',
            goal: 'build-muscle',
            badge: 'Build Muscle',
            level: 'active',
            calories: '2800 - 3000 kcal',
            meals: '5 meals/day',
            foodFocus: 'High Energy',
            thumbnail: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
            description: 'A higher-calorie diet for active users focused on muscle growth.',
            foods: ['Lean Beef', 'Rice', 'Peanut Butter', 'Protein Smoothie'],
        },
        {
            id: 4,
            title: 'Beginner Weight Loss Diet',
            goal: 'lose-weight',
            badge: 'Lose Weight',
            level: 'beginner',
            calories: '1500 - 1700 kcal',
            meals: '3 meals/day',
            foodFocus: 'Light Meals',
            thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
            description: 'A light calorie-controlled meal plan for beginner weight loss.',
            foods: ['Boiled Eggs', 'Vegetable Soup', 'Grilled Chicken', 'Fruits'],
        },
        {
            id: 5,
            title: 'Intermediate Fat Loss Diet',
            goal: 'lose-weight',
            badge: 'Lose Weight',
            level: 'moderate',
            calories: '1700 - 1900 kcal',
            meals: '4 meals/day',
            foodFocus: 'Lean Protein',
            thumbnail: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1200&auto=format&fit=crop',
            description: 'A balanced fat-loss plan with lean protein and fiber-rich meals.',
            foods: ['Oats', 'Salad Bowl', 'Fish', 'Low-fat Yogurt'],
        },
        {
            id: 6,
            title: 'Advanced Fat Burn Diet',
            goal: 'lose-weight',
            badge: 'Lose Weight',
            level: 'active',
            calories: '1900 - 2100 kcal',
            meals: '4 meals/day',
            foodFocus: 'Clean Eating',
            thumbnail: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop',
            description: 'A clean and controlled diet plan for active users who train regularly.',
            foods: ['Egg Whites', 'Quinoa', 'Turkey', 'Green Smoothie'],
        },
        {
            id: 7,
            title: 'Beginner Healthy Diet',
            goal: 'stay-fit',
            badge: 'Stay Fit',
            level: 'beginner',
            calories: '1800 - 2000 kcal',
            meals: '3 meals/day',
            foodFocus: 'Simple Balanced',
            thumbnail: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop',
            description: 'A simple balanced eating plan to stay healthy and active.',
            foods: ['Fruits', 'Vegetables', 'Rice', 'Eggs'],
        },
        {
            id: 8,
            title: 'Balanced Maintenance Diet',
            goal: 'stay-fit',
            badge: 'Stay Fit',
            level: 'moderate',
            calories: '2000 - 2200 kcal',
            meals: '4 meals/day',
            foodFocus: 'Balanced Nutrition',
            thumbnail: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
            description: 'A balanced diet with protein, carbs, healthy fats, and fiber.',
            foods: ['Chicken', 'Brown Rice', 'Avocado', 'Greek Yogurt'],
        },
        {
            id: 9,
            title: 'Active Wellness Diet',
            goal: 'stay-fit',
            badge: 'Stay Fit',
            level: 'active',
            calories: '2200 - 2400 kcal',
            meals: '4 meals/day',
            foodFocus: 'Performance Meals',
            thumbnail: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=1200&auto=format&fit=crop',
            description: 'A clean eating plan for active users who want to maintain fitness.',
            foods: ['Fish', 'Sweet Potato', 'Nuts', 'Smoothie Bowl'],
        },
    ];

    const recommendedPlan = dietPlans.find(
        (plan) =>
            plan.goal === userData?.fitnessGoal &&
            plan.level === userData?.activityLevel
    );

    const otherPlans = dietPlans.filter((plan) => plan.id !== recommendedPlan?.id);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#6A9C89]">
                    Diet Plans
                </p>

                <h1 className="text-3xl font-bold text-[#16423C] md:text-4xl">
                    Find Your Best Meal Plan
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5F6F69]">
                    Your recommended diet plan is selected from your fitness goal and activity level.
                </p>
            </div>

            {/* User Preference */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-sm text-[#5F6F69]">Fitness Goal</p>
                    <h3 className="mt-2 text-xl font-bold text-[#16423C]">
                        {goalLabels[userData?.fitnessGoal] || 'Not Set'}
                    </h3>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-sm text-[#5F6F69]">Activity Level</p>
                    <h3 className="mt-2 text-xl font-bold text-[#16423C]">
                        {activityLabels[userData?.activityLevel] || 'Not Set'}
                    </h3>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-sm text-[#5F6F69]">BMI Score</p>
                    <h3 className="mt-2 text-xl font-bold text-[#16423C]">
                        {userData?.bmi || 'Not Set'}
                    </h3>
                </div>
            </div>

            {/* Recommended Plan */}
            {recommendedPlan && (
                <section className="pt-6">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-[#16423C]">
                            Recommended For You
                        </h2>

                        <span className="rounded-full bg-[#C4DAD2] px-4 py-2 text-xs font-semibold text-[#16423C]">
                            Best Match
                        </span>
                    </div>

                    <div className="grid overflow-hidden rounded-3xl bg-[#003F32] shadow-sm lg:grid-cols-[1fr_0.9fr]">
                        <div className="p-7 text-white md:p-8">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                                <IoLeafSharp />
                            </div>

                            <h3 className="text-3xl font-bold">
                                {recommendedPlan.title}
                            </h3>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                                {recommendedPlan.description}
                            </p>

                            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                <div className="rounded-2xl bg-white/10 p-4">
                                    <MdRestaurantMenu className="mb-2 text-xl" />
                                    <p className="text-xs text-white/60">Meals</p>
                                    <h4 className="text-sm font-bold">
                                        {recommendedPlan.meals}
                                    </h4>
                                </div>

                                <div className="rounded-2xl bg-white/10 p-4">
                                    <MdTrackChanges className="mb-2 text-xl" />
                                    <p className="text-xs text-white/60">Calories</p>
                                    <h4 className="text-sm font-bold">
                                        {recommendedPlan.calories}
                                    </h4>
                                </div>

                                <div className="rounded-2xl bg-white/10 p-4">
                                    <MdSignalCellularAlt className="mb-2 text-xl" />
                                    <p className="text-xs text-white/60">Food Focus</p>
                                    <h4 className="text-sm font-bold">
                                        {recommendedPlan.foodFocus}
                                    </h4>
                                </div>
                            </div>

                            <div className="mt-7">
                                <p className="mb-3 text-sm font-semibold text-white">
                                    Suggested Foods
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {recommendedPlan.foods.map((food) => (
                                        <span
                                            key={food}
                                            className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white"
                                        >
                                            {food}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative min-h-[280px]">
                            <Image
                                src={recommendedPlan.thumbnail}
                                alt={recommendedPlan.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#003F32]/60 to-transparent"></div>
                        </div>
                    </div>
                </section>
            )}

            {/* Other Diet Plans */}
            <section className="pt-8">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-[#16423C]">
                        Other Diet Plans
                    </h2>

                    <p className="mt-2 text-sm text-[#5F6F69]">
                        Explore other meal plans for different goals and activity levels.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {otherPlans.map((plan) => (
                        <DietPlanCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </section>

            {!recommendedPlan && (
                <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
                    <h2 className="text-2xl font-bold text-[#16423C]">
                        No recommended diet plan found
                    </h2>

                    <p className="mt-3 text-sm text-[#5F6F69]">
                        Please update your fitness goal and activity level from your profile.
                    </p>
                </div>
            )}
        </div>
    );
}