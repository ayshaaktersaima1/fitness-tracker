import Image from 'next/image';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import {
    MdAccessTime,
    MdFitnessCenter,
    MdSignalCellularAlt,
} from 'react-icons/md';
import WorkoutPlanCard from '@/components/dashboard/workoutPlanCard';


export default async function WorkoutPlansPage() {
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

    const workoutPlans = [
        {
            id: 1,
            title: 'Beginner Strength Plan',
            goal: 'build-muscle',
            level: 'beginner',
            difficulty: 'Beginner',
            duration: '25 min',
            muscleGroup: 'Full Body',
            thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
            description: 'Simple strength workouts to build muscle safely as a beginner.',
            exercises: ['Bodyweight Squats', 'Push-ups', 'Dumbbell Rows', 'Plank'],
        },
        {
            id: 2,
            title: 'Intermediate Strength Plan',
            goal: 'build-muscle',
            level: 'moderate',
            difficulty: 'Intermediate',
            duration: '35 min',
            muscleGroup: 'Upper + Lower Body',
            thumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
            description: 'A balanced muscle-building plan with more strength volume.',
            exercises: ['Goblet Squats', 'Bench Press', 'Lat Pulldown', 'Leg Raises'],
        },
        {
            id: 3,
            title: 'Advanced Strength Plan',
            goal: 'build-muscle',
            level: 'active',
            difficulty: 'Advanced',
            duration: '45 min',
            muscleGroup: 'Full Body Strength',
            thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
            description: 'A stronger routine for active users focused on muscle growth.',
            exercises: ['Deadlifts', 'Squats', 'Shoulder Press', 'Pull-ups'],
        },
        {
            id: 4,
            title: 'Beginner Weight Loss Plan',
            goal: 'lose-weight',
            level: 'beginner',
            difficulty: 'Beginner',
            duration: '20 min',
            muscleGroup: 'Cardio + Core',
            thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1200&auto=format&fit=crop',
            description: 'Light cardio exercises to start losing weight with consistency.',
            exercises: ['Brisk Walking', 'Step-ups', 'Jumping Jacks', 'Stretching'],
        },
        {
            id: 5,
            title: 'Fat Burn Cardio Plan',
            goal: 'lose-weight',
            level: 'moderate',
            difficulty: 'Intermediate',
            duration: '30 min',
            muscleGroup: 'Cardio + Legs',
            thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
            description: 'Cardio and bodyweight movements for steady fat loss.',
            exercises: ['Jogging', 'Mountain Climbers', 'Squat Jumps', 'Bicycle Crunches'],
        },
        {
            id: 6,
            title: 'Advanced HIIT Plan',
            goal: 'lose-weight',
            level: 'active',
            difficulty: 'Advanced',
            duration: '40 min',
            muscleGroup: 'Full Body HIIT',
            thumbnail: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop',
            description: 'High-intensity workouts for active users who want faster results.',
            exercises: ['Burpees', 'High Knees', 'Jump Squats', 'Plank Jacks'],
        },
        {
            id: 7,
            title: 'Beginner Stay Fit Plan',
            goal: 'stay-fit',
            level: 'beginner',
            difficulty: 'Beginner',
            duration: '20 min',
            muscleGroup: 'Mobility + Full Body',
            thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
            description: 'Light workouts to stay active, flexible, and healthy.',
            exercises: ['Walking', 'Bodyweight Squats', 'Arm Circles', 'Basic Stretching'],
        },
        {
            id: 8,
            title: 'Balanced Fitness Plan',
            goal: 'stay-fit',
            level: 'moderate',
            difficulty: 'Intermediate',
            duration: '30 min',
            muscleGroup: 'Full Body',
            thumbnail: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop',
            description: 'A balanced routine with cardio, strength, and flexibility.',
            exercises: ['Jogging', 'Lunges', 'Push-ups', 'Yoga Stretch'],
        },
        {
            id: 9,
            title: 'Active Fitness Plan',
            goal: 'stay-fit',
            level: 'active',
            difficulty: 'Advanced',
            duration: '40 min',
            muscleGroup: 'Strength + Mobility',
            thumbnail: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?q=80&w=1200&auto=format&fit=crop',
            description: 'A complete plan for active users who want to maintain fitness.',
            exercises: ['Running', 'Strength Circuit', 'Core Workout', 'Mobility Training'],
        },
    ];

    const recommendedPlan = workoutPlans.find(
        (plan) =>
            plan.goal === userData?.fitnessGoal &&
            plan.level === userData?.activityLevel
    );

    const otherPlans = workoutPlans.filter((plan) => plan.id !== recommendedPlan?.id);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#6A9C89]">
                    Workout Plans
                </p>

                <h1 className="text-3xl font-bold text-[#16423C] md:text-4xl">
                    Find Your Best Workout
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5F6F69]">
                    Your recommended workout is selected from your fitness goal and activity level.
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

            {/* Recommended */}
            {recommendedPlan && (
                <section className="pt-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                        <h2 className="text-2xl font-bold text-[#16423C]">
                            Recommended For You
                        </h2>

                        <span className="shrink-0 rounded-full bg-[#C4DAD2] px-4 py-2 text-xs font-semibold text-[#16423C]">
                            Best Match
                        </span>
                    </div>

                    <div className="grid overflow-hidden rounded-3xl bg-[#003F32] shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="p-7 text-white md:p-8">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                                <MdFitnessCenter />
                            </div>

                            <h3 className="text-3xl font-bold">
                                {recommendedPlan.title}
                            </h3>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                                {recommendedPlan.description}
                            </p>

                            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                <div className="rounded-2xl bg-white/10 p-4">
                                    <MdAccessTime className="mb-2 text-xl" />
                                    <p className="text-xs text-white/60">Duration</p>
                                    <h4 className="text-sm font-bold">
                                        {recommendedPlan.duration}
                                    </h4>
                                </div>

                                <div className="rounded-2xl bg-white/10 p-4">
                                    <MdSignalCellularAlt className="mb-2 text-xl" />
                                    <p className="text-xs text-white/60">Difficulty</p>
                                    <h4 className="text-sm font-bold">
                                        {recommendedPlan.difficulty}
                                    </h4>
                                </div>

                                <div className="rounded-2xl bg-white/10 p-4">
                                    <MdFitnessCenter className="mb-2 text-xl" />
                                    <p className="text-xs text-white/60">Muscle Group</p>
                                    <h4 className="text-sm font-bold">
                                        {recommendedPlan.muscleGroup}
                                    </h4>
                                </div>
                            </div>

                            <div className="mt-7">
                                <p className="mb-3 text-sm font-semibold text-white">
                                    Included Exercises
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {recommendedPlan.exercises.map((exercise) => (
                                        <span
                                            key={exercise}
                                            className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white"
                                        >
                                            {exercise}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative min-h-70">
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

            {/* All Plans */}
            <section className="pt-8">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-[#16423C]">
                        All Available Workout Plans
                    </h2>

                    <p className="mt-2 text-sm text-[#5F6F69]">
                        Explore other workout options based on different goals and difficulty levels.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {otherPlans.map((plan) => (
                        <WorkoutPlanCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </section>
        </div>
    );
}