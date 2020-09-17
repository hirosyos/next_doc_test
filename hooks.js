import { useRouter } from "next/router";

export const useAppRouter = () => {
    const router = useRouter();
    return [
        router,
        {
            needAuth: router.route !== "/" && router.route !== "/auth",
        },
    ];
};
