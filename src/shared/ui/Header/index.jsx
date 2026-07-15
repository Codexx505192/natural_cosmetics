import Link from "next/link";
import { useState } from "react";

export default function Header(){
const [openMenu, setOpenMenu] = useState(false)

    return(
        <header>
            <div className="header_menu">
                <ul className={`header_lst ${openMenu ? "active": ""}`}>
                   <li>
                    <Link href="#" className="lnk_3">
                    о продукте
                    </Link>
                   </li>
                   <li>
                    <Link href="#" className="lnk_3">
                     Каталог
                    </Link>
                   </li>
                   <li>
                    <Link href="#" className="lnk_3">
                     Акции
                    </Link>
                   </li>
                   <li>
                    <Link href="#" className="lnk_3">
                     Полезное
                    </Link>
                   </li>
                   <li>
                    <Link href="#" className="lnk_3">
                     Авторы
                    </Link>
                   </li>
                   <li className="close" onClick={() => setOpenMenu(false)}>
                    выйти
                   </li>
                </ul>
                <div className="header_menu" onClick={() => setOpenMenu(!openMenu)}>
                    <img src="./img/menu.svg" alt="" />
                </div>
            </div>

            <div className="header_left">
                <ul className="header_list">
                    <li>
                        <Link href="#" className="lnk">
                          О продукте
                        </Link>
                    </li>

                    <li>
                        <Link href="#" className="lnk">
                          Каталог
                        </Link>
                    </li>

                    <li>
                        <Link href="#" className="lnk">
                          Акции
                        </Link>
                    </li>

                    <li>
                        <Link href="#" className="lnk">
                          Полезное
                        </Link>
                    </li>

                    <li>
                        <Link href="#" className="lnk">
                          Авторы
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="header_rigth">
                <div className="header_cart">
                   <div className="hdr_lm">
                     <img src="./img/cart.svg" alt="" />
                   </div>
                    <div className="header_counter">
                      <p className="txt_1">1</p>
                    </div>
                </div>

                <div className="header_rigth_itm">
                    <Link href="#" className="lnk_2">
                    Instagram
                    </Link>
                    <Link href="#" className="lnk_2">
                    Facebook
                    </Link>
                </div>
            </div>  
        </header>
    )
}