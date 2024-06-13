import ShoppingTop from "@/components/ShoppingTop";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    // const path = usePathname()
    return (
        <>
            <ShoppingTop btext="Store. " gtext="The best way to buy the products you love."/>
            {children}
        </>
    )
}