import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
            <SidebarLink to ="/">Đăng ký</SidebarLink>
                <SidebarLink to ="/">Đăng nhập</SidebarLink>
                <SidebarLink to ="/">Xem chi tiết Voucher</SidebarLink>
                <SidebarLink to ="/">Tra cứu</SidebarLink>
                <SidebarLink to ="/">Thanh toán</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to= "/">Đặt mua</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
            
        
    );
};

export default Sidebar;