// Entities
export interface IUser {
    id: string;
    userName: string;
    profileImage: string;
}

interface IMessage {
    authorName: string;
    authorImgSrc: string;
    messageContent: string;
    time: string;
}

interface INotification {
    notificationContent: React.ReactNode;
    time: string;
}

// Actions
export interface IClickEvent {
    expandedElementRef: MutableRefObject<any>;
    triggerRef: MutableRefObject<any>;
    isTargetOpen: boolean;
    setIsTargetOpen: SetStateAction<boolean>;
}
export interface IKeyEvent {
    isTargetOpen: boolean;
    setIsTargetOpen: SetStateAction<boolean>;
}

// Header elements
export interface IButtonWithDropdown {
    icon: React.ReactNode;
    children: React.JSX.Element;
}
export interface IHeaderDropdownLink {
    triggerRef: MutableRefObject<any>;
    setIsTargetOpen: SetStateAction<boolean>;
    icon: React.ReactNode;
}

// Sidebar elements
export interface IMainLinksCategoryGroupProps {
    groupTitle: string;
    children: React.JSX.Element | React.JSX.Element[];
}

export interface ISimpleMainNavLinkProps {
    title: string;
    linkPath: string;
    pathname: string;
    icon: React.ReactNode;
    pathnameIncludes: string;
}

export interface IExpandableMainNavLinkProps {
    title: string;
    icon: React.ReactNode;
    mainHref: string;
    pathname: string;
    pathnameToCompare: string;
    pathnameIncludes: string;
    children: React.JSX.Element | React.JSX.Element[];
}

export interface INavGroupSubLinkProps {
    title: string;
    linkPath: string;
    pathname: string;
}
