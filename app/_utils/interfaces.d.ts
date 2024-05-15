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
