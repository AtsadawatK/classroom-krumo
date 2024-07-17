import { FcHome } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { IoMenu } from "react-icons/io5";
import { FcBusiness } from "react-icons/fc";
import { FcCandleSticks } from "react-icons/fc";

export const MenuList = [
    {
        MenuName : "หน้าแรก",
        IconName : FcHome,
        link:'/',
    },

    {
        MenuName : "บทเรียน",
        IconName : FcCandleSticks,
        link:'/lesson',
    },
    {
        MenuName : "แบบทดสอบ",
        IconName : FcBusiness,
        link:'/exam',
    },

    {
        MenuName : "ครูผู้สอน",
        IconName : FcBusinesswoman,
        link:'/teacher',
    },
]
