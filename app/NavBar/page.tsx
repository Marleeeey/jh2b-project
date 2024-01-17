'use client'

import { LuAlarmMinus } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";

const page = () => {
  const currentPath = usePathname();
  const Links = [
    { label: <FcManager />, href: "/presenseList" },
    { label: <FaPlus />, href: "/newCandidat" },
  ];
  return (
    <nav className="flex border-b space-x-6 px-5 mb-5 items-center h-14 w-full justify-between">
        <LuAlarmMinus />
      <ul className="flex space-x-6">
        {Links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
                'text-zinc-900': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors':true,
                'active:scale-75 transition-all':true
                
              })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default page;
