export interface IUser {
    id: string;
    userName: string;
    profileImage: string;
}

export interface IClickEvent {
    expandedElementRef: MutableRefObject<any>;
    triggerRef: MutableRefObject<any>
    isTargetOpen: boolean;
    setIsTargetOpen: SetStateAction<boolean>;
}
export interface IKeyEvent {
    isTargetOpen: boolean;
    setIsTargetOpen: SetStateAction<boolean>;
}